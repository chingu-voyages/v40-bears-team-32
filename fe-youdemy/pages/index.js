import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useContext } from "react";
import Navbar from "../components/navbar/Navbar.js";
import TextImage from "../components/TextImage.js";

export default function Home() {
  const content = {
    title: "Are you an online educator?",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  };

  return (
    <>
      <div className="center">
        <h2>Home Page</h2>
      </div>
      <TextImage content={content} />
    </>
  );
}
