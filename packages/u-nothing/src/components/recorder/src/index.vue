<script lang="ts" setup>
import { useOptions, useNamespace, useConfig, useStyle, useCssVar } from '@u-nothing/hooks';
import type { CommonProps } from '@u-nothing/config';
import { computed, nextTick, onMounted, onUnmounted, ref } from 'vue';
import uButton from '@u-nothing/components/button';
import PCMProcessor from '@u-nothing/components/recorder/worklet/pcm-processor.js?url';

interface Emits {
  (event: 'change', value: Float32Array): void;
  (event: 'error', value: string | any): void;
  (event: 'cancel'): void;
  (event: 'confirm', value: Float32Array[]): void;
}
type Props = Pick<CommonProps, 'size'>;

defineOptions({
  name: useOptions('recorder'),
});

const ns = useNamespace('recorder');
const props = defineProps<Props>();
const emit = defineEmits<Emits>();
// const { testAttr } = useTestAttr();
const { sizeVal, sizeClass } = useConfig(props);
const isRecording = ref<boolean>(false);
const canvasRef = ref<HTMLCanvasElement | null>(null);
const FPS = 30;
const interval = 1000 / FPS;

let audioData: Float32Array[] = [];
let audioContext: AudioContext | null = null;
let mediaStream: MediaStream | null = null;
let sourceNode: MediaStreamAudioSourceNode | null = null;
let workletNode: AudioWorkletNode | null = null;
let rAFId: number | null = null;
let readIndex: number = 0;
let lastTime = 0;

const primaryColor = computed(() => {
  return getComputedStyle(document.documentElement).getPropertyValue(useCssVar('color-primary'));
});

const widthSize = computed(() => {
  if (sizeVal.value === 'small') {
    return {
      min: 70,
      max: 300,
      height: 30,
    };
  } else if (sizeVal.value === 'large') {
    return {
      min: 90,
      max: 400,
      height: 40,
    };
  }
  return {
    min: 80,
    max: 350,
    height: 35,
  };
});

const divStyle = computed(() => {
  return {
    ...useStyle('min-width', `${widthSize.value.min}px`),
    ...useStyle('max-width', `${widthSize.value.max}px`),
    ...useStyle('height', `${widthSize.value.height}px`),
  };
});

const startRecording = async () => {
  try {
    // 获取麦克风
    mediaStream = await navigator.mediaDevices.getUserMedia({
      audio: { sampleRate: 16000, channelCount: 1, echoCancellation: true, noiseSuppression: true },
    });
    isRecording.value = true;

    // AudioContext
    audioContext = new AudioContext({
      sampleRate: 16000,
    });

    // 加载 worklet
    await audioContext.audioWorklet.addModule(PCMProcessor);

    // 创建音频源
    sourceNode = audioContext.createMediaStreamSource(mediaStream);

    // 创建 worklet 节点
    workletNode = new AudioWorkletNode(audioContext, 'pcm-processor');

    sourceNode.connect(workletNode);

    workletNode.port.onmessage = (event) => {
      const pcmFloat32: Float32Array = event.data;
      audioData.push(pcmFloat32);
      emit('change', pcmFloat32);
    };
  } catch (error: any) {
    emit('error', error);
  }
};

const drawWaveform = () => {
  if (!canvasRef.value) return;

  const canvas = canvasRef.value;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  const rect = canvas.getBoundingClientRect();

  const width = rect.width;
  const height = rect.height;
  const dpr = window.devicePixelRatio || 1;
  canvas.width = width * dpr;
  canvas.height = height * dpr;
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.scale(dpr, dpr);

  const gap = 5;
  const barWidth = 5;
  const minBarHeight = 10;
  const maxBarHeight = widthSize.value.height - 2;
  const barCount = Math.floor(width / (barWidth + gap));
  // const currentBars = new Array(barCount).fill(0);
  const targetBars = new Array(barCount).fill(0);
  const centerY = height / 2;

  const wave = (pcm: Float32Array) => {
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < barCount; i++) {
      const sample = pcm[i] || 0;
      targetBars[i] = Math.abs(sample);

      // currentBars[i] += (targetBars[i] - currentBars[i]) * 0.15;
      // const v = currentBars[i];

      const v = targetBars[i];
      const barHeight = minBarHeight + v * (maxBarHeight - minBarHeight);
      const x = i * (barWidth + gap);

      // 从底部
      // const y = height - barHeight;

      // 从中心
      const y = centerY - barHeight / 2;
      ctx.beginPath();
      ctx.fillStyle = primaryColor.value;
      ctx.fillRect(x, y, barWidth, barHeight);
      // ctx.roundRect(x, y, barWidth, barHeight, 20);
      ctx.fill();
    }
  };

  const draw = (now: number) => {
    rAFId = requestAnimationFrame(draw);
    if (readIndex >= audioData.length) return;
    const pcm = audioData[readIndex++];
    if (now - lastTime < interval) {
      return;
    }
    lastTime = now;
    wave(pcm);
  };

  rAFId = requestAnimationFrame(draw);
};

const onTransitionEnd = async () => {
  if (isRecording.value) {
    await nextTick();
    drawWaveform();
  }
};

const stopRecording = () => {
  sourceNode?.disconnect();
  workletNode?.disconnect();
  mediaStream?.getTracks().forEach((track) => {
    track.stop();
  });
  audioContext?.close();

  mediaStream = null;
  sourceNode = null;
  workletNode = null;
  audioContext = null;

  isRecording.value = false;

  if (rAFId) {
    cancelAnimationFrame(rAFId);
    rAFId = null;
    readIndex = 0;
    lastTime = 0;
  }
};

const handleCancel = () => {
  stopRecording();
  audioData = [];
  emit('cancel');
};

const handleConfirm = () => {
  stopRecording();
  const data = audioData.map((i) => new Float32Array(i));
  audioData = [];
  emit('confirm', data);
};

onUnmounted(() => {
  handleCancel();
});

onMounted(() => {
  // drawWaveform();///
});
</script>

<template>
  <div :class="[ns.b(), sizeClass, ns.is('recording', isRecording)]" :style="divStyle">
    <Transition @after-enter="onTransitionEnd" name="recorder" mode="out-in">
      <u-button @click="startRecording" v-if="!isRecording" text>Recorder</u-button>
      <div v-else :class="[ns.e('wrapper')]">
        <div :class="ns.e('wave')">
          <canvas ref="canvasRef"></canvas>
        </div>
        <div :class="ns.e('btn')">
          <u-button @click="handleCancel" text>Cancel</u-button>
          <u-button @click="handleConfirm">Confirm</u-button>
        </div>
      </div>
    </Transition>
  </div>
</template>
