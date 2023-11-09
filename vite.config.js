import { defineConfig } from "vite";
import viteBaseConfig from "./config/vite.base.config";
import viteDevConfig from "./config/vite.dev.config";
import viteProdConfig from "./config/vite.prod.config";

//策略模式
const envResolver = {
    "serve": () => {
        console.log('开发环境');
        return { ...viteBaseConfig, ...viteDevConfig }
    },
    "build": () => {
        console.log('生产环境');
        return Object.assign({}, viteBaseConfig, viteProdConfig)
    }
}

export default defineConfig(({ command }) => envResolver[command]())