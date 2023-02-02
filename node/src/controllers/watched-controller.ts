import { AuthenticatedRequest } from "../middlewares/authentication-middleware";
import { Response } from "express";
import httpStatus from "http-status";
import watchedService from "../services/watched-service";

export async function postNewWatchedMovie(
  req: AuthenticatedRequest,
  res: Response
) {
  const { tmdbMovieId, tmdbTitle, tmdbPoster_path } = req.body;

  if (!tmdbMovieId || !tmdbTitle || !tmdbPoster_path) {
    return res.sendStatus(httpStatus.BAD_REQUEST);
  }

  const { userId } = req;

  try {
    await watchedService.setMovieWatched(
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

export async function checkWatchedMovie(
  req: AuthenticatedRequest,
  res: Response
) {
  const { tmdbMovieId } = req.query;
  const { userId } = req;

  try {
    const watched = await watchedService.searchWatchedMovie(
      userId,
      Number(tmdbMovieId)
    );
    return res.status(httpStatus.OK).send(watched);
  } catch (error) {
    if (error.name === "RequestError") {
      return res.sendStatus(httpStatus.NOT_FOUND);
    }
  }
}

export async function deleteWatchedMovie(
  req: AuthenticatedRequest,
  res: Response
) {
  const { watchedId } = req.query;

  try {
    await watchedService.deleteWatchedMovie(Number(watchedId));
    return res.sendStatus(httpStatus.OK);
  } catch (error) {
    console.log(error.message);
    return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
}

export async function getAllWatchedMovies(
  req: AuthenticatedRequest,
  res: Response
) {
  const { userId } = req;

  try {
    const watched = await watchedService.searchAllWatched(userId);
    return res.status(httpStatus.OK).send(watched);
  } catch (error) {
    console.log(error.message);
    return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
}
