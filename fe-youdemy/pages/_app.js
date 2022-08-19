import "../styles/globals.css";
import DrawerAppBar from "../components/navbar/DrawerAppBar.js";
import Footer from "../components/footer/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <DrawerAppBar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
