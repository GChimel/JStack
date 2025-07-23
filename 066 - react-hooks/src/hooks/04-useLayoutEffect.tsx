import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export function LayoutEffect() {
  const [counter, setCounter] = useState<number>(0);

  useEffect(() => {
    console.log("executou");
  }, []);

  function handlePlus() {
    setCounter((prevState) => prevState + 1);
  }

  function handleMinus() {
    setCounter((prevState) => prevState - 1);
  }

  function hanldeReset() {
    setCounter(0);
  }

  return (
    <div>
      <h1>Counter {counter}</h1>
      <div className="space-x-2">
        <Button onClick={handleMinus}>-</Button>
        <Button onClick={handlePlus}>+</Button>
        <Button onClick={hanldeReset}>Reset</Button>
      </div>
    </div>
  );
}
