import { PrismaClient } from "@prisma/client";
import { seedPanels } from "./seeds/panelSeeder";
import { seedRoles } from "./seeds/roleSeeder";
import { seedUsers } from "./seeds/userSeeder";

const prisma = new PrismaClient();

async function main() {
  await seedRoles();
  await seedUsers();
  await seedPanels();
}

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
