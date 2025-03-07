import { updateUser } from "@/services/updateUser";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { USERS_QUERY_KEY } from "./useUsers";

export function useUpdateUser() {
  const queryClient = useQueryClient();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: updateUser,
    onSuccess: () => {
      // Invalida a query do users
      queryClient.invalidateQueries({
        queryKey: USERS_QUERY_KEY,
      });
    },
  });

  return { updateUser: mutateAsync, isPending };
}
