import { useContext, createContext, useState, useEffect } from "react";






type CategoryType = { _id: string; name: string; __v: string };


  
const CategoryProvider = ({ children }) => {
    const CategoryContext = createContext();
    const [dummyCategories, setDummyCategories] = useState<CategoryType[]>([]);
  
useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/category", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });
        const categories = await response.json();
        setDummyCategories(categories.categories);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
    }
  const fetchedCategories = [];
  const [categories, setCategories] = useState(fetchedCategories);
  return (
    <CategoryContext.Provider value={{ categories, setCategories }}>
      {children}
    </CategoryContext.Provider>
  );
};

export default CategoryProvider;
