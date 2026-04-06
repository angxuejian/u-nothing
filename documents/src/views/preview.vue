<script setup lang="ts">
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

onMounted(() => {
  if (route.meta && route.meta.name) {
    document.title = `u.nothing · ${route.meta.name}`;
  }
});
</script>

<template>
  <div id="preview-container">
    <div id="markdown-body">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#preview-container {
  width: 100%;
  min-height: 100%;
  padding: 50px 0;
  box-sizing: border-box;
}

#markdown-body {
  width: 60%;
  border: 1px solid #eee;
  margin: 0 auto;
  padding: 30px 20px;
  box-sizing: border-box;
  border-radius: 5px;
}

@media (max-width: 1024px) {
  #markdown-body {
    width: 80%;
  }
}

@media (max-width: 768px) {
  #markdown-body {
    width: 100%;
    padding: 20px 12px;
  }
}
</style>
