import { authenticateToken } from "../middlewares/authentication-middleware";
import { Router } from "express";
import {
  deleteRate,
  getRate,
  postNewRate,
} from "../controllers/rated-controller";

const ratedRouter = Router();

ratedRouter
  .all("/*", authenticateToken)
  .get("/", getRate)
  .post("/", postNewRate)
  .delete("/", deleteRate);

export { ratedRouter };
