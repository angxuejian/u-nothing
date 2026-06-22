# Flex: The Flexbox model

CSS flexbox model component.

## Basic Usage

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

| Prop Name   | Description                                | Type                                                                                                     | Default  |
| ----------- | ------------------------------------------ | -------------------------------------------------------------------------------------------------------- | -------- |
| inline      | Whether to use `inline-flex` layout        | boolean                                                                                                  | false    |
| direction   | Direction of the main axis                 | [flex-direction](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Reference/Properties/flex-direction)   | 'row'    |
| wrap        | Whether flex items are allowed to wrap     | boolean                                                                                                  | false    |
| align       | Alignment along the cross axis             | [align-items](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Reference/Properties/align-items)         | '-'      |
| justify     | Alignment along the main axis              | [justify-content](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Reference/Properties/justify-content) | '-'      |
| columns     | Number of items displayed per row          | number                                                                                                   | '-'      |
| fillLastRow | Whether to automatically fill the last row | boolean                                                                                                  | '-'      |
| size        | Component size                             | `small` / `medium` / `large`                                                                             | `medium` |

## Flex Slots

| Slot Name | Description | Slot Props |
| --------- | ----------- | ---------- |
| default   | Content     | -          |

## Flex Item Props

| Prop Name | Description                            | Type                                                                                             | Default |
| --------- | -------------------------------------- | ------------------------------------------------------------------------------------------------ | ------- |
| order     | Order of flex item                     | number                                                                                           | '-'     |
| basis     | Initial size along the main axis       | [flex-basis](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Reference/Properties/flex-basis)   | '-'     |
| grow      | Relative proportion of remaining space | [flex-grow](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Reference/Properties/flex-grow)     | '-'     |
| shrink    | Flex item shrinking behavior           | [flex-shrink](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Reference/Properties/flex-shrink) | '-'     |

## Flex Item Slots

| Slot Name | Description | Slot Props |
| --------- | ----------- | ---------- |
| default   | Content     | -          |
