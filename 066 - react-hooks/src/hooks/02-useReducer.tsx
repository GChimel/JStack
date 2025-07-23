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
  switch (action.type) {
    case "changeUser":
      return {
        isUnderage: false,
        user: {
          id: Date.now(),
          name: "Jhon Doe",
          age: 57,
        },
      };
    case "refreshAge":
      return {
        isUnderage: false,
        user: {
          ...prevState.user,
          age: action.payload.age,
        },
      };

    default:
      return prevState;
  }
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
