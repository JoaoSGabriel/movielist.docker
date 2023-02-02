import authenticationService, {
  SignInParams,
} from "../services/authentication-service";
import userService from "../services/user-service";
import { Request, Response } from "express";
import httpStatus from "http-status";

export async function usersPost(req: Request, res: Response) {
  const { email, password, username } = req.body;

  try {
    const user = await userService.createUser({ email, password }, username);

    return res.status(httpStatus.CREATED).json({ user });
  } catch (error) {
    console.log(error.message);
    if (error.name === "DuplicatedEmailError") {
      return res.sendStatus(httpStatus.CONFLICT);
    }
    if (error.name === "InvalidUsername") {
      return res.sendStatus(httpStatus.CONFLICT);
    }
    return res.sendStatus(httpStatus.BAD_REQUEST);
  }
}

export async function singInPost(req: Request, res: Response) {
  const { email, password } = req.body as SignInParams;

  try {
    const result = await authenticationService.signIn({ email, password });

    return res.status(httpStatus.OK).send(result);
  } catch (error) {
    return res.status(httpStatus.UNAUTHORIZED).send({});
  }
}
