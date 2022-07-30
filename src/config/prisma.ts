import { PrismaClient } from "@prisma/client";
import { QueryEvent } from "../types/QueryEvent";
const NODE_ENV = process.env.NODE_ENV || "development";

const prisma = new PrismaClient({
  errorFormat: "pretty",
  log: [{ level: "query", emit: "event" }],
});

prisma.$on("query", (e: QueryEvent) => {
  console.log("Query: " + e.query);
  console.log("Params: " + e.params);
  console.log("Duration: " + e.duration + "ms");
});

export { prisma };
