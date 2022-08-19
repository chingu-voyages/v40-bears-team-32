import * as db from "./db.js";
import supertest from "supertest";

beforeAll(async () => {
  await db.connect();
});

test("jest is working", async () => {
  expect(2).toBe(2);
});

afterAll(async () => {
  await db.disconnect();
});
