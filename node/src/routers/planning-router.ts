import { authenticateToken } from "../middlewares/authentication-middleware";
import { Router } from "express";
import {
  checkPlanningMovie,
  deletePlanningMovie,
  getAllPlanningMovies,
  postNewPlanningMovie,
} from "../controllers/planning-controller";

const planningRouter = Router();

planningRouter
  .all("/*", authenticateToken)
  .get("/", checkPlanningMovie)
  .get("/all", getAllPlanningMovies)
  .post("/new", postNewPlanningMovie)
  .delete("/", deletePlanningMovie);

export { planningRouter };
