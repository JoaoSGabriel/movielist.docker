import userRepository from "../repositories/user-repository";
import { User } from "@prisma/client";
import bcrypt from "bcrypt";
import { ApplicationError } from "../protocols";
import profileRepository from "../repositories/profile.repository";

export async function createUser(
  { email, password }: CreateUserParams,
  username: string
) {
  await validateUniqueEmailOrFail(email);

  await validateUniqueUsername(username);

  const hashedPassword = await bcrypt.hash(password, 12);

  const user = await userRepository.create({
    email,
    password: hashedPassword,
  });

  const profile = await profileRepository.create({
    username,
    userId: user.id,
  });

  return {
    id: user.id,
    email: user.email,
    username: profile.username,
  };
}

async function validateUniqueEmailOrFail(email: string) {
  const userWithSameEmail = await userRepository.findByEmail(email);

  if (userWithSameEmail) {
    throw duplicatedEmailError();
  }
}

async function validateUniqueUsername(username: string) {
  const invalidUsername = await profileRepository.findByUsername(username);

  if (invalidUsername) {
    throw usernameInUse();
  }
}

export function duplicatedEmailError(): ApplicationError {
  return {
    name: "DuplicatedEmailError",
    message: "There is already an user with given email",
  };
}

export function usernameInUse(): ApplicationError {
  return {
    name: "InvalidUsername",
    message: "There is already an user with given username",
  };
}

export type CreateUserParams = Pick<User, "email" | "password">;
export type CreateUserProcess = {
  email: string;
  password: string;
  username: string;
};

const userService = {
  createUser,
};

export default userService;
