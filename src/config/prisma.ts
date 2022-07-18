import { PrismaClient } from "@prisma/client";
import { ModeEnum } from "../types";

const NODE_ENV: string = process.env.NODE_ENV || "development";
const { DEV, QA } = ModeEnum;

const prisma = new PrismaClient({
  errorFormat: "pretty",
  log: [{ level: "query", emit: "event" }],
});

prisma.$on("query", (e) => {
  if (NODE_ENV.includes(DEV, QA)) {
    console.log("Query: " + e.query);
    console.log("Params: " + e.params);
    console.log("Duration: " + e.duration + "ms");
  }
});

export { prisma };
