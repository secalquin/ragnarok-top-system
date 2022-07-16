import { PrismaClient } from "@prisma/client";
import { Panel } from "../../src/types";
import { PrismaSeedEnum } from "../../src/types/PrismaSeed";
import { panelsData } from "../data/panelData";
import { createSeedLog, deleteRecord, hasData } from "./utilsSeed";

const prisma = new PrismaClient();
const forceSeed: boolean = Boolean(process.env.FORCE_SEEDER) || false;
const { Panel } = PrismaSeedEnum;

export const seedPanels = async (): Promise<boolean> => {
  if (!(await hasData(Panel)) || forceSeed) {
    await deleteRecord(Panel);
    await bulkCreatePanels(panelsData);
    await createSeedLog(Panel);
    return true;
  }
  return false;
};

export const bulkCreatePanels = async (panels: Panel[]) => {
  const createMany = await prisma.panel.createMany({
    data: panels,
    skipDuplicates: true, // Skip duplicated
  });
  console.log(`Count panels created:`, createMany);
};
