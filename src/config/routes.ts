import { Router } from "express";
import panelRoutes from "../routes/panelRoute";

const routes = Router();

routes.use("/panel", panelRoutes);

export default routes;
