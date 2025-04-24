import path from 'node:path';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

const currentDir = dirname(fileURLToPath(import.meta.url));

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
				@use "${join(currentDir, './src/shared/styles/_variables')}" as *;
				@use "${join(currentDir, './src/shared/styles/_mixins')}" as *;
			`,
        includePaths: [path.join(__dirname, 'src', 'shared', 'styles')],
      },
    },
  },
});
