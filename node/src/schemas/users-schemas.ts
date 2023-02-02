import { CreateUserProcess } from "@/services/user-service";
import Joi from "joi";

export const createUserSchema = Joi.object<CreateUserProcess>({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  username: Joi.string().required(),
});
