// fixes async errors with jest
// src: https://thewebdev.info/2022/02/23/how-to-fix-the-error-async-callback-was-not-invoked-within-the-5000-ms-timeout-specified-by-jest-settimeout-with-jest/
import { jest } from "@jest/globals";
jest.setTimeout(30000);
