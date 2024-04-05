import { Stack } from "@mui/material";
import FoodCategory from "./FoodCategory";
import { useEffect, useState } from "react";

type CategoryType = [string];

const FoodMenu = () => {
  const [dummyCategories, setDummyCategories] = useState<CategoryType | null>(
    null
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("./dummyCategory.json");
        const categories = await response.json();
        setDummyCategories(categories);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <Stack width={"402px"} gap={"40px"}>
      <Stack> Food menu</Stack>
      <Stack gap={"26px"}>
        {dummyCategories?.map((a, id) => {
          return <FoodCategory key={id} data={a} />;
        })}
      </Stack>
    </Stack>
  );
};

export default FoodMenu;
