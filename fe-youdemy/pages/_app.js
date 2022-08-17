<<<<<<< HEAD
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
=======
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
>>>>>>> 09a0cac02eca0052d9c0e56355ab9d9ba63aea86
}

export default MyApp
