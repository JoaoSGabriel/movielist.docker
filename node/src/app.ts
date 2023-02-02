import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import { moviesRouter } from "./routers/movies-router";
import { usersRouter } from "./routers/users-router";
import { authenticationRouter } from "./routers/authentication-router";
import { favoritsRouter } from "./routers/favorit-router";
import { planningRouter } from "./routers/planning-router";
import { watchedRouter } from "./routers/watched-router";
import { historyRouter } from "./routers/history-router";
import { ratedRouter } from "./routers/rated-router";

const port = 5000;

const app = express();
app
  .use(cors())
  .use(express.json())
  .get("/health", (_req, res) => res.send("Oh, hey there, I'm OK!"))
  .use("/movies", moviesRouter)
  .use("/users", usersRouter)
  .use("/auth", authenticationRouter)
  .use("/favorits", favoritsRouter)
  .use("/planning", planningRouter)
  .use("/watched", watchedRouter)
  .use("/history", historyRouter)
  .use("/rated", ratedRouter)
  .listen(port, () => {
    console.log(`Server is listening on port ${port}.`);
  });
