import { Visibility, VisibilityOff } from "@mui/icons-material";

import {
  Button,
  Container,
  FormControl,
  IconButton,
  InputAdornment,
  Link,
  OutlinedInput,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";

export const Login = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const login = {
      email: form.get("email"),
      password: form.get("password"),
    };
    console.log("data", login);
    const res = await fetch("http://localhost:4000/api/login", {
      body: JSON.stringify(login),
      method: "POST",
      mode: "cors",
      headers: {
        Accept: "application.json",
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    if (data.token) {
      localStorage.setItem("userToken", data.token);
      console.log(data.token);
      router.push("/upload");
    } else {
      alert("wrong email or password");
    }
  };

  return (
    <Container>
      <Stack
        paddingY={"110px"}
        component="form"
        onSubmit={handleSubmit}
        margin={"auto"}
        maxWidth={"384px"}
        gap={"16px"}
      >
        <FormControl sx={{ width: "384px" }}>
          <Typography>Имэйл </Typography>
          <TextField
            required
            name="email"
            id="outlined-basic"
            placeholder="Имэйл хаягаа оруулна уу"
            variant="outlined"
          />
        </FormControl>
        <FormControl sx={{ m: 0, width: "100%" }} variant="outlined">
          <Typography>Нууц үг </Typography>
          <OutlinedInput
            required
            name="password"
            id="outlined-adornment-password"
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
        <Link underline="none" href="/forgot-pass">
          <Typography textAlign={"end"} color={"black"}>
            Нууц үг сэргээх
          </Typography>
        </Link>

        <Button type="submit" variant="outlined">
          Нэвтрэх
        </Button>
        <Typography>Эсвэл</Typography>
        <Button href="/sign-up" variant="outlined">
          Бүртгүүлэх
        </Button>
      </Stack>
    </Container>
  );
};
