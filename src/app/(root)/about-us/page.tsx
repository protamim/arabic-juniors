import React from "react";
import OurValues from "./components/OurValues";
import OurMission from "./components/OurMission";
import AboutHero from "./components/AboutHero";
import OurTeacher from "./components/OurTeacher";

const AboutUsPage = () => {
  return (
    <React.Fragment>
      <AboutHero />
      <OurMission />
      <OurValues />
      <OurTeacher />
    </React.Fragment>
  );
};

export default AboutUsPage;
