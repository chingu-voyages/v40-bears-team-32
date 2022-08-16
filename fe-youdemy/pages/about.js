import React from "react";
import TextBlockStretch from "../components/TextBlockStretch.js";

const About = () => {
  const content = {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  };
  return (
    <div className="center">
      <div className="about-page-container">
        <div className="about-page">
          <h1>What is YouDemy?</h1>
          <img src="undraw_online_learning.svg" width={480} height={400} />
          <div className="about-text-group">
            <p>These days you can learn everything online.</p>
            <br></br>
            <p>
              YouDemy is the place for creators and students to get acquainted.
            </p>
          </div>
        </div>
        <TextBlockStretch content={content} />
      </div>
    </div>
  );
};
export default About;
