# Textarea: HTML textarea element

Used for multi-line text input. Supports features such as automatic height adjustment and adaptive rows.

## Basic Usage

::: demo
<uTextarea style='width: 100%' rows='3' placeholder='Please enter a value'></uTextarea>
:::

## Props

| Prop Name | Description                                             | Type                                               | Default  |
| --------- | ------------------------------------------------------- | -------------------------------------------------- | -------- |
| v-model   | Value                                                   | string                                             | ''       |
| disabled  | Whether the textarea is disabled                        | boolean                                            | false    |
| autosize  | Whether to enable auto-resizing                         | boolean / `{ minRows?: number; maxRows?: number }` | false    |
| rows      | Initial number of rows (effective when autosize is off) | string / number                                    | 1        |
| resize    | Whether resizing is allowed                             | `none` / `vertical` / `both` / `horizontal`        | `none`   |
| size      | Component size                                          | `small` / `medium` / `large`                       | `medium` |
| theme     | Theme style                                             | `browser` / `ustyle`                               | `ustyle` |

## Event

| Event Name | Description        | Callback Parameters |
| ---------- | ------------------ | ------------------- |
| input      | Triggered on input | `(e: InputEvent)`   |
