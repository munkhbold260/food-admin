import { Button, Stack, TextField, Typography } from "@mui/material";
import { Dispatch, SetStateAction, useState } from "react";

type FoodType = {
  category: string;
  foodname: string;
  price: number;
  imagePath: string;
  ingredients: string[];
  stock: number;
  sale: number;
};
const CardFoodAddModal = ({
  data,
  setData,
}: {
  data: FoodType;
  setData: Dispatch<SetStateAction<FoodType>>;
}) => {
  const [foodName, setFoodName] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [price, setPrice] = useState<number | any>();
  // const [imagePath, setImagePath] = useState<number>(0);
  const [ingredients, setIngredients] = useState<[string]>();
  // const [stock, setStock] = useState<number>();
  const [sale, setSale] = useState<number | any>();

  const handleClick = () => {
    console.log(foodName, category, price, ingredients, sale);
  };

  return (
    <Stack>
      <Stack>
        <Stack>
          <Stack sx={{ width: "384px" }}>
            <Typography>Хоолны нэр</Typography>
            <TextField
              onChange={(e) => {
                setFoodName(e.target.value);
              }}
              name="name"
              placeholder="Нэрээ оруулна уу"
              variant="outlined"
              required
            />
          </Stack>
          <Stack sx={{ width: "384px" }}>
            <Typography>Хоолны ангилал </Typography>
            <TextField
              onChange={(e) => {
                setCategory(e.target.value);
              }}
              name="category"
              placeholder="Хоолны ангилал оруулна уу"
              variant="outlined"
              required
            />
          </Stack>
          <Stack sx={{ width: "384px" }}>
            <Typography>Хоолны орц </Typography>
            <TextField
              onChange={(e) => {
                setIngredients([e.target.value]);
              }}
              name="ingredients"
              placeholder="Хоолны орц оруулна уу"
              variant="outlined"
              required
            />
          </Stack>
          <Stack sx={{ width: "384px" }}>
            <Typography>Хоолны үнэ </Typography>
            <TextField
              onChange={(e) => {
                setPrice(e.target.value);
              }}
              name="price"
              placeholder="Хоолны үнэ оруулна уу"
              variant="outlined"
              required
            />
          </Stack>
          <Stack sx={{ width: "384px" }}>
            <Typography>Хямдрал </Typography>
            <TextField
              onChange={(e) => {
                setSale(e.target.value);
              }}
              name="sale"
              placeholder="Хямдрал оруулна уу"
              variant="outlined"
              required
            />
          </Stack>
          <Button onClick={handleClick}>+</Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default CardFoodAddModal;
