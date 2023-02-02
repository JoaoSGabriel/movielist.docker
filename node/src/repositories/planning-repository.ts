import prisma from "../config/database";

async function setPlanning(
  userId: number,
  tmdbMovieId: number,
  tmdbTitle: string,
  tmbdPoster_path: string,
  historyId: number
) {
  return prisma.planingSee.create({
    data: {
      historyId,
      tmdbMovieId: tmdbMovieId,
      tmdbTitle: tmdbTitle,
      tmbdPoster_path: tmbdPoster_path,
      userId,
    },
  });
}

async function getPlanningMovies(userId: number, tmdbMovieId: number) {
  return await prisma.planingSee.findFirst({
    where: {
      userId,
      tmdbMovieId,
    },
  });
}

async function searchUniquePlanning(planningId: number) {
  return await prisma.planingSee.findUnique({
    where: {
      id: planningId,
    },
  });
}

async function deletePlanningMovie(planningId: number) {
  return await prisma.planingSee.delete({
    where: {
      id: planningId,
    },
  });
}

async function getAllPlanning(userId: number) {
  return await prisma.planingSee.findMany({
    where: {
      userId,
    },
  });
}

const planningRepository = {
  setPlanning,
  getPlanningMovies,
  searchUniquePlanning,
  deletePlanningMovie,
  getAllPlanning,
};

export default planningRepository;
