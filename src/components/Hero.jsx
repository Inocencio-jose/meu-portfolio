import React from "react";
import avatar from "../img/profile.jpg";
import "../assets/css/components/hero.sass";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-image">
            <img src={avatar} alt="Inocêncio José" />
          </div>
          <div className="hero-text">
            <h1>Inocêncio José</h1>
            <p className="subtitle">Desenvolvedor Full Stack Júnior</p>
            <p className="description">
              Criando soluções web modernas e inovadoras com foco em experiência do usuário e performance.
            </p>
            <a
              href="/Perfil-Profissional.pdf"
              className="btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver Perfil Completo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

