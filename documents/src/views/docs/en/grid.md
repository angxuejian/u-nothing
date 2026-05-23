# Grid: The Grid model

CSS grid model component.

## Basic Usage

::: demo
<template>
<uGrid areas="'header header' 'aside main' '. footer'" columns="50px 1fr" rows="30px 1fr 30px">
<uGridItem areaName="header">header</uGridItem>
<uGridItem areaName="aside">aside</uGridItem>
<uGridItem areaName="main">main</uGridItem>
<uGridItem areaName="footer">footer</uGridItem>
</uGrid>
</template>

<style>
.u-grid {
    width: 50%;
    height: 200px;
    border: 1px solid var(--u-color-primary);
    padding: 5px;
    box-sizing: border-box;
}
.u-grid-item {
    background-color: var(--u-color-primary-light-9);
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>

:::

## Grid Props

| Prop Name   | Description                              | Type                                                                                                                 | Default  |
| ----------- | ---------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| inline      | Whether to use `inline-grid` layout      | boolean                                                                                                              | false    |
| areas       | Named grid layout areas                  | [grid-template-areas](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Reference/Properties/grid-template-areas)     | '-'      |
| columns     | Size definition for grid columns         | [grid-template-columns](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Reference/Properties/grid-template-columns) | '-'      |
| rows        | Size definition for grid rows            | [grid-template-rows](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Reference/Properties/grid-template-rows)       | '-'      |
| autoFlow    | Direction and behavior of auto-placement | [grid-auto-flow](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Reference/Properties/grid-auto-flow)               | '-'      |
| autoColumns | Size of automatically generated columns  | [grid-auto-columns](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Reference/Properties/grid-auto-columns)         | '-'      |
| autoRows    | Size of automatically generated rows     | [grid-auto-rows](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Reference/Properties/grid-auto-rows)               | '-'      |
| size        | Component size                           | `small` / `medium` / `large`                                                                                         | `medium` |

## Grid Slots

| Slot Name | Description | Slot Props |
| --------- | ----------- | ---------- |
| default   | Content     | -          |

## Grid Item Props

| Prop Name | Description         | Type   | Default |
| --------- | ------------------- | ------ | ------- |
| areaName  | Grid item area name | string | '-'     |

## Grid Item Slots

| Slot Name | Description | Slot Props |
| --------- | ----------- | ---------- |
| default   | Content     | -          |
