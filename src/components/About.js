import React from "react";
import { image } from "../data/data";

function About() {
  const altString = "I made this"

  return (<div id="about">
            <h2>About Me</h2>
            <p>Learning React!</p>
            <img src={image} alt={altString}></img>
          </div>
  );
}

export default About;
