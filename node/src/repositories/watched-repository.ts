import prisma from "../config/database";

async function setWatched(
  userId: number,
  tmdbMovieId: number,
  tmdbTitle: string,
  tmbdPoster_path: string,
  historyId: number
) {
  return prisma.watched.create({
    data: {
      historyId,
      tmdbMovieId: tmdbMovieId,
      tmdbTitle: tmdbTitle,
      tmbdPoster_path: tmbdPoster_path,
      userId,
    },
  });
}

async function getWatchedMovies(userId: number, tmdbMovieId: number) {
  return await prisma.watched.findFirst({
    where: {
      userId,
      tmdbMovieId,
    },
  });
}

async function deleteWatchedMovie(watchedMovieId: number) {
  return await prisma.watched.delete({
    where: {
      id: watchedMovieId,
    },
  });
}

async function searchUniqueWatched(watchedMovieId: number) {
  return await prisma.watched.findUnique({
    where: {
      id: watchedMovieId,
    },
  });
}

async function getAllWatched(userId: number) {
  return await prisma.watched.findMany({
    where: {
      userId,
    },
  });
}

const watchedRepository = {
  setWatched,
  getWatchedMovies,
  deleteWatchedMovie,
  searchUniqueWatched,
  getAllWatched,
};

export default watchedRepository;
