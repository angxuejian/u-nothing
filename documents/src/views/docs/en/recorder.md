# Recorder: Basic Recording Component

A basic recording component based on native browser audio APIs.

## Basic Usage

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

| Prop Name | Description    | Type                         | Default  |
| --------- | -------------- | ---------------------------- | -------- |
| size      | Component size | `small` / `medium` / `large` | `medium` |

## Events

| Event Name | Description                                         | Callback Parameters       |
| ---------- | --------------------------------------------------- | ------------------------- |
| change     | Triggered when audio data changes during recording. | `(value: Float32Array)`   |
| cancel     | Triggered when the recording is canceled            | -                         |
| confirm    | Triggered when the recording is confirmed           | `(value: Float32Array[])` |
| error      | Triggered when microphone permission is denied      | `(value: any)`            |
