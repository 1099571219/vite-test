const fs = require('fs/promises')
const path = require('path')

const diffDirFile = async (srcDir, keyName, srcPath) => {
    const res = {
        dirs: {},
        files: {}
    }
    for (let i = 0; i < srcDir.length; i++) {
        const detailPath = path.resolve(srcPath + '/' + srcDir[i])
        const state = (await fs.stat(detailPath)).isDirectory()
        state ? res.dirs[keyName + srcDir[i]] = detailPath : res.files[srcDir[i]] = detailPath;
    }
    return res
}

const createAlias = async (keyName, config, env) => {
    const srcPath = path.resolve(__dirname, '../src')
    const getSrcDir = await fs.readdir(srcPath)
    const dirFiles = await diffDirFile(getSrcDir, keyName, srcPath)
    dirFiles.dirs[keyName] = srcPath
    console.log('getSrcDir:', dirFiles);
    return dirFiles.dirs
}

module.exports = (keyName) => {
    return {
        config: async (config, env) => {
            return {
                resolve: {
                    alias: await createAlias(keyName)
                }
            }
        }
    }

}