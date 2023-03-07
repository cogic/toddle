import { defineStore } from 'pinia';

export const useWorksStore = defineStore('works', {
  state: () => ({
    workList: {} as any,
  }),
});
