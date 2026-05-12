<script lang="ts" setup>
import { useOptions, useNamespace, useConfig } from '@u-nothing/hooks';
import type { CommonProps } from '@u-nothing/config';
import { ref } from 'vue';
import uButton from '@u-nothing/components/button';
import PCMProcessor from '@u-nothing/components/recorder/worklet/pcm-processor.js?url';

interface Emits {
  (event: 'change', value: boolean): void;
  (event: 'error', value: string | any): void;
  (event: 'cancel'): void;
  (event: 'confirm'): void;
}
type Props = Pick<CommonProps, 'size'>;

defineOptions({
  name: useOptions('recorder'),
});

const ns = useNamespace('recorder');
const props = defineProps<Props>();
const emit = defineEmits<Emits>();
// const { testAttr } = useTestAttr();
const { sizeClass } = useConfig(props);
const isRecording = ref<boolean>(false);

let audioContext: AudioContext | null = null;
let mediaStream: MediaStream | null = null;
let sourceNode: MediaStreamAudioSourceNode | null = null;
let workletNode: AudioWorkletNode | null = null;

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
      const pcmFloat32 = event.data;

      emit('change', pcmFloat32);
    };
  } catch (error: any) {
    emit('error', error);
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
};

const handleCancel = () => {
  stopRecording();

  emit('cancel');
};

const handleConfirm = () => {};
</script>

<template>
  <div :class="[ns.b(), sizeClass]">
    <Transition mode="out-in">
      <u-button @click="startRecording" v-if="!isRecording" text>Recorder</u-button>

      <div v-else :class="ns.e('show')">
        <div>1</div>
        <div>
          <u-button @click="handleCancel" text>Cancel</u-button>
          <u-button @click="handleConfirm">Confirm</u-button>
        </div>
      </div>
    </Transition>
  </div>
</template>
