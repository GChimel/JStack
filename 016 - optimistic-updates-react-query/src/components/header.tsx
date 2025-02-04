import { ThemeSwitcher } from "./themeSwitcher";

export function Header() {
  return (
    <header className="flex justify-between items-center">
      <div>
        <h1 className="font-bold text-3xl -tracking-wider">TheUsers</h1>
        <small className="text-muted-foreground">
          Gerencia os seus usuários.
        </small>
      </div>

      <ThemeSwitcher />
    </header>
  );
}
