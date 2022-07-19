import { prisma } from "../config/prisma";
import { cacheKey, GET_ASYNC, SET_ASYNC } from "../config/redis";
import { Panel, ResponseCustom } from "../types";

const CUSTOM_RESPONSE: ResponseCustom = { data: null, statusCode: 0 };

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
