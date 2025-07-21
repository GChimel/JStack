import { Button } from "@/components/ui/button";
import { useState } from "react";

export function State() {
  const [counter, setCounter] = useState<number>(0);

  const [user, setUser] = useState(() => {
    const cache = localStorage.getItem("user");

    if (!cache) {
      return null;
    }

    return JSON.parse(cache);
  });

  console.log(user, setUser);

  return (
    <div>
      <h1>Counter {counter}</h1>
      <div className="space-x-2">
        <Button onClick={() => setCounter((prevState) => prevState - 1)}>
          -
        </Button>
        <Button onClick={() => setCounter((prevState) => prevState + 1)}>
          +
        </Button>
      </div>
    </div>
  );
}
