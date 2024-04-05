import { Stack } from "@mui/material";

type DataType = string;

const FoodCategory = ({ data }: { data: DataType }) => {
  return <Stack>{data}</Stack>;
};

export default FoodCategory;
