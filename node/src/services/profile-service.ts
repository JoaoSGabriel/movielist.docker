import httpStatus from "http-status";
import { requestError } from "../errors/request-error";
import profileRepository from "../repositories/profile.repository";

async function getProfile(username: string) {
  const profile = await profileRepository.findByUsername(username);

  if (!profile) {
    throw requestError(httpStatus.NOT_FOUND, "Perfil não encontrado");
  }

  return profile;
}

async function updateProfile(userId: number, body: object) {
  await profileRepository.updateUsernameProfile(userId, body);

  return;
}

const profileService = {
  getProfile,
  updateProfile,
};

export default profileService;
