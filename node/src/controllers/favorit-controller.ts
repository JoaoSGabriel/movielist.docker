import { AuthenticatedRequest } from "../middlewares/authentication-middleware";
import { Response } from "express";
import httpStatus from "http-status";
import favoritService from "../services/favorit-service";

export async function postNewFavoritMovie(
  req: AuthenticatedRequest,
  res: Response
) {
  const { tmdbMovieId, tmdbTitle, tmdbPoster_path } = req.body;

  if (!tmdbMovieId || !tmdbTitle || !tmdbPoster_path) {
    return res.sendStatus(httpStatus.BAD_REQUEST);
  }

  const { userId } = req;

  try {
    await favoritService.setNewFavorit(
      userId,
      tmdbMovieId,
      tmdbTitle,
      tmdbPoster_path
    );
    return res.sendStatus(httpStatus.OK);
  } catch (error) {
    console.log(error.message);
    return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
}

export async function checkFavoritMovie(
  req: AuthenticatedRequest,
  res: Response
) {
  const { tmdbMovieId } = req.query;
  const { userId } = req;

  try {
    const favorit = await favoritService.searchFavorits(
      userId,
      Number(tmdbMovieId)
    );
    return res.status(httpStatus.OK).send(favorit);
  } catch (error) {
    if (error.name === "RequestError") {
      return res.sendStatus(httpStatus.NOT_FOUND);
    }
  }
}

export async function deleteFavoritMovie(
  req: AuthenticatedRequest,
  res: Response
) {
  const { favoritId } = req.query;

  try {
    await favoritService.deleteFavorits(Number(favoritId));
    return res.sendStatus(httpStatus.OK);
  } catch (error) {
    console.log(error.message);
    return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
}

export async function getAllFavoritMovies(
  req: AuthenticatedRequest,
  res: Response
) {
  const { username } = req.query;

  if (typeof username !== "string") {
    return res.sendStatus(httpStatus.BAD_REQUEST);
  }

  try {
    const favorits = await favoritService.searchAllFavorits(username);
    return res.status(httpStatus.OK).send(favorits);
  } catch (error) {
    console.log(error.message);
    return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
}
