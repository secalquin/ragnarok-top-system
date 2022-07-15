import dotenv from "dotenv";
import Server from "./src/config/server";

//CONFIGURAR dot.env
dotenv.config();

const server = new Server();
server.listen();

export default server;
