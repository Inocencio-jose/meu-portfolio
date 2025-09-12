import React from "react";
import "../assets/css/components/sidebar.sass";
import avatar from "../img/profile.jpg";
import SocialNetwork from "./socialnetwork";
import InformationContainer from "./informationcontainer";

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={avatar} alt="Avatar" />
      <p className="title">Desenvolvedor</p>
      <SocialNetwork/>
      <InformationContainer/>
      <a href="" className="btn">
        Download Currículum
      </a>
    </aside>
  );
};

export default Sidebar;