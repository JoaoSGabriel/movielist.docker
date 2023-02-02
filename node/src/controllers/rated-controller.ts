import { AuthenticatedRequest } from "../middlewares/authentication-middleware";
import { Response } from "express";
import httpStatus from "http-status";
import ratedService from "../services/rated-service";

export async function postNewRate(req: AuthenticatedRequest, res: Response) {
  const { tmdbMovieId, rate } = req.body;

  if (!tmdbMovieId || !rate) {
    return res.sendStatus(httpStatus.BAD_REQUEST);
  }

  const { userId } = req;

  try {
    await ratedService.newRate(userId, tmdbMovieId, rate);

    return res.sendStatus(httpStatus.OK);
  } catch (error) {
    return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
}

export async function deleteRate(req: AuthenticatedRequest, res: Response) {
  const { rateId } = req.query;

  try {
    await ratedService.deleteRate(Number(rateId));

    return res.sendStatus(httpStatus.OK);
  } catch (error) {
    return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
}

export async function getRate(req: AuthenticatedRequest, res: Response) {
  const { tmdbMovieId } = req.query;

  const { userId } = req;

  try {
    const rated = await ratedService.findRate(userId, Number(tmdbMovieId));

    return res.status(httpStatus.OK).send(rated);
  } catch (error) {
    console.log(error.message);
    return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
}
