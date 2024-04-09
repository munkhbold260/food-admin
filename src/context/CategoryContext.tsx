import React, {
  useContext,
  createContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

export type CategoryType = {
  dbCategories: { name: string; _id: string; __v: string };
  setDbCategories: React.Dispatch<React.SetStateAction<CategoryType[]>>;
};

const CategoryContext = createContext<CategoryType | null>(null);

export const UseCategory = () => {
  return useContext(CategoryContext);
};

const CategoryProvider = ({ children }: { children: ReactNode }) => {
  const [dbCategories, setDbCategories] = useState<CategoryType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/category", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });
        const categories = await response.json();
        setDbCategories(categories.categories);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  console.log("food menu dummy context ===== ", dbCategories);

  return (
    <CategoryContext.Provider value={{ dbCategories, setDbCategories }}>
      {children}
    </CategoryContext.Provider>
  );
};

export default CategoryProvider;
