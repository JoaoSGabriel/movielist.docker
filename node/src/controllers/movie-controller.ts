import TMDB from "../utils/TMDB-config";
import { Request, Response } from "express";
import httpStatus from "http-status";

export async function getTopTrendingList(req: Request, res: Response) {
  try {
    const data = await TMDB.getTrendingNow();
    res.status(httpStatus.OK).send(data);
  } catch (error) {
    console.log(error.message);
    return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
}

export async function getTopRatedList(req: Request, res: Response) {
  try {
    const data = await TMDB.getTopRated();
    res.status(httpStatus.OK).send(data);
  } catch (error) {
    console.log(error.message);
    return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
}

export async function getUpcomingList(req: Request, res: Response) {
  try {
    const data = await TMDB.getUpcoming();
    res.status(httpStatus.OK).send(data);
  } catch (error) {
    console.log(error.message);
    return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
}

export async function getSearchMovies(req: Request, res: Response) {
  const { title } = req.params;
  try {
    const data = await TMDB.getSearch(title);
    res.status(httpStatus.OK).send(data);
  } catch (error) {
    console.log(error.message);
    return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
}

export async function getMovieDetails(req: Request, res: Response) {
  const { movieId } = req.params;
  try {
    const data = await TMDB.getMovieDetails(Number(movieId));
    res.status(httpStatus.OK).send(data);
  } catch (error) {
    console.log(error.message);
    return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
}

export async function getCollectionDetails(req: Request, res: Response) {
  const { collectionId } = req.params;
  try {
    const data = await TMDB.getCollection(Number(collectionId));
    res.status(httpStatus.OK).send(data);
  } catch (error) {
    console.log(error.message);
    return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
}

export async function getMovieCredits(req: Request, res: Response) {
  const { movieId } = req.params;
  try {
    const data = await TMDB.getMovieCredits(Number(movieId));
    res.status(httpStatus.OK).send(data);
  } catch (error) {
    console.log(error.message);
    return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
}
