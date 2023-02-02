import { HistoryType } from "@prisma/client";
import prisma from "../config/database";

async function createHistory(userId: number, type: HistoryType) {
  return await prisma.history.create({
    data: {
      userId,
      type,
    },
  });
}

async function searchUserHistory(userId: number) {
  return await prisma.history.findMany({
    where: {
      userId,
    },
    orderBy: [
      {
        createdAt: "desc",
      },
    ],
    include: {
      Watched: true,
      PlaningSee: true,
      MovieFavorits: true,
      Like: true,
    },
  });
}

async function deleteOneHistory(historyId: number) {
  return prisma.history.delete({
    where: {
      id: historyId,
    },
  });
}

const historyRepository = {
  createHistory,
  searchUserHistory,
  deleteOneHistory,
};

export default historyRepository;
