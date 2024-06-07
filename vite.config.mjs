import { fileURLToPath, URL } from 'node:url';

// Utilities
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    define: {
      // Enable / disable Options API support
      __VUE_OPTIONS_API__: true,
      // Enable / disable devtools support in production
      __VUE_PROD_DEVTOOLS__: false,
      // Enable / disable detailed warnings for hydration mismatches in production
      __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: false
    },
    plugins: [vue()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    esbuild: {
      // pure: mode === 'production' ? ['console.log'] : [],
      drop: mode === 'production' ? ['console'] : []
    }
  };
});
