import { Stack } from "@mui/material";
import { useEffect, useState } from "react";
import CardFood from "./card/CardFood";

type DataType = {
  id: number;
  category: string;
  foodName: string;
  price: number;
  imagePath: string;
  ingredients: string[];
  stock: number;
  sale: number;
};

const Food = () => {
  const [dummy, setDummy] = useState<DataType[] | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("./dummy.json");
        const data = await response.json();
        setDummy(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <Stack width={"894px"}>
      <Stack
        width={"100%"}
        direction={"row"}
        justifyContent={"space-between"}
      ></Stack>
      {dummy?.map((a, id) => {
        return (
          <Stack key={id}>
            <CardFood data={a} />
          </Stack>
        );
      })}
    </Stack>
  );
};

export default Food;
