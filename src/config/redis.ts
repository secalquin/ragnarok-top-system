import Redis from "ioredis";
import { promisify } from "util";

const REDIS_HOST: string = process.env.REDIS_HOST || "127.0.0.1";
const REDIS_PORT: number = Number(process.env.REDIS_PORT) || 6379;

const client = new Redis({
  port: REDIS_PORT,
  host: `${REDIS_HOST}`,
});

const GET_ASYNC = promisify(client.get).bind(client);
const SET_ASYNC = promisify(client.set).bind(client);

export { GET_ASYNC, SET_ASYNC, client };
