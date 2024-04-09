import Layout from "@/components/Layout";
import CategoryProvider from "@/context/CategoryContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <CategoryProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CategoryProvider>
  );
};

export default App;
