import { ResponseCustom } from "../types";

const CUSTOM_RESPONSE: ResponseCustom = { data: null, statusCode: 0 };

export const getAll = (): ResponseCustom => {
  return { ...CUSTOM_RESPONSE, data: "Example Response", statusCode: 200 };
};
