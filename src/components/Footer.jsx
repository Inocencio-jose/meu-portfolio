import React from "react";
import { FaLinkedin, FaInstagram, FaFacebook, FaGithub, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from "react-icons/ai";
import "../assets/css/components/footer.sass";

const Footer = () => {
  const socialNetworks = [
    { nome: "Linkedin", link: "https://linkedin.com/in/inocêncio-josé-233778346", icon: <FaLinkedin /> },
    { nome: "Instagram", link: "https://www.instagram.com/inocenciojose49/", icon: <FaInstagram /> },
    { nome: "Facebook", link: "https://web.facebook.com/profile.php?id=61575436262847", icon: <FaFacebook /> },
    { nome: "Github", link: "https://github.com/inocencio-jose", icon: <FaGithub /> },
    { nome: "Whatsapp", link: "https://wa.me/244972264209", icon: <FaWhatsapp /> },
    { nome: "Email", link: "mailto:inocenciojose94397@gmail.com", icon: <FaEnvelope /> },
  ];

  return (
    <footer id="contato" className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Contato</h3>
            <div className="contact-info">
              <div className="contact-item">
                <AiFillPhone />
                <span>(+244) 972 264 209</span>
              </div>
              <div className="contact-item">
                <AiOutlineMail />
                <span>inocenciojose93497@gmail.com</span>
              </div>
              <div className="contact-item">
                <AiFillEnvironment />
                <span>Angola, Uíge, Uíge, Papelão, Rua Divino Pastor</span>
              </div>
            </div>
          </div>
          <div className="footer-section">
            <h3>Redes Sociais</h3>
            <div className="social-links">
              {socialNetworks.map((social) => (
                <a
                  key={social.nome}
                  href={social.link}
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  title={social.nome}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Inocêncio José. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

