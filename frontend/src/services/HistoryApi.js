import api from "./api";

export async function getAllHistory(username) {
  const response = await api.get(`/history?username=${username}`);

  return response.data;
}

export async function getHistoryInfo(historyId) {
  const response = await api.get(`/history/info?historyId=${historyId}`);

  return response.data;
}

export async function postComment(token, historyId, comment) {
  const response = await api.post(
    `/history/comment`,
    { historyId, comment },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
}

export async function postLikeHistory(token, historyId) {
  const response = await api.post(
    `/history/like`,
    { historyId },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
}

export async function deleteLikeHistory(token, likeId) {
  const response = await api.delete(`/history/like?likeId=${likeId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function deleteCommentHistory(token, commentId) {
  const response = await api.delete(`/history/comment?commentId=${commentId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}
