import { MovieTrendingList } from "../protocols";
import { request } from "./request";

const api_key = process.env.TMDB_SECRET;
const api_adress = "https://api.themoviedb.org/3";
const language = "pt-BR";

async function getTrendingNow(page: string): Promise<MovieTrendingList> {
  const data = await request.get(
    `${api_adress}/movie/popular?api_key=${api_key}&language=${language}&page=${page}`
  );

  return data.data;
}

async function getTopRated(page: string): Promise<MovieTrendingList> {
  const data = await request.get(
    `${api_adress}/movie/top_rated?api_key=${api_key}&language=${language}&page=${page}`
  );

  return data.data;
}

async function getUpcoming(page: string): Promise<MovieTrendingList> {
  const data = await request.get(
    `${api_adress}/movie/upcoming?api_key=${api_key}&language=${language}&page=${page}`
  );

  return data.data;
}

async function getSearch(text: string): Promise<MovieTrendingList> {
  const data = await request.get(
    `${api_adress}/search/movie?api_key=${api_key}&language=${language}&query=${text}&page=1&include_adult=true`
  );

  return data.data;
}

async function getMovieDetails(movieId: number): Promise<MovieTrendingList> {
  const data = await request.get(
    `${api_adress}/movie/${movieId}?api_key=${api_key}&language=${language}`
  );

  return data.data;
}

async function getCollection(collectionId: number): Promise<MovieTrendingList> {
  const data = await request.get(
    `${api_adress}/collection/${collectionId}?api_key=${api_key}&language=${language}`
  );

  return data.data;
}

async function getMovieCredits(movieId: number): Promise<MovieTrendingList> {
  const data = await request.get(
    `${api_adress}/movie/${movieId}/credits?api_key=${api_key}&language=${language}`
  );

  return data.data;
}

const TMDB = {
  getTrendingNow,
  getTopRated,
  getUpcoming,
  getSearch,
  getMovieDetails,
  getCollection,
  getMovieCredits,
};

export default TMDB;
