<script setup lang="ts"></script>

<template>
  <div>
    <div class="enter">
      <img
        src="@/assets/cogic.svg"
        class="logo"
        alt="cogic"
      />
      <div class="enter-bt">ENTER</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.enter {
  padding: 10px;
  background-color: #ffffff;
  transition: all 0.3s;

  .logo {
    height: 8em;
    padding: 1.5em;
    will-change: filter;
    filter: drop-shadow(0 0 3em #000000aa);
    transition: all 0.3s;
  }

  .enter-bt {
    font-size: 2em;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s;
  }

  &:hover {
    box-shadow: 0 0 0.5em 0.1em #00000081;

    .logo {
      filter: drop-shadow(0 0 5em #000000);
    }

    .enter-bt {
      color: rgb(18, 130, 221);
      text-shadow: 0 0 1em #73c6fd;
      transform: scale(1.25);
    }
  }
}
</style>
