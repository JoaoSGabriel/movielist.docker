import { Router } from "express";

import { createUserSchema } from "../schemas/users-schemas";
import { validateBody } from "../middlewares/validation-middleware";
import { usersPost } from "../controllers/users-controller";
import {
  getProfileByUsername,
  getProfiles,
  putProfile,
} from "../controllers/profile-controller";
import { authenticateToken } from "../middlewares/authentication-middleware";

const usersRouter = Router();

usersRouter
  .post("/", validateBody(createUserSchema), usersPost)
  .get("/profile", getProfileByUsername)
  .all("/*", authenticateToken)
  .put("/profile", putProfile)
  .get("/profile/find", getProfiles);

export { usersRouter };
