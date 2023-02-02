import prisma from "../config/database";
import { Prisma } from "@prisma/client";

async function setFavorit(
  userId: number,
  tmdbMovieId: number,
  tmdbTitle: string,
  tmbdPoster_path: string,
  historyId: number
) {
  return prisma.movieFavorits.create({
    data: {
      historyId,
      tmdbMovieId: tmdbMovieId,
      tmdbTitle: tmdbTitle,
      tmbdPoster_path: tmbdPoster_path,
      userId,
    },
  });
}

async function getFavoritMovie(userId: number, tmdbMovieId: number) {
  return await prisma.movieFavorits.findFirst({
    where: {
      userId,
      tmdbMovieId,
    },
  });
}

async function deleteFavoritMovie(favoritId: number) {
  return await prisma.movieFavorits.delete({
    where: {
      id: favoritId,
    },
  });
}

async function searchUniqueFavorit(favoritId: number) {
  return await prisma.movieFavorits.findUnique({
    where: {
      id: favoritId,
    },
  });
}

async function getAllFavorits(userId: number) {
  return await prisma.movieFavorits.findMany({
    where: {
      userId,
    },
  });
}

const favoritRepository = {
  setFavorit,
  getFavoritMovie,
  deleteFavoritMovie,
  searchUniqueFavorit,
  getAllFavorits,
};

export default favoritRepository;
