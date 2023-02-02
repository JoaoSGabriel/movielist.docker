import api from "./api";

export async function getTrendingList() {
  const response = await api.get("/movies/toptrendig");

  return response.data;
}

export async function getRatedList() {
  const response = await api.get("/movies/toprated");

  return response.data;
}

export async function getUpcomingList() {
  const response = await api.get("/movies/upcoming");

  return response.data;
}

export async function getSearchList(text) {
  const response = await api.get(`/movies/search/${text}`);

  return response.data;
}

export async function getMovieDetails(movieId) {
  const response = await api.get(`/movies/details/${movieId}`);

  return response.data;
}

export async function getCollectionDetails(collectionId) {
  const response = await api.get(`/movies/collections/${collectionId}`);

  return response.data;
}

export async function getmMovieCredits(movieId) {
  const response = await api.get(`/movies/credits/${movieId}`);

  return response.data;
}
