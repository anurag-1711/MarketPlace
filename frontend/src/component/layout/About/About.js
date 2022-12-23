import React from "react";
import "./aboutSection.css";
import { Typography, Avatar } from "@material-ui/core";
const About = () => {

  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Me</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://res.cloudinary.com/dzdxlzayw/image/upload/v1671797461/avatars/kwupo4it0myviglw1xh2.jpg"
              alt="Founder"
            />

            <span>
              I am Anurag, a passionate programmer.<br />
              I am a Full Stack Web Developer with React.js, Redux, Express.js, Node.js, and MongoDB
              as my tech stack. <br /> I am also a competitve programmer and a problem solving enthusiast with a
              zeal to learn and develop new skills. <br />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
