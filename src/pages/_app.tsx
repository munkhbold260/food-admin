import Layout from "@/components/Layout";
import NumberProvider from "@/context/NumChangeContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <NumberProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </NumberProvider>
  );
};

export default App;
