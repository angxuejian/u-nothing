<template>
  <div class="app">
    <uConfigProvide :htmlFontSize="16">
      <u-textarea
        class="container"
        :autosize="{ minRows: 2, maxRows: 4 }"
        v-model="mval"
        placeholder="123"
        theme="browser"
      ></u-textarea>

      <p></p>

      <u-textarea
        class="container"
        :autosize="{ minRows: 2, maxRows: 4 }"
        v-model="mval"
        placeholder="想问的，就去问"
        theme="ustyle"
      ></u-textarea>

      <p></p>
      <u-button size="small">submit</u-button>
      <u-button>submit</u-button>
      <u-button size="large">submit</u-button>

      <p></p>
      <uDetails>
        <template #summary>详情</template>
        正文内容。
      </uDetails>
    </uConfigProvide>
  </div>
</template>

<script lang="ts" setup>
import { uTextarea, uConfigProvide, uButton, uDetails } from '@u-nothing/index';
import { onMounted, ref } from 'vue';
import '@theme/index.scss';

const mval = ref('');

onMounted(() => {
  console.log('playground');
});
</script>

<style lang="css">
*,
*::before,
*::after {
  box-sizing: border-box;
}

html,
body {
  margin: 0;
  padding: 0;
}

body {
  font-family:
    sans-serif,
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    'PingFang SC',
    'Hiragino Sans GB',
    'Microsoft YaHei';

  background-color: #fff;
  color: #000;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.app {
  padding: 20px;
}
.container {
  width: 100%;
}
</style>
