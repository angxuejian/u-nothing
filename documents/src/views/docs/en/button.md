# Button: The Button element

A `button` element

## 基础用法

::: demo

<div>
    <uButton default>Click</uButton>
    <p />
    <uButton size='small' text>Click</uButton>
    <p />
    <uButton size='medium'>Click</uButton>
    <p />
    <uButton size='large' plain>Click</uButton>
</div>
:::

## Props

| Prop Name | Description                                 | Type                         | Default  |
| --------- | ------------------------------------------- | ---------------------------- | -------- |
| loading   | Whether the button is in a loading state    | boolean                      | false    |
| color     | Button color (eg primary, success, error..) | string                       | ''       |
| disabled  | Whether the button is disabled              | boolean                      | false    |
| text      | Whether to use text-style button            | boolean                      | false    |
| plain     | Whether to use plain-style button           | boolean                      | fasle    |
| default   | Whether to use the default browser style    | boolean                      | false    |
| size      | Size of the button                          | `small` / `medium` / `large` | `medium` |

## Slots

| Slot Name | Description | Solot Props |
| --------- | ----------- | ----------- |
| default   | Content     | -           |
