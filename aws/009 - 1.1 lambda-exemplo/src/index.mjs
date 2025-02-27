import jwt from "jsonwebtoken";
import { repsonse } from "./utils/response.mjs";

export async function handle(event) {
  const token = jwt.sign({ sub: "123" }, process.env.JWT_SECRET);

  return repsonse(200, {
    users: [
      {
        id: "123",
        name: "Gustavo",
        token,
      },
    ],
  });
}
