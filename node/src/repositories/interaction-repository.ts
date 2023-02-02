import { Prisma } from "@prisma/client";
import prisma from "../config/database";

async function findHistoryInfo(historyId: number) {
  return prisma.history.findFirst({
    where: {
      id: historyId,
    },
    select: {
      id: true,
      userId: true,
      type: true,
      createdAt: true,
      Like: true,
      Comment: {
        orderBy: [
          {
            createdAt: "desc",
          },
        ],
        select: {
          User: {
            include: {
              Profile: true,
            },
          },
          comment: true,
          createdAt: true,
          id: true,
        },
      },
    },
  });
}

async function createComment(data: Prisma.CommentUncheckedCreateInput) {
  return prisma.comment.create({
    data,
  });
}

async function deleteComment(commentId: number) {
  return prisma.comment.delete({
    where: {
      id: commentId,
    },
  });
}

async function addLikeOnHistory(data: Prisma.LikeUncheckedCreateInput) {
  return prisma.like.create({ data });
}

async function removeLike(likeId: number) {
  return prisma.like.delete({
    where: {
      id: likeId,
    },
  });
}

const interactionRepository = {
  findHistoryInfo,
  createComment,
  deleteComment,
  addLikeOnHistory,
  removeLike,
};

export default interactionRepository;
