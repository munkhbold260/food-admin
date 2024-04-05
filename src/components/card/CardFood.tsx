import { CardActionArea, CardMedia, Stack, Typography } from "@mui/material";
import React from "react";
import CardModal from "./CardModal";

type dataType = {
  id: number;
  category: string;
  foodName: string;
  price: number;
  imagePath: string;
  ingredients: Array<string>;
  stock: number;
  sale: number;
};

const CardFood = ({ data }: { data: dataType }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // console.log("daaataaa", data);
  return (
    <Stack width={"256px"} height={"282px"}>
      <CardActionArea onClick={handleOpen}>
        <Stack position={"relative"}>
          <CardMedia
            sx={{ borderRadius: "16px" }}
            component="img"
            height="186"
            image={data.imagePath}
          />
        </Stack>
        <Stack>
          <Typography>{data.foodName}</Typography>
          <Stack gap={"20px"} direction="row">
            <Typography>
              {data.price - (data.price / 100) * data.sale}₮
            </Typography>
            <Typography color={"#18B951"}>{data.price}₮</Typography>
            <Stack>{data.sale}%</Stack>
          </Stack>

          <Typography>{data.category}</Typography>
        </Stack>
      </CardActionArea>
      <CardModal handleClose={handleClose} opener={open} data={data} />
    </Stack>
  );
};

export default CardFood;

10000 - (10000 / 100) * 25;
