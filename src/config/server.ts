import express, { Application } from "express";
import morgan from "morgan";
import Routes from "./routes";

class Server {
  private app: Application;
  private port: string;

  constructor() {
    this.app = express();
    this.port = process.env.SERVER_PORT || "8000";

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.json());
    this.app.use(express.static("public"));
    this.app.use(morgan("tiny"));
  }

  routes() {
    this.app.use("/api/v1", Routes);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server listen on Port ${this.port}`);
    });
  }
}
export default Server;
