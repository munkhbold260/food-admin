import { Button, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import CardFood from "./card/CardFood";
import FoodAddModal from "./card/FoodAddModal";

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

const Foods = ({ cat }: { cat: string }) => {
  const [dummy, setDummy] = useState<DataType[] | null>(null);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
    <Stack>
      <Stack width={"100%"} justifyContent={"space-between"}>
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Typography>{cat}</Typography>
          <Button onClick={handleOpen}>add new food</Button>
          <FoodAddModal handleClose={handleClose} opener={open} />
        </Stack>
      </Stack>
      <Stack width={"894px"} direction={"row"} flexWrap={"wrap"} gap={"24px"}>
        {dummy
          ?.filter((b) => b.category == cat)
          .map((a, id) => {
            return (
              <Stack key={id}>
                <CardFood data={a} />
              </Stack>
            );
          })}
      </Stack>
    </Stack>
  );
};

export default Foods;
