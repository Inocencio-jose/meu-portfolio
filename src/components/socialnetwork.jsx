import React from "react";
import { FaLinkedin, FaInstagram, FaFacebook, FaGithub, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import "../assets/css/components/socialnetwork.sass";

const socialnetworks = [
  { nome: "Linkedin", link: "https://linkedin.com/in/inocêncio-josé-233778346", icon: <FaLinkedin /> },
  { nome: "Instagram", link: "#", icon: <FaInstagram /> },
  { nome: "Facebook", link: "https://web.facebook.com/profile.php?id=61575436262847", icon: <FaFacebook /> },
  { nome: "Github", link: "https://github.com/inocencio-jose", icon: <FaGithub /> },
  { nome: "Whatsapp", link: "#", icon: <FaWhatsapp /> },
  { nome: "Email", link: "https://mail-to:inocenciojose94397@gmail.com", icon: <FaEnvelope /> },
];

function SocialNetwork() {
  return (
    <div id="social-networks">
      {socialnetworks.map((item) => (
        <a
          key={item.nome}
          href={item.link}
          className="social-btn"
          id={item.nome}
          title={item.nome}
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
}

export default SocialNetwork;