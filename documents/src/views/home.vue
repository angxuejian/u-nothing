<script lang="ts" setup>
import { useMenuStore } from '@/stores/use-menu';
import { computed, onMounted } from 'vue';

const store = useMenuStore();
const navigationZH = computed(() => {
  return store.menu.filter((item) => item.lang === 'zh');
});
const navigationEN = computed(() => {
  return store.menu.filter((item) => item.lang === 'en');
});

onMounted(() => {
  document.title = 'u.nothing · just writing casually';
});
</script>

<template>
  <div id="slogan">
    <span>u.nothing</span>
    <span>·</span>
    <span>just writing casually</span>
  </div>

  <div id="home-container">
    <section>
      <h3>文档目录</h3>
      <ul>
        <li v-for="(item, index) in navigationZH" :key="index">
          <RouterLink :to="{ name: item.pathname }">{{ item.name }}</RouterLink>
        </li>
      </ul>
    </section>
    <section>
      <h3>Documentation</h3>
      <ul>
        <li v-for="(item, index) in navigationEN" :key="index">
          <RouterLink :to="{ name: item.pathname }">{{ item.name }}</RouterLink>
        </li>
      </ul>
    </section>
  </div>
</template>

<style lang="scss" scoped>
#slogan {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-size: 14px;
  height: 35px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

#home-container {
  width: 80%;
  margin: 0 auto;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  gap: 20px;

  section {
    flex: 1;
    border: 1px solid #eee;
    padding: 10px 20px;
    box-sizing: border-box;
    border-radius: 5px;
  }
  h3 {
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  ul {
    outline: none;
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  li {
    list-style: none;
    padding: 0;
    margin: 0;
  }
}

@media (max-width: 768px) {
  #home-container {
    width: 100%;
  }
}
</style>
