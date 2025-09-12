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
import '../assets/css/components/technologiescontainer.sass'

const technologies = [
    {
        id: "html",
        name: "HTML5",
        icon: <DiHtml5 />,
        description: "Estruturação de páginas web semânticas e acessíveis."
    },
    {
        id: "css",
        name: "CSS3",
        icon: <DiCss3 />,
        description: "Estilização responsiva e animações modernas para interfaces."
    },
    {
        id: "js",
        name: "JavaScript",
        icon: <DiJsBadge />,
        description: "Criação de funcionalidades dinâmicas e interativas no front-end."
    },
    {
        id: "node",
        name: "Node.js",
        icon: <DiNodejsSmall />,
        description: "Desenvolvimento de APIs rápidas e escaláveis no back-end."
    },
    {
        id: "mysql",
        name: "MySQL",
        icon: <DiMysql />,
        description: "Modelagem e gerenciamento de bancos de dados relacionais."
    },
    {
        id: "react",
        name: "React",
        icon: <DiReact />,
        description: "Construção de interfaces modernas com componentes reutilizáveis."
    },
    {
        id: "php",
        name: "PHP",
        icon: <DiPhp />,
        description: "Desenvolvimento de aplicações web dinâmicas e integrações."
    },
    {
        id: "sass",
        name: "Sass",
        icon: <DiSass />,
        description: "Pré-processador CSS para escrita de estilos mais organizados."
    }
]

function TechnologiesContainer() {
    return (
        <section className="technologies-container">
            <h2>Tecnologias</h2>
            <div className="technologies-grid">
                {technologies.map((tech) => (
                    <div className="technology-card" id={tech.id} key={tech.id}>
                        {tech.icon}
                        <div className="technology-info">
                            <h3>{tech.name}</h3>
                            <p>{tech.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default TechnologiesContainer