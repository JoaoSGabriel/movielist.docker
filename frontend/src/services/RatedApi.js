import api from "./api";

export async function getRate(token, tmdbMovieId) {
  const response = await api.get(`/rated?tmdbMovieId=${tmdbMovieId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function postRate(token, body) {
  const response = await api.post(`/rated`, body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function deleteRate(token, rateId) {
  const response = await api.delete(`/rated?rateId=${rateId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}
