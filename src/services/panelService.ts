import { prisma } from "../config/prisma";
import { GET_ASYNC, SET_ASYNC } from "../config/redis";
import { CUSTOM_RESPONSE, Panel, ResponseCustom } from "../types";
import { cacheKey } from "../utils";

export const getAll = async (): Promise<ResponseCustom> => {
  const replyPanels = await GET_ASYNC(cacheKey(`panels`));

  /**RESPONSE FROM CACHE */
  if (replyPanels) {
    return {
      ...CUSTOM_RESPONSE,
      data: JSON.parse(replyPanels),
      statusCode: 200,
    };
  }

  const getPanels: Panel[] = await prisma.panel.findMany();

  await SET_ASYNC(cacheKey(`panels`), JSON.stringify(getPanels), "EX", 200);

  return { ...CUSTOM_RESPONSE, data: getPanels, statusCode: 200 };
};
