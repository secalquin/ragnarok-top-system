import express, { Application } from "express";
import morgan from "morgan";
import { prisma } from "./prisma";
import Routes from "./routes";

class Server {
  private app: Application;
  private port: string;

  constructor() {
    this.app = express();
    this.port = process.env.SERVER_PORT || "8000";

    this.middlewares();
    this.routes();

    this.healthCheck();
  }

  middlewares() {
    this.app.use(express.json());
    this.app.use(express.static("public"));
    this.app.use(morgan("tiny"));
  }

  routes() {
    this.app.use("/api/v1", Routes);
  }

  async healthCheck() {
    await prisma.$queryRaw`SELECT 1`;
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server listen on Port ${this.port}`);
    });
  }
}
export default Server;
