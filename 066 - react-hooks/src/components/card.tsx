interface ICardProps {
  title: string;
  children: React.ReactNode;
}

export function Card({ title, children }: ICardProps) {
  return (
    <div>
      <header>{title}</header>
      <div>{children}</div>
    </div>
  );
}
