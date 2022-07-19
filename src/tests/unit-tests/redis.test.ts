import { cacheKey } from "../../config/redis";

describe("Redis test function", () => {
  test("Check return is string", () => {
    expect(typeof cacheKey("tests")).toBe("string");
  });
});
