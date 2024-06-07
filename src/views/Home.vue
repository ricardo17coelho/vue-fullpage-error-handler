<template>
  <HelloWorld />
  <router-link to="/about">About</router-link>
  {{ error }}
  <button @click="onBtnClick">Set error</button>
</template>

<script lang="ts" setup>
import HelloWorld from '@/components/HelloWorld.vue';
import { useErrorStore } from '@/composables/error-store';

const { error } = useErrorStore();

function onBtnClick() {
  error.value = new Error('Something is broken');
}
</script>
