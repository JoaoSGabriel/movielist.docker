import { Prisma } from "@prisma/client";
import prisma from "../config/database";

async function create(data: Prisma.ProfileUncheckedCreateInput) {
  return prisma.profile.create({
    data,
  });
}

async function findByUsername(username: string) {
  return prisma.profile.findUnique({
    where: {
      username,
    },
  });
}

async function updateUsernameProfile(
  userId: number,
  data: Prisma.ProfileUpdateInput
) {
  return prisma.profile.update({
    where: {
      userId,
    },
    data: {
      username: data.username,
      photo_path: data.photo_path,
      backdrop_path: data.backdrop_path,
    },
  });
}

const profileRepository = {
  create,
  findByUsername,
  updateUsernameProfile,
};

export default profileRepository;
