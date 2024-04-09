import { Button, Stack } from "@mui/material";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import CategoryAddModal from "./card/CategoryAddModal";
import CardFoodCategory from "./card/CardFoodCategory";
import { UseNumber } from "@/context/NumChangeContext";
// import { ContextType } from "@/context/NumChangeContext";

type CategoryType = { _id: string; name: string; __v: string };
// type TypeCount = number;

const FoodMenu = ({ setCat }: { setCat: Dispatch<SetStateAction<string>> }) => {
  const { count } = UseNumber();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
  console.log("food menu dummy ", dummyCategories);
  return (
    <Stack width={"402px"} gap={"40px"}>
      <Stack> Food menu</Stack>
      <Stack gap={"26px"}>
        {dummyCategories?.map((a, id) => {
          return <CardFoodCategory key={id} data={a.name} setCat={setCat} />;
        })}
      </Stack>
      <Stack>{count}</Stack>
      <Button onClick={handleOpen}>+ Create new category</Button>
      <CategoryAddModal handleClose={handleClose} opener={open} />
    </Stack>
  );
};

export default FoodMenu;
