import { defineConfig } from "vite";

export default defineConfig({
    optimizeDeps: {},
    envDir: process.cwd() + "\\env",
    envPrefix: "PUB_"
})