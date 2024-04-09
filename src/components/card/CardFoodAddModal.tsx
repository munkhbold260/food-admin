import { Stack, TextField, Typography } from "@mui/material";
import { Dispatch, SetStateAction } from "react";

const CardFoodAddModal = ({
  data,
  setData,
}: {
  data: string;
  setData: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <Stack>
      <Stack>
        <Stack>
          <Stack sx={{ width: "384px" }}>
            <Typography>Хоолны нэр {data}</Typography>
            <TextField
              onChange={(e) => {
                setData(e.target.value);
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
              name="category"
              placeholder="Хоолны ангилал оруулна уу"
              variant="outlined"
              required
            />
          </Stack>
          <Stack sx={{ width: "384px" }}>
            <Typography>Хоолны орц </Typography>
            <TextField
              name="ingredients"
              placeholder="Хоолны орц оруулна уу"
              variant="outlined"
              required
            />
          </Stack>
          <Stack sx={{ width: "384px" }}>
            <Typography>Хоолны үнэ </Typography>
            <TextField
              name="price"
              placeholder="Хоолны үнэ оруулна уу"
              variant="outlined"
              required
            />
          </Stack>
          <Stack sx={{ width: "384px" }}>
            <Typography>Хямдрал </Typography>
            <TextField
              name="sale"
              placeholder="Хямдрал оруулна уу"
              variant="outlined"
              required
            />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default CardFoodAddModal;
