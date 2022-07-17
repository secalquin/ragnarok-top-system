export type User = {
  id?: number;
  name: string;
  email: string;
  password: string;
  roleId: number;
  active: boolean;
  created_at: Date;
};
