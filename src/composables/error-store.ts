import { ref } from 'vue';
import { createGlobalState } from '@vueuse/core';

export const useErrorStore = createGlobalState(() => {
  const error = ref();

  return { error };
});
