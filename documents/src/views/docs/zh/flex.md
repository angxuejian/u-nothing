# Flex 弹性布局

CSS 弹性布局组件

## 基础用法

::: demo
<template>
<uFlex :columns='3' wrap fillLastRow>
<uFlexItem>1</uFlexItem>
<uFlexItem>2</uFlexItem>
<uFlexItem>3</uFlexItem>
<uFlexItem>4</uFlexItem>
<uFlexItem>5</uFlexItem>
<uFlexItem>6</uFlexItem>
<uFlexItem>7</uFlexItem>
<uFlexItem>8</uFlexItem>
</uFlex>
</template>

<style>
.u-flex {
    width: 50%;
    height: 200px;
    border: 1px solid var(--u-color-primary);
    padding: 5px;
    box-sizing: border-box;
}
.u-flex-item {
    background-color: var(--u-color-primary-light-9);
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>

:::

## Flex Props

| 属性名      | 说明                      | 类型                                                                                                     | 默认值   |
| ----------- | ------------------------- | -------------------------------------------------------------------------------------------------------- | -------- |
| inline      | 是否为 `inline-flex` 布局 | boolean                                                                                                  | false    |
| direction   | 主轴方向                  | [flex-direction](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Reference/Properties/flex-direction)   | 'row'    |
| wrap        | 是否允许换行              | boolean                                                                                                  | false    |
| align       | 交叉轴对齐方式            | [align-items](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Reference/Properties/align-items)         | '-'      |
| justify     | 主轴对齐方式              | [justify-content](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Reference/Properties/justify-content) | '-'      |
| columns     | 每行显示的子元素数量      | number                                                                                                   | '-'      |
| fillLastRow | 是否自动填充最后一行空位  | boolean                                                                                                  | '-'      |
| size        | 组件尺寸                  | `small` / `medium` / `large`                                                                             | `medium` |

## Flex 插槽

| 插槽名  | 说明 | 插槽属性 |
| ------- | ---- | -------- |
| default | 内容 | -        |

## Flex Item Props

| 属性名 | 说明               | 类型                                                                                             | 默认值 |
| ------ | ------------------ | ------------------------------------------------------------------------------------------------ | ------ |
| order  | 布局顺序           | number                                                                                           | '-'    |
| basis  | 主轴方向的初始大小 | [flex-basis](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Reference/Properties/flex-basis)   | '-'    |
| grow   | 剩余空间的相对比例 | [flex-grow](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Reference/Properties/flex-grow)     | '-'    |
| shrink | 收缩规则           | [flex-shrink](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Reference/Properties/flex-shrink) | '-'    |

## Flex Item 插槽

| 插槽名  | 说明 | 插槽属性 |
| ------- | ---- | -------- |
| default | 内容 | -        |
