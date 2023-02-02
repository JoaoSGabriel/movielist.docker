import api from "./api";

export async function postMovieFavorit(token, body) {
  const response = await api.post("/favorits/new", body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function searchMovieFavorit(token, tmdbMovieId) {
  const response = await api.get(`/favorits?tmdbMovieId=${tmdbMovieId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function deleteMovieFavorit(token, favoritId) {
  const response = await api.delete(`/favorits?favoritId=${favoritId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function getAllFavorits(token, username) {
  const response = await api.get(`/favorits/all?username=${username}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}
