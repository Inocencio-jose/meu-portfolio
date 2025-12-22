import React from "react";
import {
    DiHtml5,
    DiCss3,
    DiJsBadge,
    DiNodejsSmall,
    DiMysql,
    DiReact,
    DiPhp,
    DiSass
} from 'react-icons/di'
import {
    SiGit,
    SiGithub,
    SiTailwindcss,
    SiBootstrap
} from 'react-icons/si'
import '../assets/css/components/technologiescontainer.sass'

const categories = [
    {
        id: "langs-frameworks",
        title: "Linguagens e Frameworks",
        items: [
            { id: "html", name: "HTML5", icon: <DiHtml5 />, description: "Estruturação semântica e acessível." },
            { id: "css", name: "CSS3", icon: <DiCss3 />, description: "Estilização responsiva e animações." },
            { id: "js", name: "JavaScript", icon: <DiJsBadge />, description: "Funcionalidades dinâmicas no front-end." },
            { id: "php", name: "PHP", icon: <DiPhp />, description: "Aplicações web dinâmicas e integrações." },
            { id: "react", name: "React", icon: <DiReact />, description: "Interfaces modernas com componentes." },
            { id: "node", name: "Node.js", icon: <DiNodejsSmall />, description: "APIs rápidas e escaláveis." },
            { id: "sass", name: "Sass", icon: <DiSass />, description: "Pré-processador para estilos organizados." },
            { id: "tailwind", name: "Tailwind CSS", icon: <SiTailwindcss />, description: "Utilitários de estilo com produtividade." },
            { id: "materialize", name: "Materialize", icon: <DiCss3 />, description: "Framework CSS moderno e responsivo." },
            { id: "bootstrap", name: "Bootstrap", icon: <SiBootstrap />, description: "Componentes e grid responsivo." }
        ]
    },
    {
        id: "tools",
        title: "Ferramentas e Banco de Dados",
        items: [
            { id: "git", name: "Git", icon: <SiGit />, description: "Controle de versão distribuído." },
            { id: "github", name: "GitHub", icon: <SiGithub />, description: "Hospedagem e colaboração de código." },
            { id: "mysql", name: "MySQL", icon: <DiMysql />, description: "Banco de dados relacional." }
        ]
    }
]

const softSkills = [
    "Comunicação Eficaz",
    "Resolução de Problemas",
    "Trabalho em Equipe",
    "Gestão de Tempo",
    "Aprendizado Contínuo",
    "Criatividade",
    "Gestão de Projectos"
]

function TechnologiesContainer() {
    return (
        <>
            <section className="technologies-container">
                <h2>Minhas Tecnologias</h2>
                {categories.map((cat) => (
                    <div className="category-block" key={cat.id}>
                        <h3 className="category-title">{cat.title}</h3>
                        <div className="technologies-grid">
                            {cat.items.map((tech) => (
                                <div className="technology-card" id={tech.id} key={tech.id}>
                                    {tech.icon}
                                    <div className="technology-info">
                                        <h3>{tech.name}</h3>
                                        <p>{tech.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </section>
            <section className="soft-skills-container">
                <h2>Soft Skills</h2>
                <div className="soft-skills-grid">
                    {softSkills.map((skill) => (
                        <span className="soft-skill" key={skill}>{skill}</span>
                    ))}
                </div>
            </section>
        </>
    )
}

export default TechnologiesContainer
