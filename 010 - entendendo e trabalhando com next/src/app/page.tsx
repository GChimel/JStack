import { Checkout } from "./checkout";
import { ListCars } from "./listCars";

export default function Home() {
  return (
    // Using server component as children of client component
    <div>
      <h1>Home</h1>
      <Checkout cars={<ListCars />} />
    </div>
  );
}
