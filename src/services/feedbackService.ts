import { prisma } from "../config/prisma";
import { ResponseCustom } from "../types";

export const getFeedback = async (panelId: number): Promise<ResponseCustom> => {
  const getFeedbackByPanelId = await prisma.feedback.findMany({
    where: { panelId: panelId },
  });
  return { data: getFeedbackByPanelId, statusCode: 200 };
};
