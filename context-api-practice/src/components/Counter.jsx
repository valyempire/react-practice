import { useContext } from "react";
import { PracticeContext } from "../Context/PracticeContext";

export const Counter = () => {
  const { counter, increaseCounter, decreaseCounter } =
    useContext(PracticeContext);

  return (
    <div>
      <button disabled={counter === 1} onClick={decreaseCounter}>
        -
      </button>
      {counter}
      <button disabled={counter === 20} onClick={increaseCounter}>
        +
      </button>
    </div>
  );
};
