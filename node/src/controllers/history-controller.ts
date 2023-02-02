import { AuthenticatedRequest } from "../middlewares/authentication-middleware";
import { Request, Response } from "express";
import httpStatus from "http-status";
import historyService from "../services/history-service";

export async function getAllHistoryInteractions(req: Request, res: Response) {
  const { username } = req.query;

  if (typeof username !== "string") {
    return res.sendStatus(httpStatus.BAD_REQUEST);
  }

  try {
    const history = await historyService.SearchAllHistory(username);
    res.status(httpStatus.OK).send(history);
  } catch (error) {
    return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
}

export async function getHistoryInfo(req: Request, res: Response) {
  const { historyId } = req.query;

  try {
    const history = await historyService.searchHistoryInfo(Number(historyId));

    res.status(httpStatus.OK).send(history);
  } catch (error) {
    return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
}

export async function postComment(req: AuthenticatedRequest, res: Response) {
  const { comment, historyId } = req.body;

  const { userId } = req;

  try {
    await historyService.createComment(userId, Number(historyId), comment);

    res.sendStatus(httpStatus.CREATED);
  } catch (error) {
    return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
}

export async function postLikeHistory(
  req: AuthenticatedRequest,
  res: Response
) {
  const { historyId } = req.body;

  const { userId } = req;

  try {
    await historyService.setLikeOnHistory(historyId, userId);

    res.sendStatus(httpStatus.CREATED);
  } catch (error) {
    return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
}

export async function deletecommentHistory(
  req: AuthenticatedRequest,
  res: Response
) {
  const { commentId } = req.query;

  try {
    await historyService.deleteComment(Number(commentId));

    res.sendStatus(httpStatus.OK);
  } catch (error) {
    return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
}

export async function deleteLikeHistory(
  req: AuthenticatedRequest,
  res: Response
) {
  const { likeId } = req.query;

  try {
    await historyService.deleteLike(Number(likeId));

    res.sendStatus(httpStatus.OK);
  } catch (error) {
    return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
}
