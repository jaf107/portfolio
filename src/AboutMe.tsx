import React from "react";

interface AboutMeProps {
  name: string;
  profession: string;
}

const AboutMe: React.FC<AboutMeProps> = ({ name, profession }) => {
  return (
    <div>
      <h2>About Me</h2>
      <p>
        Hello, my name is {name} and I am a {profession}.
      </p>
    </div>
  );
};

export default AboutMe;
