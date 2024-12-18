import { defineConfig } from 'vite';

export default defineConfig({
    root: 'src',
    build: {
        minify: true,
        outDir: '../dist',
    },
    envDir: '../',
});
