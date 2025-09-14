import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../assets/css/components/projectcontainer.sass";

/* ------------------ Componente de Slider ------------------ */
function ImageSlider({ images }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 2000); // troca a cada 2 segundos
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div style={{ position: "relative", width: "100%", borderRadius: "8px", overflow: "hidden" }}>
      <img
        src={images[index]}
        alt=""
        style={{
          width: "100%",
          display: "block",
          transition: "opacity 0.5s ease",
        }}
      />
    </div>
  );
}

/* ------------------ Dados dos Projetos ------------------ */
const projects = [
  {
    id: 1,
    title: "SILVA",
    images: [
      "https://picsum.photos/400/200?random=11",
      "https://picsum.photos/400/200?random=12",
      "https://picsum.photos/400/200?random=13",
    ],
    shortDesc: "Plataforma colaborativa de segurança pública.",
    estado: "Ainda em Desenvolvimento",
    details:
      "Plataforma colaborativa que conecta cidadãos, autoridades e tecnologia para localizar pessoas desaparecidas, rastrear foragidos e emitir alertas de segurança em tempo real. Recursos: Mapas interativos com relatórios e zonas de risco, grupos de apoio comunitário, histórias de sucesso e reportagens colaborativas. Impacto: Promove engajamento social e segurança pública por meio de uma rede integrada. Plataforma inovadora de segurança pública com mapas interativos, relatórios colaborativos e suporte comunitário."
  },
  {
    id: 2,
    title: "SpotiLite-PWA",
    images: [
      "https://picsum.photos/400/200?random=21",
      "https://picsum.photos/400/200?random=22",
      "https://picsum.photos/400/200?random=23",
    ],
    shortDesc: "Player de música leve e moderno inspirado no design do Spotify.",
    estado: "Concluído",
    details:
      "Player de música leve e moderno, inspirado no Spotify, desenvolvido como Progressive Web App (PWA) com uma API independente no backend (Node.js + Express). Oferece reprodução offline, busca dinâmica, fila de reprodução e interface responsiva com tema escuro. Player de música moderno e leve, inspirado no Spotify, funcionando como PWA com suporte offline e API independente para streaming e metadados.",
    link: "https://github.com/inocencio-jose/spotilite"
  },
  {
    id: 3,
    title: "Orion EXCHANGER",
    images: [
      "https://picsum.photos/400/200?random=31",
      "https://picsum.photos/400/200?random=32",
      "https://picsum.photos/400/200?random=33",
    ],
    shortDesc: "Ferramenta de conversão em lote.",
    estado: "Concluído",
    details:
      "Ferramenta eficiente para conversão em lote de arquivos em múltiplos formatos, otimizando processos digitais. Ferramenta para conversão eficiente de arquivos em lote."
  },
  {
    id: 4,
    title: "AJ Freenet",
    images: [
      "https://picsum.photos/400/200?random=41",
      "https://picsum.photos/400/200?random=42",
      "https://picsum.photos/400/200?random=43",
    ],
    shortDesc: "VPN rápida e segura.",
    estado: "Concluído",
    details:
      "VPN rápida e segura, projetada para garantir privacidade online e acesso seguro à internet. VPN focada em privacidade e segurança, garantindo acesso seguro à internet.",
    link: "https://t.me/orionvpnoficial"
  },
  {
    id: 5,
    title: "SAIPH",
    images: [
      "https://picsum.photos/400/200?random=51",
      "https://picsum.photos/400/200?random=52",
      "https://picsum.photos/400/200?random=53",
    ],
    shortDesc: "Chatbot acadêmico com Node.js e Botpress.",
    estado: "Ainda em Desenvolvimento",
    details:
      "Chatbot acadêmico desenvolvido com Node.js e Botpress, oferecendo agendamentos automatizados, resumos personalizados e suporte educacional. Chatbot acadêmico com funcionalidades avançadas para suporte educacional."
  },
  {
    id: 6,
    title: "Landing Page Céu Digital",
    images: [
      "https://picsum.photos/400/200?random=61",
      "https://picsum.photos/400/200?random=62",
      "https://picsum.photos/400/200?random=63",
    ],
    shortDesc: "Página informativa moderna e responsiva.",
    estado: "Concluído",
    details:
      "Página informativa com design moderno e responsivo para a empresa Céu Digital. Página informativa com design limpo e responsivo.",
    link: "https://ceudigital.netlify.app"
  },
  {
    id: 7,
    title: "Sistemas de Inscrição Online",
    images: [
      "https://picsum.photos/400/200?random=71",
      "https://picsum.photos/400/200?random=72",
      "https://picsum.photos/400/200?random=73",
    ],
    shortDesc: "Plataformas acadêmicas com gestão de inscrições.",
    estado: "Concluídos",
    details:
      "Plataformas acadêmicas com autenticação segura, gestão de inscrições e dashboards administrativos para institutos educacionais. Soluções robustas para gestão acadêmica, com autenticação segura e dashboards administrativos."
  },
  {
    id: 8,
    title: "Cosmo Clima",
    images: [
      "https://picsum.photos/400/200?random=81",
      "https://picsum.photos/400/200?random=82",
      "https://picsum.photos/400/200?random=83",
    ],
    shortDesc: "Aplicativo de clima interativo.",
    estado: "Concluído",
    details:
      "Aplicação de clima interativa desenvolvida com HTML, CSS, JavaScript e a API OpenWeather, fornecendo dados meteorológicos em tempo real. Aplicativo de clima com interface moderna e dados em tempo real via API OpenWeather.",
    link: "https://cosmoclima.netlify.app"
  },
  {
    id: 9,
    title: "CASSIEF",
    images: [
      "https://picsum.photos/400/200?random=91",
      "https://picsum.photos/400/200?random=92",
      "https://picsum.photos/400/200?random=93",
    ],
    shortDesc: "Bot multifuncional no Telegram.",
    estado: "Concluído",
    details:
      "Bot multifuncional em Node.js integrado à API do Telegram, criado para gerenciar o grupo da AJ Freenet com automações e interações dinâmicas. Bot em Node.js para automação e gerenciamento de comunidades no Telegram.",
    link: "https://t.me/CASSIEF_bot"
  }
];

