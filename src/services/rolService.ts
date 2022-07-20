import { prisma } from "../config/prisma";
import { CUSTOM_RESPONSE, Role } from "../types";

export const getAllRoles = async () => {
  try {
    const getData: Role[] = await prisma.role.findMany();
    return { ...CUSTOM_RESPONSE, data: getData, statusCode: 200 };
  } catch (error) {
    return { ...CUSTOM_RESPONSE, data: error, statusCode: 500 };
  }
};
