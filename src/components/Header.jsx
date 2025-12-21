import React, { useState, useEffect } from "react";
import { 
  RiUserLine, 
  RiCodeSSlashLine, 
  RiFolderLine, 
  RiMessage3Line, 
  RiContactsLine,
  RiMenuLine,
  RiCloseLine
} from "react-icons/ri";
import "../assets/css/components/header.sass";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Fecha o menu quando a tela aumenta
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false); // Fecha o menu mobile após clicar
    }
  };

  const menuItems = [
    { id: "sobre", label: "Sobre", icon: <RiUserLine /> },
    { id: "tecnologias", label: "Tecnologias", icon: <RiCodeSSlashLine /> },
    { id: "projetos", label: "Projetos", icon: <RiFolderLine /> },
    { id: "depoimentos", label: "Depoimentos", icon: <RiMessage3Line /> },
    { id: "contato", label: "Contato", icon: <RiContactsLine /> }
  ];

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="container">
        <div className="logo">
          <h1>Inocêncio José</h1>
        </div>
        
        {/* Menu Desktop */}
        <nav className="nav desktop-nav">
          {menuItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.id);
              }}
              className="nav-link"
            >
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-text">{item.label}</span>
            </a>
          ))}
        </nav>

        {/* Botão Hamburger Mobile */}
        <button 
          className="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <RiCloseLine /> : <RiMenuLine />}
        </button>

        {/* Menu Mobile */}
        <nav className={`nav mobile-nav ${mobileMenuOpen ? "open" : ""}`}>
          {menuItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.id);
              }}
              className="nav-link"
            >
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-text">{item.label}</span>
            </a>
          ))}
        </nav>

        {/* Overlay para fechar menu mobile */}
        {mobileMenuOpen && (
          <div 
            className="mobile-menu-overlay"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}
      </div>
    </header>
  );
};

export default Header;
