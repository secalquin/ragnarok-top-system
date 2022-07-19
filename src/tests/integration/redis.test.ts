import { cacheKey, GET_ASYNC, SET_ASYNC, client } from "../../config/redis";

describe("Redis tests", () => {
  const REDIS_TESTS_TIME: number = Number(process.env.REDIS_TESTS_TIME) || 300;
  const REDIS_TESTS_KEY: string = process.env.REDIS_TESTS_KEY || "tests";

  afterAll((done) => {
    client.quit(() => {
      done();
    });
  });

  test("Create data on redis", async () => {
    const setData = await SET_ASYNC(
      cacheKey(REDIS_TESTS_KEY),
      JSON.stringify({ tests: "This is a example tests" }),
      "EX",
      REDIS_TESTS_TIME
    );

    expect(setData).toBe("OK");
  });

  test("Get data from redis", async () => {
    const replyPanels = await GET_ASYNC(cacheKey(REDIS_TESTS_KEY));

    expect(replyPanels).toBeTruthy();
  });
});
