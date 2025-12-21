import React from "react";
import "../assets/css/components/aboutsection.sass";

const AboutSection = () => {
  return (
    <section id="sobre" className="about-section">
      <div className="container">
        <h2 className="section-title">Sobre Mim</h2>
        <div className="about-content">
          <p>
            Sou Inocêncio José, desenvolvedor apaixonado por tecnologia e inovação. 
            Tenho experiência em criação de aplicações web modernas, integração de sistemas 
            e desenvolvimento de soluções que facilitam a vida das pessoas. 
            Estou sempre em busca de aprender novas ferramentas, explorar ideias criativas 
            e compartilhar conhecimento com a comunidade.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

