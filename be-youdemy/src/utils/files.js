const path = require('path')

// gets absolute path to backend directory
const getBackendRootDir = () => {
    const appDirName = "src"
    const currentFilePath = __dirname
    const currentFilePathDirs = currentFilePath.split(path.sep)
    const backendSrcDirIndex = currentFilePathDirs.lastIndexOf(appDirName)
    const backendDirs = currentFilePathDirs.slice(0, backendSrcDirIndex)

    return backendDirs.join(path.sep)
}

module.exports = {
    getBackendRootDir,
}