import { defineConfig } from 'vite';
import { rootPath } from "./config";

/**
 * viteの設定情報
 * @link https://vitejs.dev/config/
 */
export default defineConfig({
    base: rootPath.base,
    build: {
      outDir: rootPath.output,
      manifest: true,
      rollupOptions: {
        input: `${rootPath.input.assets}main.ts`
      }
    }
});
