import { AuthenticatedRequest } from "../middlewares/authentication-middleware";
import { Response } from "express";
import httpStatus from "http-status";
import profileService from "../services/profile-service";

export async function getProfileByUsername(
  req: AuthenticatedRequest,
  res: Response
) {
  const username = req.query?.username;
  if (typeof username !== "string") {
    return res.sendStatus(httpStatus.BAD_REQUEST);
  }

  try {
    const profile = await profileService.getProfile(username);
    res.status(httpStatus.OK).send(profile);
  } catch (error) {
    if (error.name === "RequestError") {
      return res.sendStatus(httpStatus.NOT_FOUND);
    }
    res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
}

export async function putProfile(req: AuthenticatedRequest, res: Response) {
  const { username, photo_path, backdrop_path } = req.body;

  if (!username) {
    return res.sendStatus(httpStatus.BAD_REQUEST);
  }

  const { userId } = req;

  try {
    await profileService.updateProfile(userId, {
      username,
      photo_path,
      backdrop_path,
    });

    return res.sendStatus(httpStatus.OK);
  } catch (error) {
    if (error.name === "RequestError") {
      return res.sendStatus(httpStatus.NOT_FOUND);
    }
    res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
}

export async function getProfiles(req: AuthenticatedRequest, res: Response) {
  const { username } = req.query;

  if (typeof username !== "string") {
    return res.sendStatus(httpStatus.BAD_REQUEST);
  }

  try {
    const profiles = await profileService.findUser(username);

    return res.status(httpStatus.OK).send(profiles);
  } catch (error) {
    res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
}
