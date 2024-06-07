<template>
  <ErrorContainer v-if="error" :error="error" @clear="error = undefined" />
  <router-view v-else />
</template>

<script lang="ts" setup>
import ErrorContainer from '@/components/ErrorContainer.vue';
import { useErrorStore } from '@/composables/error-store';

const { error } = useErrorStore();
</script>
