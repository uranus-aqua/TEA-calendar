import { resolve } from 'path';
import { defineConfig } from "vite";
import { terser } from 'rollup-plugin-terser';

export default defineConfig({
  minify: 'terser',
  build: {
    lib: {
      entry: resolve(__dirname, 'lib/teac.min.js'),
      name: 'tea-calendar',
      format: 'es',
      fileName: 'teac',
    },
    target: 'modules',
    modulePreload: false,
    sourcemap: true,
    minify: 'terser',
    watch:{
      exclude: 'node_modules/**'
    },
    terserOptions:{
      format: {
        comments: false,
      },      
      ecma: 2016,
      mangle: false      
    },
    rollupOptions: { 
      plugins: [terser({
        format: {
          comments: false,          
        }
      })],
      output:{
        dir: 'dist',
        format: 'es',
        preserveModules: false,
        inlineDynamicImports: false
      },
      preserveEntrySignatures: 'strict'
    },
  },
});