<script setup lang="ts">
import TheHeader from '@/components/TheHeader.vue';
import TheToolBar from '@/components/TheToolBar.vue';
</script>

<template>
  <div>
    <TheHeader />
    <Transition name="slide-fade">
      <TheToolBar v-if="$route.meta.toolbar" />
    </Transition>
    <RouterView v-slot="{ Component }">
      <Transition
        name="slide-fade"
        mode="out-in"
      >
        <Component :is="Component" />
      </Transition>
    </RouterView>
  </div>
</template>

<style lang="scss" scoped>
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: 0.2s ease-in-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
  transform: scale(0.9);
}

// .drop-enter-active,
// .drop-leave-active {
//   transition: 2s ease-in-out;
// }

// .drop-enter-from,
// .drop-leave-to {
//   opacity: 0;
// }
</style>
