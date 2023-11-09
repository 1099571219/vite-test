import { defineConfig } from "vite";

export default defineConfig({
    optimizeDeps: {
        exclude: [] // 将数组中的依赖跳过依赖预构建
    },
    envDir: process.cwd() + "\\env",
    envPrefix: "PUB_" //修改客户端 vite 环境变量校验前缀
})