import React from "react";
import TextBlockStretch from "../components/TextBlockStretch.js";

const About = () => {
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
        <TextBlockStretch />
      </div>
    </div>
  );
};
export default About;
