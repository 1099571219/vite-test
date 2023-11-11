import viteAliasPlugin from "../plugins/vite-alias-plugin";
import { defineConfig } from "vite";
const path = require("path");
export default defineConfig({
    // resolve: {
    //     alias: {
    //         "@": path.resolve(__dirname, "../src"),
    //         "@assets": path.resolve(__dirname, "../src/assets"),
    //     }
    // },
    optimizeDeps: {},
    envDir: process.cwd() + "\\env",
    envPrefix: "PUB_",
    plugins: [viteAliasPlugin('@')]

})