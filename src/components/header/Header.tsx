import { Container, Link, Stack } from "@mui/material";
import { TextField, Typography, useTheme } from "@mui/material";
import { HeadaerLogin, HeaderLogo, HeaderSags, HeaderSearch } from ".";

import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";

type Anchor = "right";

type CartFood = Array<{ foodId: number }>;

const Header = () => {
  const theme = useTheme();
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: "586px" }}
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    ></Box>
  );

  return (
    <Stack sx={{ bgcolor: theme.palette.primary.light }}>
      <Container maxWidth={"lg"}>
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Stack direction={"row"} gap={"8px"} alignItems={"center"}>
            <HeaderLogo />
            <Link href="./" underline="none" sx={{ color: "black" }}>
              <Typography color={"black"} fontFamily={"SF Pro Text"}>
                НҮҮР
              </Typography>
            </Link>
            <Link href="./food-menu" px={"16px"} underline="none">
              <Typography color={"black"} variant="subtitle2">
                ХООЛНЫ ЦЭС
              </Typography>
            </Link>
            <Link href="/delivery-area" px={"16px"} underline="none">
              <Typography color={"black"}> ХҮРГЭЛТИЙН БҮС</Typography>
            </Link>
          </Stack>
          <Stack gap={4} direction={"row"} alignItems={"center"}>
            <Stack direction={"row"} alignItems={"center"}>
              <HeaderSearch />
              <TextField size="small" color="primary" placeholder="Search" />
            </Stack>
            <Stack gap={"8px"} direction={"row"} alignItems={"center"}>
              <HeaderSags />
              <React.Fragment>
                <Typography onClick={toggleDrawer("right", true)}>
                  Сагс
                </Typography>
                <Typography></Typography>
                <Drawer
                  anchor={"right"}
                  open={state["right"]}
                  onClose={toggleDrawer("right", false)}
                >
                  {list("right")}
                </Drawer>
              </React.Fragment>
            </Stack>
            <Stack gap={"8px"} direction={"row"} alignItems={"center"}>
              <HeadaerLogin />
              <Link href="/login" underline="none">
                <Typography color={"black"} fontFamily={"sf pro text"}>
                  Нэвтрэх
                </Typography>
              </Link>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
};

export default Header;
