import { PrismaClient } from "@prisma/client";
import { seedPanels } from "./seeds/panelSeeder";

const prisma = new PrismaClient();

async function main() {
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
