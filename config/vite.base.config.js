import createHtmlPlugin from "../plugins/create-html-plugin";
import viteAliasPlugin from "../plugins/vite-alias-plugin";
import { defineConfig } from "vite";
import vitePluginMock from "../plugins/vite-plugin-mock";
import path from "path";
// import { cdn } from 'vite-plugin-cdn2'
import importToCDN from 'vite-plugin-cdn-import'
export default defineConfig({
    // resolve: {
    //     alias: {
    //         "@": path.resolve(__dirname, "../src"),
    //         "@assets": path.resolve(__dirname, "../src/assets"),
    //     }
    // },
    build: {
        // minify: false,
        rollupOptions: {
            input: [
                path.resolve(__dirname, "../index.html"),
                path.resolve(__dirname, "../src/index.html")
            ],
            output: {
                manualChunks: (id) => {
                    if (id.includes('node_modules')) {
                        console.log(id);
                        return 'vendor'
                    }
                },
            },
        }
    },
    optimizeDeps: {
    },
    envDir: process.cwd() + "\\env",
    envPrefix: "PUB_",
    plugins: [
        importToCDN({
            modules: [{
                name: 'lodash',
                var: '_',
                path: 'https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js'
            }],
        }),
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