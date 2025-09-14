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
      <a
        href="/Perfil-Profissional.pdf" className="btn" target="_blank" rel="noopener noreferrer">
        Ver Perfil
      </a>
    </aside>
  );
};

export default Sidebar;