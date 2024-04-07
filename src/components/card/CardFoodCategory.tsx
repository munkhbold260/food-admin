import { Button, Stack } from "@mui/material";
import ThreeDot from "../icons/ThreeDot";
import CategoryEditMOdal from "./CategoryEditModal";
import React from "react";

type DataType = string;

const FoodCategory = ({ data }: { data: DataType }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Stack
      borderRadius={"16px"}
      borderColor={"gray"}
      direction={"row"}
      width={"256px"}
      height={"40px"}
    >
      <Button fullWidth>{data}</Button>
      <Button onClick={handleOpen}>
        <ThreeDot />
      </Button>
      <CategoryEditMOdal handleClose={handleClose} opener={open} data={data} />
    </Stack>
  );
};

export default FoodCategory;
