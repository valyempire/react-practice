/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const PracticeContext = createContext(null);

export const PracticeContextProvider = (props) => {
  const [counter, setCounter] = useState(0);

  const increaseCounter = () => {
    setCounter((prevState) => prevState + 1);
  };
  const decreaseCounter = () => {
    setCounter((prevState) => prevState + 1);
  };

  const contextValue = {
    counter,
    increaseCounter,
    decreaseCounter,
  };

  return (
    <PracticeContext.Provider value={contextValue}>
      {props.children}
    </PracticeContext.Provider>
  );
};
