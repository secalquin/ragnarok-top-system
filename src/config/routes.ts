import { Router } from "express";
import panelRoutes from "../routes/panelRoute";
import roleRoutes from "../routes/roleRoute";

const routes = Router();

routes.use("/panel", panelRoutes);
routes.use("/role", roleRoutes);

export default routes;
