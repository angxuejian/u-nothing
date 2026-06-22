# Recorder 基础录音元素

基于浏览器原生音频能力实现的基础录音组件

## 基础用法

::: demo

<script setup>
    const onCallbackError = (e) => {
        alert('Error: ' + e);
    };
</script>

<template>
    <uRecorder @error='onCallbackError'  />
</template>
:::

## Props

| 属性名 | 说明     | 类型                         | 默认值   |
| ------ | -------- | ---------------------------- | -------- |
| size   | 组件尺寸 | `small` / `medium` / `large` | `medium` |

## 事件

| 事件名  | 说明                         | 回调参数                  |
| ------- | ---------------------------- | ------------------------- |
| change  | 录音过程中音频数据变化时触发 | `(value: Float32Array)`   |
| cancel  | 取消录音时触发               | -                         |
| confirm | 确认录音后触发               | `(value: Float32Array[])` |
| error   | 授权错误时触发               | `(value: any)`            |
