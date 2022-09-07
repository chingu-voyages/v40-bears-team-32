import { sep, join } from "path";
import { fileURLToPath } from "url";

// Winston default log levels
// src: https://github.com/winstonjs/winston#logging-levels
const levels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  verbose: 4,
  debug: 5,
  silly: 6,
};

// src: https://github.com/winstonjs/logform#timestamp
// src: https://github.com/taylorhakes/fecha
const timestampFormat = {
  format: "YYYY-MM-DD [at] HH:mm:ss",
};

// gets absolute path to backend directory
const getBackendRootDir = () => {
  const appDirName = "src";
  // src: https://github.com/nodejs/node/issues/28114
  const currentFilePath = fileURLToPath(import.meta.url);
  const currentFilePathDirs = currentFilePath.split(sep);
  const backendSrcDirIndex = currentFilePathDirs.lastIndexOf(appDirName);
  const backendDirs = currentFilePathDirs.slice(0, backendSrcDirIndex);

  return backendDirs.join(sep);
};

const logsDir = join(getBackendRootDir(), "logs");

// src: https://stackoverflow.com/questions/1521082/what-is-a-good-size-in-bytes-for-a-log-file
const logFileLimit = 10 * 1024 * 1024;

export { levels, timestampFormat, logsDir, logFileLimit };
