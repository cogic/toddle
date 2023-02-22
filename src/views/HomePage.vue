<script setup lang="ts">
import { useThrottleFn } from '@vueuse/core';
import { onMounted, ref } from 'vue';

const eyes = ref<HTMLImageElement | null>();

onMounted(() => {
  window.addEventListener(
    'mousemove',
    useThrottleFn(
      (e) => {
        if (eyes.value) {
          // eyes 中心点 x y
          const oX = eyes.value.getBoundingClientRect().x + eyes.value.scrollWidth / 2;
          const oY = eyes.value.getBoundingClientRect().y + eyes.value.scrollHeight / 2;

          // cursor 与 eyes 的坐标差
          const deltX = e.clientX - oX;
          const deltY = e.clientY - oY;

          // cursor 与 eyes 的直线距离
          const d = Math.sqrt(deltX * deltX + deltY * deltY);

          // eyes 能够偏移的最大距离。这里不能写常数，要使用元素高度计算，以保证页面字体大小变化时能够随之变化。
          const maxD = eyes.value.scrollHeight * 0.8;

          // eyes 偏移 比 坐标差 要缩短的倍数
          let div = eyes.value.scrollHeight * 6;

          if (d / div > maxD) {
            // 如果按 div 进行缩短后仍然偏移过大，则 maxD 即为实际要偏移的距离。重新计算倍数
            div = d / maxD;
          }

          // 计算 x y 分别要偏移的距离
          const tX = deltX / div;
          const tY = deltY / div;

          eyes.value.style.transform = `translate(${tX}px,${tY}px)`;
        }
      },
      200,
      true,
      true
    )
  );
});
</script>

<template>
  <div class="container">
    <div class="enter">
      <div class="rabbit-wrap">
        <div class="rabbit">
          <img
            src="@/assets/black-rabbit-fill.svg"
            class="face"
            alt="cogic"
          />
          <img
            ref="eyes"
            src="@/assets/black-rabbit-eyes.svg"
            class="eyes"
            alt="cogic"
          />
        </div>
      </div>

      <RouterLink :to="{ name: 'Works' }">
        <div class="enter-bt">ENTER</div>
      </RouterLink>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  place-content: center;
}

.enter {
  padding: 4rem;
  margin: 14rem 0 0;
  text-align: center;
  background-color: #ffffff;
  transition: all 0.3s;
  user-select: none;

  .rabbit-wrap {
    overflow: hidden;

    .rabbit {
      @keyframes burrow {
        0% {
          opacity: 0;
          transform: translateY(8rem);
        }

        100% {
          opacity: 1;
          transform: translateY(0);
        }
      }

      position: relative;
      opacity: 0;
      animation: burrow 0.5s ease-in-out 0.2s forwards;
      transition: all 0.3s;

      .face {
        height: 13rem;
      }

      .eyes {
        position: absolute;
        top: 7.4rem;
        left: 2.9rem;
        height: 1.8rem;
        transition: all 0.3s;
      }
    }
  }

  .enter-bt {
    @keyframes throw {
      0% {
        opacity: 0;
        transform: translateY(-4rem);
      }

      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }

    font-size: 2em;
    font-weight: bold;
    cursor: pointer;
    opacity: 0;
    animation: throw 0.5s ease-in-out 0.4s forwards;
    transition: all 0.3s;

    &:hover {
      color: #1282dd;
      text-shadow: 0 0 1.6rem #73c6fd;
      transform: scale(1.25);
    }

    &:active {
      color: #00b7ff;
    }
  }

  &:hover {
    box-shadow: 0 0 0.8rem 0.2em #00000081;

    .eyes {
      filter: drop-shadow(0 0 0.8rem #ffffff);
    }
  }
}
</style>
