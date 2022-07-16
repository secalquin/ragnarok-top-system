import { PrismaClient } from "@prisma/client";
import { PrismaSeedEnum } from "../../src/types/PrismaSeed";

const prisma = new PrismaClient();

export const hasData = async (name: PrismaSeedEnum) => {
  return await prisma.prismaSeeder.findUnique({
    where: {
      name,
    },
  });
};

export const deleteRecord = async (name: PrismaSeedEnum) => {
  return await prisma.prismaSeeder.deleteMany({
    where: {
      name,
    },
  });
};

export const createSeedLog = async (name: PrismaSeedEnum) => {
  const createMany = await prisma.prismaSeeder.createMany({
    data: [{ name, executed: true }],
    skipDuplicates: true, // Skip duplicated
  });
  console.log(`Create ${name} seed log`, createMany);
};
