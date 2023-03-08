<script setup lang="ts">
import { useWorksStore } from '@/store';
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

let title = ref('');
watch(
  useRoute(),
  (route) => {
    if (route.meta.isWorkView) {
      title.value = useWorksStore().curWork?.label as string;
    } else {
      title.value = route.meta.title as string;
    }
  },
  { immediate: true }
);
</script>

<template>
  <div class="container-wrap">
    <div class="container">
      <div class="left-box">
        <svg
          class="back"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          @click="$router.go(-1)"
        >
          <path
            d="M2 12A10 10 0 0 1 12 2a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12m16-1h-8l3.5-3.5l-1.42-1.42L6.16 12l5.92 5.92l1.42-1.42L10 13h8v-2Z"
          />
        </svg>
      </div>
      <div class="center-box">
        <div class="title">{{ title }}</div>
      </div>
      <div class="right-box"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container-wrap {
  position: sticky;
  top: 0;
  background-color: #ffffff;
  border-bottom: 1px solid $base-color-grey;
}

.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 5rem;
  max-width: $base-screen-max-width;
  padding: 0 5rem;
  margin: 0 auto;
}

.left-box {
  width: 30%;
  text-align: left;

  svg.back {
    height: 3rem;
    vertical-align: middle;
    cursor: pointer;
    transition: fill 0.3s, transform 0.3s;

    &:hover:not(:active) {
      fill: #5a5a5a;
      transform: scale(1.1);
    }
  }
}

.center-box {
  width: 40%;
  text-align: center;

  .title {
    font-size: 2rem;
  }
}

.right-box {
  width: 30%;
  text-align: right;
}
</style>
