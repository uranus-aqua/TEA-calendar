import { resolve } from 'path';
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'lib/main.js'),
      name: 'teac-calendar',
      // the proper extensions will be added
      fileName: 'teac',
    },
    watch:{
      exclude: 'node_modules/**'
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      input: './src/teac.min.js',
      output: 
        // Provide global variables to use in the UMD build
        // for externalized deps
        { 
          dir: 'dist',
          format: "es",
          compact: false,
          minifyInternalExports: false,
          sourcemap: true
         },
      treeshake: {
        preset: 'safest'
      }
    },
  },
})