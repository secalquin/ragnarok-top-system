import { cacheKey } from "../../utils";

describe("Redis test function", () => {
  test("Check return is string", () => {
    expect(typeof cacheKey("tests")).toBe("string");
  });
});
