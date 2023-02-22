<script setup lang="ts">
import TheHeader from '@/components/TheHeader.vue';
</script>

<template>
  <div>
    <TheHeader />
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
</style>
