import { withTheme } from "@emotion/react";
import React from "react";
import TextImage from "../components/TextImage.js";
import Reviews from "../components/creator/Reviews.js";
import Courses from "../components/courses/Courses.js";

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
    buttonText: "Set an Appointment",
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
      paddingLeft: 10,
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
      width: 350,
      height: 350,
      borderRadius: 30,
    },
    button: {
      background: "#B3FC86",
      textDecoration: "none",
      color: "white",
      marginTop: 2,
      padding: 2,
    },
  };

  const reviews = [
    {
      id: 1,
      userName: "oatslam",
      title: "Great teacher!",
      date: "09/22/2021",
      rating: 5.0,
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      id: 2,
      userName: "fireShip",
      title: "Awesome teacher!",
      date: "01/21/2021",
      rating: 5.0,
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      id: 3,
      userName: "crazyPants",
      title: "Bad Teacher!",
      date: "05/01/2019",
      rating: 2.0,
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      id: 4,
      userName: "javaNerd",
      title: "Best Teacher!",
      date: "03/13/2020",
      rating: 5.0,
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ];

  const courses = [
    {
      id: 1,
      name: "JavaScript 101",
      prerequisites: "none",
      description:
        "Teaches all the fundamentals of Vanilla JavaScript. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      level: "Beginner",
      price: "$100",
    },
    {
      id: 2,
      name: "Ruby 101",
      prerequisites: "none",
      description:
        "teaches all the fundamentals of Ruby. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      level: "Beginner",
      price: "$100",
    },
    {
      id: 3,
      name: "Ruby on Rails - Beginner",
      prerequisites: "Ruby 101",
      description:
        "Teaches all the ways to create full stack Ruby on Rails web apps. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      level: "Intermediate",
      price: "$100",
    },
    {
      id: 3,
      name: "Ruby on Rails - Intermediate",
      prerequisites: "Ruby 101 and Ruby on Rails - Beginner",
      description:
        "Teaches all the ways to create full stack Ruby on Rails web apps. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      level: "Intermediate",
      price: "$100",
    },
    {
      id: 4,
      name: "Ruby on Rails - Advanced",
      prerequisites:
        "Ruby 101, Ruby on Rails - Beginner, and Ruby on Rails - Intermediate",
      description:
        "Teaches all the ways to create full stack Ruby on Rails web apps. Goes over caching, apis, and much more. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      level: "Advanced",
      price: "$100",
    },
    {
      id: 5,
      name: "ReactJS",
      prerequisites: "JavaScript 101",
      description:
        "Teaches all the ways to create ReactJS web apps. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      level: "Advanced",
      price: "$100",
    },
    {
      id: 6,
      name: "NodeJS - Intermediate",
      prerequisites: "JavaScript 101",
      description:
        "Teaches all the ways to create full stack JavaScript web apps with NodeJS and express. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      level: "Advanced",
      price: "$100",
    },
  ];

  return (
    <div>
      <TextImage styles={styles} content={content} />
      <Courses courses={courses} />
      <Reviews reviews={reviews} />
    </div>
  );
};

export default Creator;
