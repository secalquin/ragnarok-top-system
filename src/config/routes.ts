import { Router } from "express";
import panelRoutes from "../routes/panelRoute";
import roleRoutes from "../routes/roleRoute";
import feedbackRoutes from "../routes/feedbackRoute";

const routes = Router();

routes.use("/panel", panelRoutes);
routes.use("/role", roleRoutes);
routes.use("/feedback", feedbackRoutes);

export default routes;
