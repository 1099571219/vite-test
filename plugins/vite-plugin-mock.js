const fs = require('fs/promises');
const path = require('path');
const loadFile = async () => {
    const isDir = (await fs.stat('mock')).isDirectory()
    if (isDir) {
        return require(path.resolve(process.cwd(), './mock/index.mock.js'))
    }
}

/**@returns {import('vite').Plugin} */
module.exports = async (options) => {
    const apiFile = await loadFile()
    return {
        name: 'vite-plugin-mock-server',
        configureServer: {
            handler: (server) => {
                server.middlewares.use((req, res, next) => {
                    const matched = apiFile.find((item) => item.pattern === req.url)
                    if (matched) {
                        res.setHeader('Content-Type', 'application/json')
                        res.end(matched.data)
                    } else {
                        next()
                    }
                })
            }
        }
    }
}