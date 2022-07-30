import { Router } from "express";
import { getFeedbackFromPanel, validateRequest } from "../controllers";

const router = Router();

router.get("/panel/:panelId", [validateRequest], getFeedbackFromPanel);

export default router;
