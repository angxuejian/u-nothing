# Details: The Details disclosure element

A collapsible container that only displays its content when expanded.

## Basic Usage

::: demo
<uDetails>
<template #summary> Details </template>
Some details here.
</uDetails>
:::

## Props

| Prop Name | Description                              | Type    | Default |
| --------- | ---------------------------------------- | ------- | ------- |
| open      | Whether the content is visible           | boolean | false   |
| default   | Whether to use the default browser style | boolean | false   |

## Slots

| Slot Name | Description | Slot Props |
| --------- | ----------- | ---------- |
| default   | Content     | -          |
| summary   | Summary     | -          |

## Events

| Event Name | Description                                 | Callback Parameters |
| ---------- | ------------------------------------------- | ------------------- |
| change     | Triggered when the open/close state changes | `(value: boolean)`  |
