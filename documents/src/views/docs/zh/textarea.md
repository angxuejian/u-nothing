# Textarea 文本域

用于多行文本输入，支持自动高度、自适应行数等能力。

## 基础用法

::: demo
<uTextarea style='width: 100%' rows='3' placeholder='请输入内容'></uTextarea>
:::

## Props

| 属性名   | 说明                               | 类型                                               | 默认值   |
| -------- | ---------------------------------- | -------------------------------------------------- | -------- |
| v-model  | 值                                 | string                                             | ''       |
| disabled | 是否为禁用状态                     | boolean                                            | false    |
| autosize | 是否自适应高度                     | boolean / `{ minRows?: number; maxRows?: number }` | false    |
| rows     | 初始行数（未开启 autosize 时生效） | string / number                                    | 1        |
| resize   | 是否允许拖拽调整大小               | `none` / `vertical` / `both` / `horizontal`        | `none`   |
| size     | 组件尺寸                           | `small` / `medium` / `large`                       | `medium` |
| theme    | 样式主题                           | `browser` / `ustyle`                               | `ustyle` |

## Event

| 事件名 | 说明       | 回调参数          |
| ------ | ---------- | ----------------- |
| input  | 输入时触发 | `(e: InputEvent)` |
