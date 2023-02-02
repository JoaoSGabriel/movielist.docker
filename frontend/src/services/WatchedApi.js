import api from "./api";

export async function postMovieWatched(token, body) {
  const response = await api.post("/watched/new", body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function searchMovieWatched(token, tmdbMovieId) {
  const response = await api.get(`/watched?tmdbMovieId=${tmdbMovieId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function deleteMovieWatched(token, watchedId) {
  const response = await api.delete(`/watched?watchedId=${watchedId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function getAllWatched(token) {
  const response = await api.get(`/watched/all`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}
