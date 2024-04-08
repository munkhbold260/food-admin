import {
  Button,
  Container,
  FormControl,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

export const StepOne = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const data = {
      email: form.get("email"),
    };
    console.log("data", data);
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
        <Typography variant="h5">Нууц үг сэргээх</Typography>
        <FormControl sx={{ width: "384px" }}>
          <Typography>Имэйл </Typography>
          <TextField
            name="email"
            id="outlined-basic"
            placeholder="Имэйл хаягаа оруулна уу"
            variant="outlined"
          />
        </FormControl>
        <Button type="submit" variant="outlined">
          Үргэлжлүүлэх
        </Button>
      </Stack>
    </Container>
  );
};
