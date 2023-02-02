import api from "./api";

export async function postMoviePlanning(token, body) {
  const response = await api.post("/planning/new", body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function searchMoviePlanning(token, tmdbMovieId) {
  const response = await api.get(`/planning?tmdbMovieId=${tmdbMovieId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function deleteMoviePlanning(token, planningId) {
  const response = await api.delete(`/planning?planningId=${planningId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function getAllPlanning(token) {
  const response = await api.get(`/planning/all`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}
