<script setup lang="ts">
import { useRoute } from 'vue-router';
import { shallowRef } from 'vue';
import { useWorksStore } from '@/store';

let workComponent: any = shallowRef();
const route = useRoute();

// 从 URL 中获取 workId
const workId = route.params.workId as string;

// 根据 workId 动态导入组件
import(`@/components/works/${useWorksStore().workList[workId].fileName}.vue`).then((component) => {
  workComponent.value = component.default;
});
</script>

<template>
  <div class="container-wrap">
    <Component :is="workComponent"></Component>
  </div>
</template>

<style lang="scss" scoped>
.container-wrap {
  max-width: $base-screen-max-width;
  margin: 0 auto;
}
</style>
