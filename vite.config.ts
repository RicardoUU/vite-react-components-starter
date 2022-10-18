import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts';
import path from 'node:path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts({insertTypesEntry: true,})],
  build: {
    lib: {
        entry: path.resolve(__dirname, 'src/components/index.ts'),
        name: 'CastleryUI',
        formats: ['es', 'umd'],
        fileName: (format) => `castlery-ui.${format}.js`,
    },
    rollupOptions: {
        external: ['react', 'react-dom', 'styled-components'],
        output: {
            globals: {
                react: 'React',
                'react-dom': 'ReactDOM',
                'styled-components': 'styled',
            },
        },
    },
},
})