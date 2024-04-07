import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const CategoryEditMOdal = ({
  opener,
  handleClose,
  data,
}: {
  opener: boolean;
  handleClose: React.Dispatch<React.SetStateAction<boolean>>;
  data: string;
}) => {
  return (
    <div>
      <Modal
        open={opener}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography>{data}</Typography>
          <TextField placeholder="Edit category name" />
          <Button>Save</Button>
          <Button>Delete Category</Button>
        </Box>
      </Modal>
    </div>
  );
};

export default CategoryEditMOdal;
