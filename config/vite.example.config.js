import { defineConfig } from "vite";

export default defineConfig({
    optimizeDeps: {
        exclude: [] // 将数组中的依赖跳过依赖预构建
    },
    css: { //配置 css 行为
        modules: { // 对 css 模块化的默认行为进行覆盖
            localsConvention: "camelCase", // 修改生成映射对象的 key 展现形式（驼峰还是中划线形式）
            // scopeBehaviour: "local", // 配置当前的模块化行为是模块化还是全局化
            // generateScopedName: (name, filename, css) => {
            //     //name => 代表的是此刻 css 文件中的类名
            //     //filename => 代表的是当前 css 文件路径
            //     //css => 代表的是当前 css 文件内容
            //     return `${name}_${Math.random().toString(36).substring(3, 8)}`
            // },
            hashPrefix: "hello", // 生成 hash 会根据类名 + 一些其他的字符串（文件名 + 内部随机生成的一个字符串）去进行生成
            globalModulePaths: [] // 代表不想参与到 css 模块化的路径

        }
    },
    envDir: process.cwd() + "\\env",
    envPrefix: "PUB_" //修改客户端 vite 环境变量校验前缀
})