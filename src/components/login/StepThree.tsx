import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Button,
  Container,
  FormControl,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";

export const StepThree = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const data = {
      password: form.get("password"),
    };
    if (form.get("password") == form.get("rePassword")) {
      console.log("data", data);
    } else {
      alert("password different");
    }
  };

  return (
    <Container>
      <Stack
        component="form"
        onSubmit={handleSubmit}
        paddingY={"110px"}
        margin={"auto"}
        maxWidth={"384px"}
        gap={"16px"}
      >
        <Typography variant="h5">Шинэ нууц үг зохиох </Typography>
        <FormControl sx={{ m: 0, width: "100%" }} variant="outlined">
          <Typography>Нууц үг </Typography>
          <OutlinedInput
            required
            name="password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            placeholder="password"
          />
        </FormControl>
        <FormControl sx={{ m: 0, width: "100%" }} variant="outlined">
          <Typography>Нууц үг </Typography>
          <OutlinedInput
            required
            name="rePassword"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            placeholder="password"
          />
        </FormControl>
        <Button type="submit" variant="outlined">
          Үргэлжлүүлэх
        </Button>
      </Stack>
    </Container>
  );
};
