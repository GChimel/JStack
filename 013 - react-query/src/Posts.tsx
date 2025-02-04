import { useQueryClient } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { IUser } from "./Users";
import { Sleep } from "./utils/sleep";

export function Posts() {
  const queryClient = useQueryClient();

  // Pre fetch
  function handleMouseEnter() {
    queryClient.prefetchQuery({
      queryKey: ["users"],
      queryFn: async (): Promise<IUser[]> => {
        await Sleep();
        const response = await fetch("http://localhost:3000/users");
        return response.json();
      },
    });
  }

  return (
    <div className="p-4">
      <Link to="/" onMouseEnter={handleMouseEnter}>
        Ir para o susuário (pre fetch)
      </Link>
    </div>
  );
}
