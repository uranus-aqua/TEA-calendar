const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// const env = loadEnv(mode, process.cwd(), '');
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    // vite config
    define: {
        __APP_ENV__: JSON.stringify(env.APP_ENV),
    },
    build: {
        entry: resolve(__dirname, 'lib/main.mjs'),
        name: 'tea-calendar',
        sourcemap: true,
        fileName: 'teac',
    },
  }
});