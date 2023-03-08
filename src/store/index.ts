import { defineStore } from 'pinia';

export const useWorksStore = defineStore('works', {
  state: () => ({
    curWork: {} as
      | { fileName: string; label: string; description: string; image: string }
      | undefined,
    workList: {} as any,
  }),
});
