import { Button } from "@/components/ui/button";
import { useRef, useState } from "react";

export function Ref() {
  const [_state, setState] = useState<boolean>(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const valor = useRef("inicial");

  function handleSubmit() {
    console.log(inputRef.current?.value);
    valor.current = "novo valor";
  }

  console.log("valor", valor);

  return (
    <div>
      <div className="space-x-2">
        <input type="text" ref={inputRef} />

        <Button onClick={handleSubmit}>Enviar</Button>
        <Button onClick={() => setState((prevState) => !prevState)}>
          Atualizar estado
        </Button>
      </div>
    </div>
  );
}
