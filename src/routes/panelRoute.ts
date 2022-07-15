import { Router } from "express";
import { getAllPanels } from "../controllers";

const router = Router();

router.get("/getAll", getAllPanels);

export default router;
