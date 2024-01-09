import { defineStore } from 'pinia';
export const useDrawerStore = defineStore('drawer', () => {
  const isOpen = ref(false)
  return { isOpen }
})
