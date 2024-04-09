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
  const cat_url = "http://localhost:4000/api/category";

  const [cat, setCat] = React.useState("");

  const handleDelete = async (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();

    const categoryData = {
      name: cat,
    };

    const options = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(categoryData),
    };

    console.log("body====", JSON.stringify(categoryData));

    const fetched_data = await fetch(cat_url, options);
    const fetched_json = await fetched_data.json();

    if (fetched_json.message == "Successfully user created") {
      console.log("category added");

      alert("already email");
    }
    location.reload();
    handleClose(false);
  };

  const handleUpdate = async (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();

    const categoryData = {
      name: cat,
    };

    const options = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(categoryData),
    };

    const fetched_data = await fetch(cat_url, options);
    const fetched_json = await fetched_data.json();

    if (fetched_json.message == "Successfully user created") {
      console.log("category added");
    } else {
      alert("already email");
    }
  };

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
          <TextField
            onChange={(e) => {
              setCat(e.target.value);
            }}
            placeholder="Edit category name"
          />
          <Button
            onClick={(event: React.MouseEvent<HTMLElement>) =>
              handleUpdate(event)
            }
          >
            Save
          </Button>
          <Button
            onClick={(event: React.MouseEvent<HTMLElement>) =>
              handleDelete(event)
            }
          >
            Delete Category
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default CategoryEditMOdal;
