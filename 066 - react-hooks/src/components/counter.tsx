import React from "react";
import { Button } from "./ui/button";

interface IProps {
  title: string;
}

interface IState {
  counter: number;
  isLoading: boolean;
}

export class Counter extends React.Component<IProps, IState> {
  state: Readonly<IState> = {
    counter: 0,
    isLoading: false,
  };

  handleChangeCounter(value: 1 | -1) {
    this.setState({
      counter: this.state.counter + value,
    });
  }

  // livecycle
  async componentDidMount(): Promise<void> {
    this.setState({
      isLoading: true,
    });

    await new Promise((resolve) => setTimeout(resolve, 2000));

    this.setState({
      isLoading: false,
    });
  }

  render(): React.ReactNode {
    return (
      <div>
        {this.state.isLoading && <h1>Loading...</h1>}

        <h1>Valor atual: ... {this.state.counter}</h1>

        <div className="space-x-2">
          <Button onClick={() => this.handleChangeCounter(1)}>+</Button>
          <Button onClick={() => this.handleChangeCounter(-1)}>-</Button>
        </div>
      </div>
    );
  }
}
