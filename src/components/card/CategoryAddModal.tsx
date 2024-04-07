import {
  Box,
  Button,
  Modal,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Dispatch, SetStateAction } from "react";

// type dataType = {
//   name: string;
// };

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

const CategoryAddModal = ({
  opener,
  handleClose,
}: //   data,
{
  opener: boolean;
  handleClose: Dispatch<SetStateAction<boolean>>;
  //   data: dataType;
}) => {
  //   const handleClose = () => setOpen(false);

  return (
    <Modal
      open={opener}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Stack direction={"row"}>
          <Button
            onClick={() => {
              handleClose(false);
            }}
          >
            x
          </Button>

          <Typography id="modal-modal-title" variant="h5" component="h2">
            Category new category
          </Typography>
        </Stack>
        <TextField placeholder="category name" fullWidth />
        <Stack direction={"row"} justifyContent={"end"}>
          <Button> Clear</Button>
          <Button>Continue</Button>
        </Stack>
      </Box>
    </Modal>
  );
};

export default CategoryAddModal;
