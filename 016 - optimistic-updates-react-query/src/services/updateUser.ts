import { sleep } from "@/lib/utils";
import { IUser } from "@/types/IUsers";

type IUpdateUserDTO = Partial<Omit<IUser, "id">> & { id: string };

export async function updateUser({
  blocked,
  name,
  username,
  id,
}: IUpdateUserDTO) {
  await sleep();

  const response = await fetch(`http://localhost:3000/users/${id}`, {
    method: "PATCH",
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
