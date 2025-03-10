"use client";

export function Checkout({ cars }: { cars: React.ReactNode }) {
  return (
    <>
      {cars}
      <button onClick={() => alert("Checkout")}>Checkout</button>
    </>
  );
}
