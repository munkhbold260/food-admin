import { Button, Modal, Stack, Typography } from "@mui/material";

import { Dispatch, SetStateAction, useState } from "react";
import CardFoodAddModal from "./CardFoodAddModal";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  outerHeight: "500px",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const FoodAddModal = ({
  opener,
  handleClose,
}: {
  opener: boolean;
  handleClose: Dispatch<SetStateAction<boolean>>;
}) => {
  type FoodType = {
    category: string;
    foodname: string;
    price: number;
    imagePath: string;
    ingredients: string[];
    stock: number;
    sale: number;
  };
  const [data, setData] = useState<FoodType[]>([]);
  async function handleContinue() {
    console.log(data);
    // const signup_url = "http://localhost:4000/api/food";
    // const foodData = {
    //   category: data.get("category"),
    //   foodName: data.get("name"),
    //   price: data.get("price"),
    //   ingredients: data.get("ingredients"),
    //   imagePath: "",
    //   stock: null,
    //   sale: data.get("sale"),
    // };
    // console.log(foodData);
    // const options = {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(foodData),
    // };
    // const fetched_data = await fetch(signup_url, options);
    // const fetched_json = await fetched_data.json();
    // if (fetched_json.message == "Successfully user created") {
    //   handleClose(false);
    // } else {
    //   alert("alrady email");
    // }
  }
  return (
    <Modal
      open={opener}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Stack borderRadius={"20px"} width={"590px"} height={"770px"} sx={style}>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Button
            onClick={() => {
              handleClose(false);
            }}
          >
            <Typography variant="h6" fontWeight={"800"} color={"black"}>
              X
            </Typography>
          </Button>
          <Typography variant="h5" fontWeight={"800"}>
            Create food
          </Typography>
          <Typography></Typography>
        </Stack>
        <CardFoodAddModal data={data} setData={setData} />
        <Stack direction={"row"} justifyContent={"end"}>
          <Button onClick={handleContinue} variant="outlined">
            Continue
          </Button>
          <Button>clear</Button>
        </Stack>
      </Stack>
    </Modal>
  );
};

export default FoodAddModal;
