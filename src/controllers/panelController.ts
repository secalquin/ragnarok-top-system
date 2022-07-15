import { Request, Response } from "express";
import { getAll } from "../services/panelService";

export const getAllPanels = async (_req: Request, resp: Response) => {
  const dataFetched = await getAll();
  const { statusCode } = dataFetched;

  return resp.status(statusCode).json(dataFetched);
};
