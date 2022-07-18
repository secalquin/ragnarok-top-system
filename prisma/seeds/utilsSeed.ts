import { prisma } from "../../src/config/prisma";
import { PrismaSeedEnum } from "../../src/types/PrismaSeed";

export const forceSeed: boolean = Boolean(process.env.FORCE_SEEDER) || false;

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
