import { PrismaClient } from "@prisma/client";
import { panelsData } from "../data/panelData";

const prisma = new PrismaClient();

export const seedPanels = async () => {
  await prisma.panel.deleteMany();

  const createMany = await prisma.panel.createMany({
    data: panelsData,
    skipDuplicates: true, // Skip duplicated
  });
  console.log("Count panels created: ", createMany);
};
