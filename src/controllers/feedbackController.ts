import { NextFunction, Request, Response } from "express";
import { prisma } from "../config/prisma";
import { getFeedback } from "../services/feedbackService";
import { ErrorCustom, ResponseCustom } from "../types";

export const getFeedbackFromPanel = async (
  req: Request,
  res: Response
): Promise<ResponseCustom> => {
  const { panelId } = req.params;
  return res.json(await getFeedback(Number(panelId)));
};

export const validateRequest = async (
  req: Request,
  resp: Response<ErrorCustom>,
  next: NextFunction
) => {
  const { panelId } = req.params;
  const getPanelId = await prisma.panel.count({
    where: { id: Number(panelId) },
  });
  if (!getPanelId) {
    return resp.status(404).json({
      errors: [
        { key: "panelId", message: "Panel not found", location: "params" },
      ],
      statusCode: 404,
    });
  }

  next();
};
