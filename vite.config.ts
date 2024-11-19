import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            '~view': path.resolve(__dirname, 'src/view'),
            '~layout': path.resolve(__dirname, 'src/layout'),
            '~routes': path.resolve(__dirname, 'src/routes'),
            '~icons': path.resolve(__dirname, 'src/shared/assets/icons'),
        },
    },
    plugins: [react()],
});
