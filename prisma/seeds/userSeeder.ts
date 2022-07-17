import { PrismaClient } from "@prisma/client";
import { User } from "../../src/types";
import { PrismaSeedEnum } from "../../src/types/PrismaSeed";
import { usersData } from "../data";
import { createSeedLog, deleteRecord, forceSeed, hasData } from "./utilsSeed";

const prisma = new PrismaClient();
const { User } = PrismaSeedEnum;

export const seedUsers = async (): Promise<boolean> => {
  if (!(await hasData(User)) || forceSeed) {
    await deleteRecord(User);
    await bulkCreateUsers(usersData);
    await createSeedLog(User);
    return true;
  }
  return false;
};

export const bulkCreateUsers = async (users: User[]) => {
  const createMany = await prisma.user.createMany({
    data: users,
    skipDuplicates: true, // Skip duplicated
  });
  console.log(`Count users created:`, createMany);
};
