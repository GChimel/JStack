import { ThemeProvider } from "@/contexts/themeContext";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Header } from "./components/header";
import { Toaster } from "./components/ui/sonner";
import { UserForm } from "./components/userForm";
import { UsersList } from "./components/usersList";
import { queryClient } from "./lib/queryClient";

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <div className="max-w-[500px] mx-auto mt-10">
          <Header />

          <main className="mt-10 space-y-3">
            <UserForm />
            <UsersList />
          </main>
        </div>
        <Toaster />
      </ThemeProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
