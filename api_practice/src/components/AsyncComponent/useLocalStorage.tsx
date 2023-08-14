// /* eslint-disable @typescript-eslint/no-unsafe-assignment */
// import { useState } from "react";

// function useLocalStorage<T>(key: string, initialValue: T) {
//   const storedValue = localStorage.getItem(key);
//   const initial = storedValue ? JSON.parse(storedValue) : initialValue;

//   // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
//   const [value, setValue] = useState<T>(initial);

//   const setStoredValue = (newValue: T) => {
//     localStorage.setItem(key, JSON.stringify(newValue));
//     setValue(newValue);
//   };

//   return [value, setStoredValue] as const;
// }
