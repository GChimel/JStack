import { useCreateUser } from "@/hooks/useCreateUser";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export function UserForm() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");

  const { createUser, isPending } = useCreateUser();

  async function hanldeSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      await createUser({ name, username, blocked: false });

      toast.success("Sucesso ao cadastrar usuário!");

      setName("");
      setUsername("");
    } catch (error) {
      toast.error("Erro ao cadastrar o usuário!");
      console.error(error);
    }
  }

  return (
    <form
      onSubmit={hanldeSubmit}
      className="bg-card/60 border-card border p-4 rounded-md"
    >
      <div className="flex gap-2">
        <Input
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Nome do usuário"
          disabled={isPending}
        />
        <Input
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          placeholder="@ do GitHub"
          disabled={isPending}
        />
      </div>
      <Button className="mt-2 w-full" disabled={isPending}>
        Cadastrar
      </Button>
    </form>
  );
}
