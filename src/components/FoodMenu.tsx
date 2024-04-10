import { Button, Stack } from "@mui/material";
import React, { Dispatch, SetStateAction } from "react";
import CategoryAddModal from "./card/CategoryAddModal";
import CardFoodCategory from "./card/CardFoodCategory";
import { UseCategory } from "@/context/CategoryContext";

const FoodMenu = ({ setCat }: { setCat: Dispatch<SetStateAction<string>> }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { dbCategories } = UseCategory();
  return (
    <Stack width={"402px"} gap={"40px"}>
      <Stack> Food menu</Stack>
      <Stack gap={"26px"}>
        {dbCategories?.map((a, id) => {
          return <CardFoodCategory key={id} data={a} setCat={setCat} />;
        })}
      </Stack>
      <Button onClick={handleOpen}>+ Create new category</Button>
      <CategoryAddModal handleClose={handleClose} opener={open} />
    </Stack>
  );
};

export default FoodMenu;
