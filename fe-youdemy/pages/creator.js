import React from "react";
import TextImage from "../components/TextImage.js";

const Creator = () => {
  const content = {
    name: "Miranda G",
    profileDescription:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    headline: "I've been teaching JavaScript for 10 years.",
    skills: ["JavaScript", "ReactJS", "SQL", "Ruby on Rails"],
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60",
    imageAltText: "Profile Picture",
    elevation: 0,
  };

  const styles = {
    card: {
      display: "flex",
      flexDirection: "row",
      width: 900,
      margin: "0 auto",
      marginTop: 10,
    },
    box: {
      display: "flex",
      flexDirection: "column",
    },
    cardContent: {
      flex: "1 0 auto",
      padding: 10,
    },
    cardMedia: {
      width: 350,
    },
    cardTitle: {
      fontSize: 30,
      paddingBottom: 2,
    },
    subTitle: {
      fontSize: 20,
      paddingBottom: 2,
    },
    skills: {
      paddingBottom: 2,
    },
    subDescription: {
      // color: "green",
    },
    media: {
      width: "50%",
      height: 350,
      borderRadius: "20%",
    },
  };
  return (
    <div>
      <TextImage styles={styles} content={content} />
    </div>
  );
};

export default Creator;
