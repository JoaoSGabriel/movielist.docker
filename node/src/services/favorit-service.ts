import historyRepository from "../repositories/history-repositorie";
import httpStatus from "http-status";
import { requestError } from "../errors/request-error";
import favoritRepository from "../repositories/favorit-repository";
import profileRepository from "../repositories/profile.repository";

async function setNewFavorit(
  userId: number,
  tmdbMovieId: number,
  tmdbTitle: string,
  tmbdPoster_path: string
) {
  const hasFavorit = await favoritRepository.getFavoritMovie(
    userId,
    tmdbMovieId
  );

  if (hasFavorit) {
    throw requestError(httpStatus.CONFLICT, "This movie already are favorit");
  }

  const history = await historyRepository.createHistory(userId, "LIKED");

  await favoritRepository.setFavorit(
    userId,
    tmdbMovieId,
    tmdbTitle,
    tmbdPoster_path,
    history.id
  );

  return;
}

async function searchFavorits(userId: number, tmdbMovieId: number) {
  const hasFavorit = await favoritRepository.getFavoritMovie(
    userId,
    tmdbMovieId
  );

  if (!hasFavorit) {
    throw requestError(httpStatus.NOT_FOUND, "Not found favorit movie");
  }

  return hasFavorit;
}

async function deleteFavorits(favoritId: number) {
  const favorit = await favoritRepository.searchUniqueFavorit(favoritId);

  await favoritRepository.deleteFavoritMovie(favoritId);

  await historyRepository.deleteOneHistory(favorit.historyId);

  return;
}

async function searchAllFavorits(username: string) {
  const user = await profileRepository.findByUsername(username);

  const favorits = await favoritRepository.getAllFavorits(user.userId);

  return favorits;
}

const favoritService = {
  setNewFavorit,
  searchFavorits,
  deleteFavorits,
  searchAllFavorits,
};

export default favoritService;
