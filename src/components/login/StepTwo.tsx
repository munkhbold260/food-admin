import {
  Button,
  Container,
  FormControl,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

export const StepTwo = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const data = {
      code: form.get("code"),
    };
    console.log("code", data);
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
          <Typography>Нууц үг сэргээх код </Typography>
          <TextField
            name="code"
            id="outlined-basic"
            placeholder="Нууц үг сэргээх код оруулна уу"
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
