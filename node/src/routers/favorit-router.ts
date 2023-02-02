import {
  checkFavoritMovie,
  deleteFavoritMovie,
  getAllFavoritMovies,
  postNewFavoritMovie,
} from "../controllers/favorit-controller";
import { authenticateToken } from "../middlewares/authentication-middleware";
import { Router } from "express";

const favoritsRouter = Router();

favoritsRouter
  .all("/*", authenticateToken)
  .get("/", checkFavoritMovie)
  .get("/all", getAllFavoritMovies)
  .post("/new", postNewFavoritMovie)
  .delete("/", deleteFavoritMovie);

export { favoritsRouter };
