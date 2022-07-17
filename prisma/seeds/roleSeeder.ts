import { PrismaClient } from "@prisma/client";
import { Role } from "../../src/types";
import { PrismaSeedEnum } from "../../src/types/PrismaSeed";
import { rolesData } from "../data";
import { createSeedLog, deleteRecord, forceSeed, hasData } from "./utilsSeed";

const prisma = new PrismaClient();
const { Role } = PrismaSeedEnum;

export const seedRoles = async (): Promise<boolean> => {
  if (!(await hasData(Role)) || forceSeed) {
    await deleteRecord(Role);
    await bulkCreateRoles(rolesData);
    await createSeedLog(Role);
    return true;
  }
  return false;
};

export const bulkCreateRoles = async (roles: Role[]) => {
  const createMany = await prisma.role.createMany({
    data: roles,
    skipDuplicates: true, // Skip duplicated
  });
  console.log(`Count roles created:`, createMany);
};
