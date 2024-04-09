import React, { useContext, createContext, useState, ReactNode } from "react";

export type ContextType = {
  count: number;
  setCount: (_count: number) => void;
};
const NumberContext = createContext<ContextType | null>(null);

export const UseNumber = () => {
  return useContext(NumberContext);
};

const NumberProvider = ({ children }: { children: ReactNode }) => {
  const [count, setCount] = useState<number>(33);
  return (
    <NumberContext.Provider value={{ count, setCount }}>
      {children}
    </NumberContext.Provider>
  );
};

export default NumberProvider;
