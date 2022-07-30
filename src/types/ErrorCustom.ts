export type ErrorCustom = {
  errors: ErrorValues[];
  statusCode: number;
};

export type ErrorValues = {
  key: string;
  message: string;
  location: string;
};
