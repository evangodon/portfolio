import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
import linaria from 'vite-plugin-linaria-styled';

export default defineConfig({
  plugins: [
    preact(),
    linaria({
      sourceMap: true,
      cacheDirectory: '.linaria-cache',
      extension: '.linaria.css',
      babelOptions: {
        presets: ['@babel/preset-typescript'],
      },
    }),
  ],
  resolve: {
    alias: {
      react: 'preact-compat',
      'react-dom': 'preact-compat',
      css: './src/css',
    },
  },
});
