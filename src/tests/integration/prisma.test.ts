import { prisma } from "../../config/prisma";

type PrismaRawResult = {
  result: number;
};

describe("PrismaDB", () => {
  test("Check connection", async () => {
    const getData: PrismaRawResult[] =
      await prisma.$queryRaw`SELECT 1 AS result`;
    expect(getData[0].result).toBe(1);
  });
});
