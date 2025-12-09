import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    lib: {
      entry: "src/index.ts",
      name: "KroydUICore",
      fileName: "kroyd-ui-core",
    },
    rollupOptions: {
      external: [],
    },
  },
  plugins: [dts()],
});
