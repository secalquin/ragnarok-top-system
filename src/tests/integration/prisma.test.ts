import { prisma } from "../../config/prisma";

type PrismaRawResult = {
  result: number;
};

describe("PrismaDB", () => {
  afterAll((done: jest.DoneCallback) => {
    prisma.$disconnect().then(() => done());
  });

  test("Check connection", async () => {
    const getData: PrismaRawResult[] =
      await prisma.$queryRaw`SELECT 1 AS result`;
    expect(getData[0].result).toBe(1);
  });

  test("Check roles are not null", async () => {
    const countRoles = await prisma.role.count();
    expect(countRoles >= 0).toBeTruthy();
  });
});
