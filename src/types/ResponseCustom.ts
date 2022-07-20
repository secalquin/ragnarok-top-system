export type ResponseCustom = {
  data?: unknown;
  statusCode: number;
};

export const CUSTOM_RESPONSE: ResponseCustom = { data: null, statusCode: 0 };
