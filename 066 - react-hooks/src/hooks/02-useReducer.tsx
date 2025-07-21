import { Button } from "@/components/ui/button";
import { useReducer } from "react";

type State = {
  user: {
    id: number;
    name: string;
    age: number;
  };
  isUnderage: boolean;
};

type Action =
  | { type: "changeUser" }
  | { type: "refreshAge"; payload: { age: number } };

function reducer(prevState: State, action: Action) {
  if (action.type === "changeUser") {
    const age = 57;

    return {
      isUnderage: age < 18,
      user: {
        id: Date.now(),
        name: "Jhon Doe",
        age,
      },
    };
  }

  if (action.type === "refreshAge") {
    const age = action.payload.age;
    return {
      isUnderage: age < 18,
      user: {
        ...prevState.user,
        age,
      },
    };
  }

  throw new Error("Invalid action");
}

export function Reducer() {
  const [state, dispatch] = useReducer(reducer, {
    user: {
      id: Date.now(),
      age: 10,
      name: "Jhon",
    },
    isUnderage: false,
  });

  function handleChangeUser() {
    dispatch({ type: "changeUser" });
  }

  function handleRefreshAge() {
    dispatch({ type: "refreshAge", payload: { age: 17 } });
  }

  return (
    <div>
      <h1>Age: {state.user.age}</h1>
      <h1>Is underage: {state.isUnderage ? "Yes" : "No"}</h1>

      <div className="space-x-2">
        <Button onClick={handleChangeUser}>-</Button>
        <Button onClick={handleRefreshAge}>+</Button>
      </div>
    </div>
  );
}
