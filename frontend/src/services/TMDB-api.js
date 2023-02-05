import api from "./api";

export async function getTrendingList(page) {
  const response = await api.get(`/movies/toptrendig?page=${page}`);

  return response.data;
}

export async function getRatedList(page) {
  const response = await api.get(`/movies/toprated?page=${page}`);

  return response.data;
}

export async function getUpcomingList(page) {
  const response = await api.get(`/movies/upcoming?page=${page}`);

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
