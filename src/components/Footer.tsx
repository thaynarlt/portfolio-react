import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBehance } from '@fortawesome/free-brands-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

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

function Footer() {
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
    <footer>
      <div>
        {socialIconsList}
      </div>
      <p>Template de <a href="https://github.com/yujisatojr/react-portfolio-template" target="_blank" rel="noreferrer">Yuji Sato</a> Modificado por <a href="https://github.com/thaynarlt/" target="_blank" rel="noreferrer">Thayná Tolentino</a></p>
    </footer>
  );
}

export default Footer;