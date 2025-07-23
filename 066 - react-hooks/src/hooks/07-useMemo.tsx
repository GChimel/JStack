import { Button } from "@/components/ui/button";
import { useMemo, useState } from "react";

export function Memo() {
  const [counter, setCounter] = useState<number>(0);
  const [date, setDate] = useState<Date>(new Date());

  const memorizedValue = useMemo(() => {
    function formatDate() {
      console.log("executou");
      const day = date.getDate();
      const month = date.getMonth();
      const year = date.getFullYear();

      return `${day}/${month}/${year}`;
    }

    return formatDate();
  }, [date]);

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
      <small>{memorizedValue}</small>
      <div className="space-x-2">
        <Button onClick={handleMinus}>-</Button>
        <Button onClick={handlePlus}>+</Button>
        <Button onClick={hanldeReset}>Reset</Button>
        <Button onClick={() => setDate(new Date())}>Update date</Button>
      </div>
    </div>
  );
}
