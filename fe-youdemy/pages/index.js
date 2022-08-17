import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useContext } from "react";
import TextImage from "../components/TextImage.js";

export default function Home() {
  const content = {
    title: "Are you an online educator?",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    subTitle: "sub title for you",
    subDescription:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    imageUrl:
      "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
    imageAltText: "Volkswagen",
  };

  const styles = {
    card: {
      background: "#dddddd",
      display: "flex",
      flexDirection: "row",
      width: 900,
      margin: "0 auto",
    },
    box: {
      display: "flex",
      flexDirection: "column",
    },
    cardContent: {
      flex: "1 0 auto",
    },
    cardMedia: {
      width: 350,
    },
    cardTitle: {
      fontSize: 30,
    },
    subTitle: {
      fontSize: 40,
    },
    subDescription: {
      // color: "green",
    },
    media: {
      width: "50%",
    },
  };

  return (
    <>
      <div className="center">
        <h2>Home Page</h2>
      </div>
      <TextImage content={content} styles={styles} />
      <TextImage content={content} styles={styles} />
    </>
  );
}
