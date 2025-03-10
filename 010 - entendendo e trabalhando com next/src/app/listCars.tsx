async function getCars() {
  await new Promise((resolve) => setTimeout(resolve, 1500));

  return [
    { id: 1, name: "BMW" },
    { id: 2, name: "Audi" },
    { id: 3, name: "Mercedes" },
  ];
}

export async function ListCars() {
  const cars = await getCars();

  return (
    <ul>
      {cars.map((car) => (
        <li key={car.id}>{car.name}</li>
      ))}
    </ul>
  );
}
