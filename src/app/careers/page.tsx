import React from "react";
import CareersHero from "./components/CareersHero";
import EnvisionEmpower from "./components/EnvisionEmpower";
import Benefits from "./components/Benefits";
import LearnWay from "./components/LearnWay";
import OpenJobSection from "./components/OpenJobSection";
import { BlogSection } from "@/components/homepage";

const CareersPage = () => {
  return (
    <React.Fragment>
     <CareersHero />
     <EnvisionEmpower />
     <Benefits />
     <LearnWay />
     <OpenJobSection />
     <BlogSection />
    </React.Fragment>
  );
};

export default CareersPage;
