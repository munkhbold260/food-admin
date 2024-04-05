import React, { useContext, createContext } from "react";

const CategoryContext = createContext();
export const UseCategory = () => {
  return useContext(CategoryContext);
};

const NumberProvider = ({ children }) => {
  return (
    <CategoryContext.Provider value={{}}>{children}</CategoryContext.Provider>
  );
};

export default NumberProvider;
