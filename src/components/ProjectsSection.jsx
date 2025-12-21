import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../assets/css/components/projectssection.sass";

const projects = [
  {
    id: 1,
    title: "SILCC",
    image: "https://picsum.photos/600/400?random=11",
    shortDesc: "Plataforma colaborativa de segurança pública.",
    estado: "Ainda em Desenvolvimento",
    details: "Plataforma colaborativa que conecta cidadãos, autoridades e tecnologia para localizar pessoas desaparecidas, rastrear foragidos e emitir alertas de segurança em tempo real. Recursos: Mapas interativos com relatórios e zonas de risco, grupos de apoio comunitário, histórias de sucesso e reportagens colaborativas."
  },
  {
    id: 2,
    title: "SpotiLite-PWA",
    image: "https://picsum.photos/600/400?random=21",
    shortDesc: "Player de música leve e moderno inspirado no design do Spotify.",
    estado: "Concluído",
    details: "Player de música leve e moderno, inspirado no Spotify, desenvolvido como Progressive Web App (PWA) com uma API independente no backend (Node.js + Express). Oferece reprodução offline, busca dinâmica, fila de reprodução e interface responsiva com tema escuro.",
    link: "https://github.com/inocencio-jose/spotilite"
  },
  {
    id: 3,
    title: "Orion EXCHANGER",
    image: "https://picsum.photos/600/400?random=31",
    shortDesc: "Ferramenta de conversão em lote.",
    estado: "Concluído",
    details: "Ferramenta eficiente para conversão em lote de arquivos em múltiplos formatos, otimizando processos digitais."
  },
  {
    id: 4,
    title: "AJ Freenet",
    image: "https://picsum.photos/600/400?random=41",
    shortDesc: "VPN rápida e segura.",
    estado: "Concluído",
    details: "VPN rápida e segura, projetada para garantir privacidade online e acesso seguro à internet.",
    link: "https://t.me/orionvpnoficial"
  },
  {
    id: 5,
    title: "SAIPH",
    image: "https://picsum.photos/600/400?random=51",
    shortDesc: "Chatbot acadêmico com Node.js e Botpress.",
    estado: "Ainda em Desenvolvimento",
    details: "Chatbot acadêmico desenvolvido com Node.js e Botpress, oferecendo agendamentos automatizados, resumos personalizados e suporte educacional."
  },
  {
    id: 6,
    title: "Landing Page Céu Digital",
    image: "https://picsum.photos/600/400?random=61",
    shortDesc: "Página informativa moderna e responsiva.",
    estado: "Concluído",
    details: "Página informativa com design moderno e responsivo para a empresa Céu Digital.",
    link: "https://ceudigital.netlify.app"
  },
  {
    id: 7,
    title: "Sistemas de Inscrição Online",
    image: "https://picsum.photos/600/400?random=71",
    shortDesc: "Plataformas acadêmicas com gestão de inscrições.",
    estado: "Concluídos",
    details: "Plataformas acadêmicas com autenticação segura, gestão de inscrições e dashboards administrativos para institutos educacionais.",
    link: "https://github.com/Inocencio-jose/instituto-carlos-nunes"
  },
  {
    id: 8,
    title: "Cosmo Clima",
    image: "https://picsum.photos/600/400?random=81",
    shortDesc: "Aplicativo de clima interativo.",
    estado: "Concluído",
    details: "Aplicação de clima interativa desenvolvida com HTML, CSS, JavaScript e a API OpenWeather, fornecendo dados meteorológicos em tempo real.",
    link: "https://cosmoclima.netlify.app",
    link2: "https://github.com/Inocencio-jose/cosmo-clima/"
  },
  {
    id: 9,
    title: "CASSIEF",
    image: "https://picsum.photos/600/400?random=91",
    shortDesc: "Bot multifuncional no Telegram.",
    estado: "Concluído",
    details: "Bot multifuncional em Node.js integrado à API do Telegram, criado para gerenciar o grupo da AJ Freenet com automações e interações dinâmicas.",
    link: "https://t.me/CASSIEF_bot",
    link2: "https://github.com/Inocencio-jose/CASSIEF"
  },
  {
    id: 10,
    title: "Orion Technologies",
    image: "https://picsum.photos/600/400?random=101",
    shortDesc: "Site oficial da Orion Technologies.",
    estado: "Concluído",
    details: "Website institucional moderno e responsivo para a Orion Technologies, apresentando serviços, soluções tecnológicas e informações da empresa com design profissional e otimizado para conversão.",
    link: "https://oriontechn.netlify.app"
  },
  {
    id: 11,
    title: "Sabor e Bistro - Menu Digital",
    image: "https://picsum.photos/600/400?random=111",
    shortDesc: "Menu digital interativo para restaurante.",
    estado: "Concluído",
    details: "Aplicação web de menu digital desenvolvida para restaurantes, permitindo que clientes visualizem cardápios de forma moderna e interativa. Interface responsiva e intuitiva para melhor experiência do usuário.",
    link: "https://saborebistro.netlify.app"
  },
  {
    id: 12,
    title: "Telemarketing Web",
    image: "https://picsum.photos/600/400?random=121",
    shortDesc: "Sistema completo de telemarketing web.",
    estado: "Concluído",
    details: "Aplicação web completa para gestão de telemarketing com painel administrativo, gerenciamento de campanhas, controle de leads e relatórios. Desenvolvido com PHP, HTML e Python para otimização de processos de vendas e atendimento.",
    link2: "https://github.com/Inocencio-jose/Telemarketing-web"
  },
  {
    id: 13,
    title: "Sistema de Gestão Escolar",
    image: "https://picsum.photos/600/400?random=131",
    shortDesc: "Plataforma completa para gestão educacional.",
    estado: "Ainda em Desenvolvimento",
    details: "Sistema abrangente para gestão escolar incluindo controle de alunos, professores, turmas, disciplinas, avaliações e relatórios acadêmicos. Interface moderna e intuitiva para facilitar a administração educacional."
  },
  {
    id: 14,
    title: "Sistema de Gestão de Comunidade/Startup",
    image: "https://picsum.photos/600/400?random=141",
    shortDesc: "Plataforma para gestão de comunidades e startups.",
    estado: "Ainda em Desenvolvimento",
    details: "Sistema completo para gestão de comunidades e startups, incluindo gerenciamento de membros, projetos, tarefas, recursos e colaboração entre equipes. Ferramentas para otimizar processos e aumentar produtividade."
  }
];

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projetos" className="projects-section">
      <div className="container">
        <h2 className="section-title">Meus Projetos</h2>
        <p className="section-subtitle">
          Aqui estão alguns dos projetos que desenvolvi ao longo da minha jornada.
        </p>
        <div className="projects-grid">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <span className={`status-badge ${project.estado.replace(/\s+/g, '-').toLowerCase()}`}>
                  {project.estado}
                </span>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.shortDesc}</p>
                <button className="btn-read-more">Ver Detalhes →</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal de Detalhes */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="project-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="project-modal"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="close-btn" onClick={() => setSelectedProject(null)}>×</button>
              <img src={selectedProject.image} alt={selectedProject.title} />
              <h2>{selectedProject.title}</h2>
              <p className="modal-description">{selectedProject.details}</p>
              <p className="modal-status">
                Estado: <span className={`status-badge ${selectedProject.estado.replace(/\s+/g, '-').toLowerCase()}`}>
                  {selectedProject.estado}
                </span>
              </p>
              {selectedProject.link && (
                <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className="btn-link">
                  Ver Projeto →
                </a>
              )}
              {selectedProject.link2 && (
                <a href={selectedProject.link2} target="_blank" rel="noopener noreferrer" className="btn-link">
                  Ver no GitHub →
                </a>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;

