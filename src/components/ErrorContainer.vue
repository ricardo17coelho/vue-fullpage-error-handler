<template>
  <div v-if="error">
    <h1>OMG 😱 error!</h1>
    <div>{{ error }}</div>
    <button @click="emit('clear')"><router-link to="/">Home</router-link></button>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  error: { type: Error, default: undefined }
});

const emit = defineEmits(['clear']);
</script>
