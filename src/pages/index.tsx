import FoodMenu from "@/components/FoodMenu";
import Foods from "@/components/Foods";
import { Stack } from "@mui/material";
import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title>Food Admin</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Stack direction={"row"} maxWidth={"1200px"} margin={"auto"}>
        <FoodMenu />
        <Foods />
      </Stack>
    </>
  );
};

export default Home;