function ProjectContainer() {
  const [showFullscreen, setShowFullscreen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="projects-container">
      <h2>Projetos</h2>
      <p>
        Aqui estão alguns dos projetos que desenvolvi ao longo da minha jornada.
        Clique para explorar mais detalhes de cada um deles.
      </p>
      <button className="btn" onClick={() => setShowFullscreen(true)}>
        Ver Projetos
      </button>

      {/* Fullscreen grid modal */}
      <AnimatePresence>
        {showFullscreen && (
          <motion.div
            className="fullscreen-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              background: "rgba(0, 0, 0, 0.8)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 1000,
            }}
          >
            <div className="fullscreen-header">
              <button className="btn close-btn" onClick={() => setShowFullscreen(false)}>
                Fechar
              </button>
            </div>

            <div
              className="projects-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "20px",
                padding: "20px",
                maxWidth: "1200px",
                width: "100%",
                overflowY: "auto",
              }}
            >
              {projects.map((proj) => (
                <motion.div
                  className="project-card"
                  key={proj.id}
                  whileHover={{ scale: 1.05 }}
                  style={{
                    background: "#141414ff",
                    borderRadius: "10px",
                    padding: "15px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                    cursor: "pointer",
                  }}
                  onClick={() => setSelectedProject(proj)}
                >
                  <ImageSlider images={proj.images} />
                  <h3>{proj.title}</h3>
                  <p>{proj.shortDesc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Fullscreen details modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              background: "rgba(0, 0, 0, 0.8)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 1001,
            }}
          >
            <motion.div
              className="modal-card"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              style={{
                background: "#141414ff",
                borderRadius: "10px",
                padding: "20px",
                maxWidth: "600px",
                width: "90%",
                maxHeight: "80vh",
                overflowY: "auto",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              }}
            >
              <ImageSlider images={selectedProject.images} />
              <h2>{selectedProject.title}</h2>
              <p>{selectedProject.details}</p>
              <p>Estado: <span className={selectedProject.estado}>{selectedProject.estado}</span></p>
              {selectedProject.link && (
                <p>Visite em: <a href={selectedProject.link}>{selectedProject.link}</a></p>
              )}
              <br />
              <button className="btn" onClick={() => setSelectedProject(null)}>
                Fechar Detalhes
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default ProjectContainer;