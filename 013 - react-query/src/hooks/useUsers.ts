import { useMutation, useQuery } from "@tanstack/react-query";
import { IUser } from "../Users";
import { Sleep } from "../utils/sleep";

export function useUsers() {
  const { data, isLoading, refetch, isFetching } = useQuery({
    enabled: true, // Habilita ou desabilita a query
    queryKey: ["users"], // Key do cache, atrelada sempre a uma queryFN
    queryFn: async (): Promise<IUser[]> => {
      //Função que vai retornar os dados que serão armazenados no cache

      await Sleep();
      const response = await fetch("http://localhost:3000/users");
      return response.json();
    },
  });

  return { users: data ?? [], isLoading, refetch, isFetching };
}

export function useCreateUser() {
  return useMutation({
    mutationFn: async ({ name, email }: { name: string; email: string }) => {
      await Sleep();
      console.log({ name, email });

      // throw new Error("Erro");

      const response = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email }),
      });

      return response.json();
    },
    onError: (error, variables) => {
      console.log("Erro", error.toString(), variables);
    },
    onSuccess: (data, variables) => {
      console.log("Sucesso", { data, variables });
    },
    // Como se fosse o finally
    onSettled: () => {
      console.log("Settled - Finalizado");
    },
  });
}
