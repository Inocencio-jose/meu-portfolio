import React from "react";
import "../assets/css/components/testimonialssection.sass";

const testimonials = [
  {
    id: 1,
    name: "Maria Silva",
    role: "CEO, Empresa Tech",
    content: "Trabalhar com Inocêncio foi uma experiência excelente. Ele desenvolveu nossa plataforma com muito profissionalismo e atenção aos detalhes. Recomendo fortemente!",
    avatar: "https://i.pravatar.cc/150?img=47"
  },
  {
    id: 2,
    name: "João Santos",
    role: "Diretor de Projetos",
    content: "Profissional extremamente competente e dedicado. Entregou o projeto dentro do prazo e superou nossas expectativas. O código está limpo e bem documentado.",
    avatar: "https://i.pravatar.cc/150?img=33"
  },
  {
    id: 3,
    name: "Ana Costa",
    role: "Fundadora, StartupX",
    content: "Inocêncio transformou nossa ideia em realidade. Sua expertise em React e Node.js foi fundamental para o sucesso do nosso produto. Muito obrigada!",
    avatar: "https://i.pravatar.cc/150?img=45"
  },
  {
    id: 4,
    name: "Carlos Mendes",
    role: "CTO, Inovação Digital",
    content: "Desenvolvedor excepcional com grande conhecimento técnico. Sempre disponível para tirar dúvidas e propor melhorias. Parabéns pelo trabalho!",
    avatar: "https://i.pravatar.cc/150?img=12"
  }
];

const TestimonialsSection = () => {
  return (
    <section id="depoimentos" className="testimonials-section">
      <div className="container">
        <h2 className="section-title">O que Dizem sobre Mim</h2>
        <p className="section-subtitle">
          Depoimentos de clientes e parceiros com quem trabalhei
        </p>
        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-content">
                <p>"{testimonial.content}"</p>
              </div>
              <div className="testimonial-author">
                <img src={testimonial.avatar} alt={testimonial.name} />
                <div>
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

