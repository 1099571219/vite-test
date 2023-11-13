import { defineConfig } from "vite";
import viteBaseConfig from "./config/vite.base.config";
import viteDevConfig from "./config/vite.dev.config";
import viteProdConfig from "./config/vite.prod.config";
import { loadEnv } from "vite";

//策略模式
const envResolver = {
    "serve": () => {
        return { ...viteBaseConfig, ...viteDevConfig }
    },
    "build": () => {
        return Object.assign({}, viteBaseConfig, viteProdConfig)
    }
}

export default defineConfig(({ command, mode }) => {
    // const env = loadEnv(mode, process.cwd() + '\\env')
    const config = envResolver[command]()
    return config
})