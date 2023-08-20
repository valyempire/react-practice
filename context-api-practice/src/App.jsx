import { Counter } from "./components/Counter";
import { PracticeContextProvider } from "./Context/PracticeContext";

export const App = () => {
  return (
    <PracticeContextProvider>
      <Counter />
    </PracticeContextProvider>
  );
};
