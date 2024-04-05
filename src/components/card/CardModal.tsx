import { Button, Modal, Stack, Typography } from "@mui/material";

import { Dispatch, SetStateAction } from "react";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "917px",
  outerHeight: "500px",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

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

const CardModal = ({
  opener,
  handleClose,
  data,
}: {
  opener: boolean;
  handleClose: Dispatch<SetStateAction<boolean>>;
  data: dataType;
}) => {
  const handlePush = () => {
    handleClose(false);
  };

  return (
    <Modal
      open={opener}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Stack sx={style}>
        {" "}
        <Button
          onClick={() => {
            handleClose(false);
          }}
        >
          x
        </Button>
        <Typography>{data.price - (data.price / 100) * data.sale} ₮</Typography>
        <Button onClick={handlePush}>Сагслах</Button>
      </Stack>
    </Modal>
  );
};

export default CardModal;
