# Grid 弹性布局

CSS 网格布局组件

## 基础用法

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

| 属性名      | 说明                      | 类型                                                                                                                 | 默认值   |
| ----------- | ------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| inline      | 是否为 `inline-grid` 布局 | boolean                                                                                                              | false    |
| areas       | 命名网格布局区域          | [grid-template-areas](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Reference/Properties/grid-template-areas)     | '-'      |
| columns     | 定义网格列的尺寸          | [grid-template-columns](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Reference/Properties/grid-template-columns) | '-'      |
| rows        | 定义网格行的尺寸          | [grid-template-rows](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Reference/Properties/grid-template-rows)       | '-'      |
| autoFlow    | 自动布局的排列方向与规则  | [grid-auto-flow](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Reference/Properties/grid-auto-flow)               | '-'      |
| autoColumns | 自动生成列时的默认尺寸    | [grid-auto-columns](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Reference/Properties/grid-auto-columns)         | '-'      |
| autoRows    | 自动生成行时的默认尺寸    | [grid-auto-rows](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Reference/Properties/grid-auto-rows)               | '-'      |
| size        | 组件尺寸                  | `small` / `medium` / `large`                                                                                         | `medium` |

## Grid 插槽

| 插槽名  | 说明 | 插槽属性 |
| ------- | ---- | -------- |
| default | 内容 | -        |

## Grid Item Props

| 属性名   | 说明             | 类型   | 默认值 |
| -------- | ---------------- | ------ | ------ |
| areaName | 子元素的区域名称 | string | '-'    |

## Grid Item 插槽

| 插槽名  | 说明 | 插槽属性 |
| ------- | ---- | -------- |
| default | 内容 | -        |
