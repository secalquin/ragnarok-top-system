import { RoleEnum, Role } from "../../src/types";

const { ADMIN, NORMAL, PUBLISHER, TEST } = RoleEnum;

export const rolesData: Role[] = [
  {
    id: 1,
    name: TEST.toString(),
  },
  {
    id: 2,
    name: ADMIN.toString(),
  },
  {
    id: 3,
    name: NORMAL.toString(),
  },
  {
    id: 4,
    name: PUBLISHER.toString(),
  },
];
