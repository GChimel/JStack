import { Button } from "@/components/ui/button";
import { Input, type InputRef } from "@/components/ui/input";
import { useRef } from "react";

export function ImperativeHandle() {
  const inputRef = useRef<InputRef>(null);

  function handleSubmit() {
    console.log(inputRef.current?.getValue());
  }

  return (
    <div>
      <div className="space-x-2">
        <Input type="text" ref={inputRef} />

        <Button onClick={handleSubmit}>Enviar</Button>
      </div>
    </div>
  );
}
