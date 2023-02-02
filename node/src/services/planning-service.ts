import historyRepository from "../repositories/history-repositorie";
import httpStatus from "http-status";
import { requestError } from "../errors/request-error";
import planningRepository from "../repositories/planning-repository";

async function setNewPlanning(
  userId: number,
  tmdbMovieId: number,
  tmdbTitle: string,
  tmbdPoster_path: string
) {
  const hasPlanning = await planningRepository.getPlanningMovies(
    userId,
    tmdbMovieId
  );

  if (hasPlanning) {
    throw requestError(
      httpStatus.CONFLICT,
      "This movie already are in planning calendar"
    );
  }

  const history = await historyRepository.createHistory(userId, "PLANNING");

  await planningRepository.setPlanning(
    userId,
    tmdbMovieId,
    tmdbTitle,
    tmbdPoster_path,
    history.id
  );

  return;
}

async function searchPlanning(userId: number, tmdbMovieId: number) {
  const planning = await planningRepository.getPlanningMovies(
    userId,
    tmdbMovieId
  );

  if (!planning) {
    throw requestError(httpStatus.NOT_FOUND, "Not found planning movie");
  }

  return planning;
}

async function deletePlanningMovie(planningId: number) {
  const planning = await planningRepository.searchUniquePlanning(planningId);

  await planningRepository.deletePlanningMovie(planningId);

  await historyRepository.deleteOneHistory(planning.historyId);

  return;
}

async function searchAllPlanning(userId: number) {
  const planning = await planningRepository.getAllPlanning(userId);

  return planning;
}

const planningService = {
  setNewPlanning,
  searchPlanning,
  deletePlanningMovie,
  searchAllPlanning,
};

export default planningService;
