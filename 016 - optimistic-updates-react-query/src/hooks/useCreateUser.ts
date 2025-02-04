import { createUsers } from "@/services/createUser";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { USERS_QUERY_KEY } from "./useUsers";

export function useCreateUser() {
  const queryClient = useQueryClient();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: createUsers,
    onSuccess: () => {
      // Invalida a query do users
      queryClient.invalidateQueries({
        queryKey: USERS_QUERY_KEY,
      });
    },
  });

  return { createUser: mutateAsync, isPending };
}
