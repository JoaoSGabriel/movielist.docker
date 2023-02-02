import api from "./api";

export async function getProfile(username) {
  const response = await api.get(`/users/profile?username=${username}`);

  return response.data;
}

export async function putProfile(token, body) {
  const response = await api.put(`/users/profile`, body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}
