import { Button, Stack } from "@mui/material";
import FoodCategory from "./card/CardFoodCategory";
import React, { useEffect, useState } from "react";
import CategoryAddModal from "./card/CategoryAddModal";

type CategoryType = [string];

const FoodMenu = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
      <Button onClick={handleOpen}>+ Create new category</Button>
      <CategoryAddModal handleClose={handleClose} opener={open} />
    </Stack>
  );
};

export default FoodMenu;
