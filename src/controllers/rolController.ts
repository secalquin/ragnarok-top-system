import { Request, Response } from "express";
import { getAllRoles } from "../services/rolService";
import { ResponseCustom } from "../types";

export const getRoles = async (
  _req: Request,
  resp: Response<ResponseCustom>
) => {
  const { data, statusCode } = await getAllRoles();

  return resp.status(statusCode).json(data);
};
