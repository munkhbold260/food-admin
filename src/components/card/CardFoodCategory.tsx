import { Button, Stack } from "@mui/material";
import ThreeDot from "../icons/ThreeDot";
import CategoryEditMOdal from "./CategoryEditModal";
import React, { Dispatch, SetStateAction } from "react";
import { CategoryType } from "@/context/CategoryContext";

const CardFoodCategory = ({
  data,
  setCat,
}: {
  data: CategoryType;
  setCat: Dispatch<SetStateAction<string>>;
}) => {
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
      <Button
        onClick={() => {
          setCat(data.name);
        }}
        fullWidth
      >
        {data.name}
      </Button>
      <Button onClick={handleOpen}>
        <ThreeDot />
      </Button>
      <CategoryEditMOdal handleClose={handleClose} opener={open} data={data} />
    </Stack>
  );
};

export default CardFoodCategory;
