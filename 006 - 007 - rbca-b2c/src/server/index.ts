import cors from "cors";
import express from "express";

import { routeAdapter } from "./adapters/routeAdapter";

import { makeAuthenticationMiddleware } from "../factories/makeAuthenticationMiddleware";
import { makeAuthorizationMiddleware } from "../factories/makeAuthorizationMiddleware";
import { makeListLeadsController } from "../factories/makeListLeadsController";
import { makeSignInController } from "../factories/makeSignInController";
import { makeSignUpController } from "../factories/makeSignUpController";
import { middlewareAdapter } from "./adapters/middlewareAdapter";

const app = express();

app.use(cors());

app.use(express.json());

app.post("/sign-up", routeAdapter(makeSignUpController()));
app.post("/sign-in", routeAdapter(makeSignInController()));

app.get(
  "/leads",
  middlewareAdapter(makeAuthenticationMiddleware()),
  routeAdapter(makeListLeadsController())
);

// Somente usuários com a role "ADMIN" podem criar leads
app.post(
  "/leads",
  middlewareAdapter(makeAuthenticationMiddleware()),
  middlewareAdapter(makeAuthorizationMiddleware(["ADMIN"])),

  async (req, res) => res.send({ ok: true })
);

app.listen(3001, () => {
  console.log("Server started at http://localhost:3001");
});
