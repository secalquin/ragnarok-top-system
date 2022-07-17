import { RoleEnum, User } from "../../src/types";

const { TEST } = RoleEnum;

const emailRandom: string = (Math.random() + 1).toString(36).substring(7);
export const usersData: User[] = [
  {
    active: false,
    created_at: new Date(),
    email: `${emailRandom}@test.cl`,
    name: `${emailRandom}`,
    roleId: TEST,
    password: `${emailRandom}TEST`,
  },
];
