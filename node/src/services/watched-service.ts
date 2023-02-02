import historyRepository from "../repositories/history-repositorie";
import httpStatus from "http-status";
import { requestError } from "../errors/request-error";
import watchedRepository from "../repositories/watched-repository";

async function setMovieWatched(
  userId: number,
  tmdbMovieId: number,
  tmdbTitle: string,
  tmbdPoster_path: string
) {
  const hasPlanning = await watchedRepository.getWatchedMovies(
    userId,
    tmdbMovieId
  );

  if (hasPlanning) {
    throw requestError(httpStatus.CONFLICT, "This movie already are favorit");
  }

  const history = await historyRepository.createHistory(userId, "WATCHED");

  await watchedRepository.setWatched(
    userId,
    tmdbMovieId,
    tmdbTitle,
    tmbdPoster_path,
    history.id
  );

  return;
}

async function searchWatchedMovie(userId: number, tmdbMovieId: number) {
  const hasWatched = await watchedRepository.getWatchedMovies(
    userId,
    tmdbMovieId
  );

  if (!hasWatched) {
    throw requestError(httpStatus.NOT_FOUND, "Not found favorit movie");
  }

  return hasWatched;
}

async function deleteWatchedMovie(watchedMovieId: number) {
  const watched = await watchedRepository.searchUniqueWatched(watchedMovieId);

  await watchedRepository.deleteWatchedMovie(watchedMovieId);

  await historyRepository.deleteOneHistory(watched.historyId);

  return;
}

async function searchAllWatched(userId: number) {
  const planning = await watchedRepository.getAllWatched(userId);

  return planning;
}

const watchedService = {
  setMovieWatched,
  searchWatchedMovie,
  deleteWatchedMovie,
  searchAllWatched,
};

export default watchedService;
