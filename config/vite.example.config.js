import { defineConfig } from "vite";
const path = require('path')
export default defineConfig({
    resolve: {
        alias: { // 配置路径别名
            "@": path.resolve(__dirname, "../src"),
            "@assets": path.resolve(__dirname, "../src/assets"),
        }
    },
    build: {
        minify: false,//配置打包结果压缩
        rollupOptions: {// 配置 rollup 的一些构建策略
            input: [
                path.resolve(__dirname, "../index.html"),
                path.resolve(__dirname, "../src/index.html")
            ],
            output: {// 控制输出
                assetFileNames: '[hash].[name].[ext]',// 再 rollup 中 ，hash 代表文件名和文件内容进行组合计算的结果
                manualChunks: (id) => {//手动返回需要分包的资源
                    console.log(id);
                    return 'vendor'
                },
            }
        },
        assetsInlineLimit: 4096, // 小于此阈值的导入或引用资源将内联为 base64 编码，以避免额外的 http 请求。设置为 0 可以完全禁用此项。
        outDir: "testDist", // 输出目录
        assetsDir: "static", // 静态资源输出目录

    },
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
        },
        preprocessorOptions: { // key + config  key 代表预处理器的名字
            less: { // 整个的配置对象都会最终给到 less 的命令行执行参数（全局参数）中去
                math: "always",
                globalVars: { // 全局变量
                    mainColor: "pink"
                }
            }
        },
        postcss: {}, // 配置 postcss
        devSourcemap: true // 开启 css 的 sourceMap （文件索引）
    },
    envDir: process.cwd() + "\\env",
    envPrefix: "PUB_" //修改客户端 vite 环境变量校验前缀
})