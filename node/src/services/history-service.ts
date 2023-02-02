import interactionRepository from "../repositories/interaction-repository";
import historyRepository from "../repositories/history-repositorie";
import profileRepository from "../repositories/profile.repository";

async function SearchAllHistory(username: string) {
  const user = await profileRepository.findByUsername(username);

  const history = await historyRepository.searchUserHistory(user.userId);

  return history;
}

async function searchHistoryInfo(historyId: number) {
  const history = await interactionRepository.findHistoryInfo(historyId);

  return history;
}

async function setLikeOnHistory(historyId: number, userId: number) {
  await interactionRepository.addLikeOnHistory({ userId, historyId });

  return;
}

async function deleteComment(commentId: number) {
  await interactionRepository.deleteComment(commentId);

  return;
}

async function deleteLike(likeId: number) {
  await interactionRepository.removeLike(likeId);

  return;
}

async function createComment(
  userId: number,
  historyId: number,
  comment: string
) {
  await interactionRepository.createComment({ userId, historyId, comment });

  return;
}

const historyService = {
  SearchAllHistory,
  searchHistoryInfo,
  setLikeOnHistory,
  deleteComment,
  deleteLike,
  createComment,
};

export default historyService;
