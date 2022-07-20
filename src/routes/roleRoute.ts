import { Router } from "express";
import { getRoles } from "../controllers";

const router = Router();

router.get("/getAll", getRoles);

export default router;
