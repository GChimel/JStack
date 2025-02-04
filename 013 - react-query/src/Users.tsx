import { useCreateUser, useUsers } from "./hooks/useUsers";

export interface IUser {
  id: string;
  name: string;
  email: string;
}

export function Users() {
  const { users, isLoading, refetch, isFetching } = useUsers();

  const { mutate, isPending } = useCreateUser();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    mutate({
      name: e.currentTarget.name.value,
      email: e.currentTarget.email.value,
    });
  }

  return (
    <div className="p-4">
      <div className="mb-10 bg-zinc-800 p-4 w-1/2">
        <form action="" className="flex flex-col gap-2" onSubmit={handleSubmit}>
          <input
            className="outline-none p-1 rounded-md text-zinc-900 bg-zinc-300"
            type="text"
            placeholder="nome"
            name="name"
          />
          <input
            className="outline-none p-1 rounded-md text-zinc-900 bg-zinc-300"
            type="email"
            placeholder="email"
            name="email"
          />

          <button className="bg-blue-600 text-zinc-900 px-4 rounded-lg rounded-md py-2">
            {isPending ? "Cadastrando..." : "Cadastrar"}
          </button>
        </form>
      </div>

      <button
        className="bg-white text-black px-4 rounded-lg cursor-pointer"
        onClick={() => refetch()}
      >
        Logar
      </button>

      {isLoading && <h1>Loading...</h1>}
      {isFetching && !isLoading && <small>Fetching...</small>}

      {users.map((user) => (
        <div key={user.id}>
          <h1>{user.name}</h1>
          <small>{user.email}</small>
        </div>
      ))}
    </div>
  );
}
