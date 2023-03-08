<script setup lang="ts">
import { shallowRef } from 'vue';
import { useWorksStore } from '@/store';

let workComponent: any = shallowRef();

const work = useWorksStore().curWork;

// 根据 curWork 动态导入组件
if (work != undefined) {
  import(`@/components/works/${work.fileName}.vue`).then((component) => {
    workComponent.value = component.default;
  });
}
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
