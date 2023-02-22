<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const routeName = ref();
const oldRouteName = ref();

watch(
  () => route.name,
  (rName, oldName) => {
    routeName.value = rName;
    oldRouteName.value = oldName;
  }
);
</script>

<template>
  <header>
    <div class="container">
      <RouterLink
        class="nav-title"
        :to="{ name: 'Home' }"
      >
        <Transition name="burrow">
          <img
            v-if="routeName !== 'Home'"
            class="logo"
            src="@/assets/cogic.svg"
            alt="Toddle"
          />
        </Transition>
        <span
          :class="{ name: true, 'anim-play': routeName !== 'Home' && oldRouteName != undefined }"
        >
          Toddle
        </span>
      </RouterLink>
      <a
        class="github"
        href="https://github.com/cogic"
        target="_blank"
      >
        <img
          src="@/assets/github.svg"
          alt=""
        />
      </a>
    </div>
  </header>
</template>

<style lang="scss" scoped>
$nav-bar-height: 5rem;
$logo-height: 4rem;
$logo-width: 4rem;

.burrow-enter-active,
.burrow-leave-active {
  transition: all 0.3s ease-in-out;
}

.burrow-enter-from,
.burrow-leave-to {
  opacity: 0;
  transform: translateY($logo-height);

  + .name {
    margin-left: -$logo-width;
    transition: all 0.3s;
  }
}

header {
  border-bottom: 0.1rem solid $base-color-grey;
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: $nav-bar-height;
  max-width: $base-screen-max-width;
  padding: 0 2.5rem;
  margin: 0 auto;

  .nav-title {
    display: flex;
    align-items: end;
    height: $nav-bar-height;
    overflow: hidden;
    cursor: pointer;

    img.logo {
      width: $logo-width;
      height: $logo-height;
    }

    span.name {
      padding-left: 0.8rem;
      font-size: 2rem;
      font-weight: bold;

      &.anim-play {
        @keyframes aaa {
          0% {
            margin-left: -$logo-width;
          }

          100% {
            margin-left: 0;
          }
        }

        animation: aaa 0.3s ease-in-out forwards;
      }
    }
  }

  a.github {
    height: 30px;

    img {
      height: 100%;
    }
  }
}
</style>
