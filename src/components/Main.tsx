import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBehance } from '@fortawesome/free-brands-svg-icons';
import "../assets/styles/Main.scss";
import eu from "../assets/images/eu.jpg";
import { IconProp } from '@fortawesome/fontawesome-svg-core';

// Passo 1: Crie a lista de redes sociais fora do componente ou dentro dele, antes do return.
type SocialLink = {
  name: string;
  url: string;
  icon: JSX.Element;
};

const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/thaynarlt',
    icon: <GitHubIcon />
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/thaynarlt/',
    icon: <LinkedInIcon />
  },
  {
    name: 'Behance',
    url: 'https://www.behance.net/thaynatolentino',
    icon: <FontAwesomeIcon icon={faBehance as IconProp} style={{ color: 'currentColor' }} />

  }
];


function Main() {
  // Passo 2: Crie um elemento que renderiza a lista de ícones
  const socialIconsList = socialLinks.map((social) => (
    <a
      href={social.url}
      key={social.name}
      target="_blank"
      rel="noreferrer"
      aria-label={social.name}
    >
      {social.icon}
    </a>
  ));

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={eu} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            {/* Agora você apenas insere a lista renderizada */}
            {socialIconsList}
          </div>
          <h1>Thayná Tolentino</h1>
          <p>
            UX/UI Designer | Designer/Editor de vídeos | Junior Front-End
            Developer
          </p>
          <div className="mobile_social_icons">
            {/* E usa a MESMA lista aqui, garantindo consistência */}
            {socialIconsList}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
