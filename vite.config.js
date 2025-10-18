import { defineConfig } from 'vite';
import legacy from '@vitejs/plugin-legacy';
import { glob } from 'glob';

export default defineConfig(async () => {
  const htmlFiles = await glob('src/**/*.html');
  const input = {};
  htmlFiles.forEach(file => {
    const name = file.replace('src/', '').replace('.html', '');
    input[name] = file;
  });

  return {
    root: 'src',
    build: {
      outDir: '../dist',
      emptyOutDir: true,
      rollupOptions: {
        input,
      },
    },
    server: {
      port: 3000,
      open: '/',
    },
    plugins: [
      legacy({
        targets: ['defaults', 'not IE 11'],
      }),
    ],
    publicDir: '../public',
  };
});
