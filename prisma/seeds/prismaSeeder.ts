import { PrismaClient } from "@prisma/client";
import { prismaControlSeed } from "../data";

const prisma = new PrismaClient();

export const seedPanels = async () => {
  await prisma.panel.deleteMany();

  const createMany = await prisma.prismaSeeder.createMany({
    data: prismaControlSeed,
    skipDuplicates: true, // Skip duplicated
  });
  console.log("Count ControlSeeders created: ", createMany);
};
