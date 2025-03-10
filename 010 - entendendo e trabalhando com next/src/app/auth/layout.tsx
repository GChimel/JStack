export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-10 h-screen">
      <div className="w-1/2 flex items-center justify-center">
        <h1>Form</h1>
      </div>

      <div className="w-1/2 flex items-center justify-center bg-blue-500 text-white">
        {children}
      </div>
    </div>
  );
}
