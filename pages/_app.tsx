import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layouts/Layout";
import { Provider } from "react-redux";
import { CookiesProvider } from "react-cookie";
import { wrapper } from "../store/store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CookiesProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CookiesProvider>
  );
}

export default wrapper.withRedux(MyApp);
