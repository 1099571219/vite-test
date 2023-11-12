import createHtmlPlugin from "../plugins/create-html-plugin";
import viteAliasPlugin from "../plugins/vite-alias-plugin";
import { defineConfig } from "vite";
import mockServer from "vite-plugin-mock-server"
import vitePluginMock from "../plugins/vite-plugin-mock";
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
    plugins: [
        viteAliasPlugin('@'),
        createHtmlPlugin({
            inject: {
                data: {
                    title: '首页'
                }
            }
        }),
        vitePluginMock()
    ]
})