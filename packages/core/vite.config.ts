import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    lib: {
      entry: "src/index.ts",
      name: "KroydUICore",
      fileName: "kroyd-ui-core",
      formats: ["es", "umd"],
    },
  },

  plugins: [
    dts({
      tsconfigPath: "tsconfig.build.json",
      entryRoot: "src",
      outDir: "dist",
      cleanVueFileName: true,
      insertTypesEntry: true,
      exclude: ["vite.config.ts", "**/*.test.ts"],
    }),
  ],
});
