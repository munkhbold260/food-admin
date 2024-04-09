import {
  Box,
  Button,
  Modal,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Dispatch, SetStateAction, useState } from "react";

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
}: {
  opener: boolean;
  handleClose: Dispatch<SetStateAction<boolean>>;
}) => {
  const cat_add_url = "http://localhost:4000/api/category";

  const [newCat, setNewCat] = useState();

  const handleCreateCategory = async (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();

    const userData = {
      name: newCat,
    };

    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    };

    console.log("body====", JSON.stringify(userData));

    const fetched_data = await fetch(cat_add_url, options);
    const fetched_json = await fetched_data.json();
    console.log(fetched_json);
    if (fetched_json.message == "Successfully user created") {
    }
    handleClose(false);
    location.reload();
    // else {
    // alert("already email");
    // }
  };

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
        <TextField
          onChange={(e: any) => {
            setNewCat(e.target.value);
          }}
          placeholder="category name"
          fullWidth
          type="text"
        />
        <Stack direction={"row"} justifyContent={"end"}>
          <Button
            onClick={(event: React.MouseEvent<HTMLElement>) =>
              handleCreateCategory(event)
            }
          >
            Add Category
          </Button>
        </Stack>
      </Box>
    </Modal>
  );
};

export default CategoryAddModal;
