<script setup lang="ts">
import router from '@/router';
import { useWorksStore } from '@/store';
import { storeToRefs } from 'pinia';

let { workList } = storeToRefs(useWorksStore());
</script>

<template>
  <div class="container-wrap">
    <ul class="works-container">
      <li
        v-for="(workItem, key) in workList"
        :key="key"
        class="work-item"
        @click="router.push({ name: 'WorkView', params: { workId: String(key) } })"
      >
        <div class="preview">
          <img
            class="preview-img"
            :src="'/src/assets/images/works/' + workItem.image"
            @error="
              if ($event.target) {
                ($event.target as HTMLImageElement).src = '/src/assets/images/carrot.png';
              }
            "
            alt=""
          />
          <div
            v-if="workItem.description?.trim().length > 0"
            class="description"
            :title="workItem.description"
          >
            {{ workItem.description }}
          </div>
        </div>
        <div
          v-if="workItem.label?.trim().length > 0"
          class="label"
        >
          {{ workItem.label }}
        </div>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.container-wrap {
  max-width: $base-screen-max-width;
  margin: 0 auto;
}

ul.works-container {
  display: flex;
  flex-wrap: wrap;
  padding: 0 2rem;

  li.work-item {
    width: 25rem;
    height: fit-content;
    margin: 1rem;
    list-style: none;
    cursor: pointer;

    .preview {
      position: relative;
      z-index: 10;
      height: 13rem;
      overflow: hidden;
      background-color: rgb(212, 212, 212);
      box-shadow: 0 0 1rem -0.4rem #00000080;

      img.preview-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.3s;
      }

      .description {
        $space: 0.5rem;
        $line-height: 2rem;
        $box-height: $line-height * 3 + $space * 2;

        position: absolute;
        bottom: -$box-height;
        width: 100%;
        max-height: $box-height;
        padding: $space 0.8rem;
        overflow: hidden;
        font-size: 1.5rem;
        line-height: $line-height;
        color: #ffffffd2;
        background-color: #000000a2;
        opacity: 0;
        box-sizing: border-box;
        transition: all 0.3s ease-in-out;
      }
    }

    .label {
      @keyframes drop {
        0% {
          opacity: 0;
          transform: translateY(-2rem);
        }

        100% {
          opacity: 1;
          transform: translateY(0);
        }
      }

      padding: 0.2rem 0.5rem;
      overflow: hidden;
      font-size: 1.6rem;
      color: #00000080;
      background-color: #ebebeb;
      border-radius: 0 0 5px 5px;
      opacity: 0;
      animation: drop 0.5s ease-in forwards;
    }

    &:hover {
      .preview img.preview-img {
        transform: scale(1.3);
      }

      .description {
        bottom: 0;
        opacity: 1;
      }
    }
  }
}
</style>
