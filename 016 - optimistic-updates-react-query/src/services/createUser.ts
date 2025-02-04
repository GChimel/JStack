import { sleep } from "@/lib/utils";
import { IUser } from "@/types/IUsers";

type ICreateUserDTO = Omit<IUser, "id">;

export async function createUsers({ blocked, name, username }: ICreateUserDTO) {
  await sleep();
  const response = await fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      blocked,
      name,
      username,
    }),
  });

  const body = await response.json();

  return body as IUser;
}
