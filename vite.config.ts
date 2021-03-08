import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import path from 'path';
// import eslint from '@rollup/plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    reactRefresh(),
    // { ...eslint({ include: 'src/**/*.+(js|jsx|ts|tsx)' }), enforce: 'pre' },
  ],
  css: {
    preprocessorOptions: {
      scss: {},
      less: {
        javascriptEnabled: true,
      },
    },
  },
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, 'src'),
      },
    ],
  },
});
