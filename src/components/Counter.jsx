import React from "react";
import { useCounter } from "../store/useCounter";

const Counter = () => {
  const state = useCounter((state) => state);
  const { count, handleAdd, handleMinus, handleReset } = state;

  return (
    <div>
      <h1>Counter {count}</h1>

      <button onClick={handleAdd}>Add</button>
      <button onClick={handleMinus}>Minus</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Counter;
