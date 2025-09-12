import React from "react";
import "../assets/css/components/maincontent.sass";
import Aboutcontainer from "./aboutcontainer";
import TechnologiesContainer from "./technologiescontainer";
import Projectcontainer from "./projectcontainer";
const MainContent = () => {
  return (
    <main id="main-content">
      <Aboutcontainer/>
      <TechnologiesContainer/>
      <Projectcontainer/>
    </main>
  );
};

export default MainContent;