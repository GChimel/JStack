import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Posts } from "./Posts";
import { Users } from "./Users";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5000, // Tempo de expiracao da query
      gcTime: 10000, // Tempo de expiracao do cache
      refetchOnWindowFocus: false, // Refetch quando a janela perder o foco
      //  refetchInterval: 5000, // Refetch a cada 5s
      retry: 1, // Tenta refetch 1 vez - (por padrão é 3 vezes)
      retryDelay: 1000, // Espera 1s entre as tentativas (por padrão é exponencial)
    },
  },
});

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ul>
          <li>
            <Link to="/">Users</Link>
          </li>
          <li>
            <Link to="/posts">Posts</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/posts" element={<Posts />} />
        </Routes>
        <ReactQueryDevtools />
      </BrowserRouter>
    </QueryClientProvider>
  );
}
