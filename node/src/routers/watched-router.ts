import { authenticateToken } from "../middlewares/authentication-middleware";
import { Router } from "express";
import {
  checkWatchedMovie,
  deleteWatchedMovie,
  getAllWatchedMovies,
  postNewWatchedMovie,
} from "../controllers/watched-controller";

const watchedRouter = Router();

watchedRouter
  .all("/*", authenticateToken)
  .get("/", checkWatchedMovie)
  .get("/all", getAllWatchedMovies)
  .post("/new", postNewWatchedMovie)
  .delete("/", deleteWatchedMovie);

export { watchedRouter };
