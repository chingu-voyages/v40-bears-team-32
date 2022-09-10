// src: https://github.com/productioncoder/express-error-handling/blob/master/error/ApiError.js

export default class APIError extends Error {
  constructor(status, cause) {
    super(`${cause}`);
    this.name = "APIError";
    this.status = status;
    this.cause = cause;
  }
}
