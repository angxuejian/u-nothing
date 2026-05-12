class PCMProcessor extends AudioWorkletProcessor {
  process(inputs) {
    const input = inputs[0];

    if (input.length > 0) {
      const channelData = input[0];

      // 拷贝数据
      const pcmData = new Float32Array(channelData);
      this.port.postMessage(pcmData);
    }

    return true;
  }
}

registerProcessor('pcm-processor', PCMProcessor);
