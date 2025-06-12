import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import {
  faPenRuler,
  faVideo,
  faPaintBrush,
} from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";

const labelsFirst = [
  "React",
  "TypeScript",
  "JavaScript",
  "HTML5",
  "CSS3",
  "Python",
  "PostgreSQL",
];

const labelsSecond = [
  "UX Design",
  "UI Design",
  "Figma",
  "Adobe Illustrator",
  "Adobe Photoshop",
];

const labelsThird = [
  "Adobe After Effects",
  "Estudos: Adobe Premiere Pro",
  "CapCut",
  "Motion Graphics",
  "Edição de Vídeo",
];

const labelsForth = [
  "Adobe Photoshop",
  "Adobe Illustrator",
  "Canva",
  "ChatGPT",
];

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Áreas de Atuação</h1>
        <div className="skills-grid">
          <div className="skill">
            <FontAwesomeIcon icon={faReact as IconProp} size="3x" />
            <h3>Junior Front-End Developer</h3>
            <p>
              Possuo conhecimentos em HTML, CSS, JavaScript e frameworks como
              React. Experiência em criação de interfaces responsivas e foco na
              usabilidade. Busco oportunidades para aplicar e aprimorar minhas
              habilidades em desenvolvimento web, contribuindo com soluções
              modernas e funcionais.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Habilidades:</span>
              {labelsFirst.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faPenRuler} size="3x" />
            <h3>UX/UI Design</h3>
            <p>
              Sólida experiência em UX/UI. Com foco na criação de interfaces
              intuitivas e experiências de usuário memoráveis, aliadas a uma
              identidade visual forte e coesa. Habilidade em traduzir conceitos
              e necessidades de negócio em soluções de design funcionais e
              visualmente atraentes.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Habilidades:</span>
              {labelsSecond.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faVideo} size="3x" />
            <h3>Edição de Vídeo</h3>
            <p>
              Editora de Vídeo criativa, focada em produzir conteúdo que engaja
              e converte audiências. Experiência na edição de vídeos para redes
              sociais (Reels, TikTok) e YouTube, utilizando Motion Graphics para
              criar animações, vinhetas e legendas dinâmicas que elevam o
              profissionalismo e o apelo visual do projeto.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Habilidades:</span>
              {labelsThird.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faPaintBrush} size="3x" />
            <h3>Social Media Design</h3>
            <p>
              Designer centrada em mídias sociais, com habilidade na criação de
              artes para plataformas como Instagram, Facebook e LinkedIn.
              Domínio do Adobe Photoshop para desenvolver posts e carrosséis.
              Minha expertise se estende à criação de uma identidade visual
              coesa para materiais impressos e produtos, incluindo papelaria
              corporativa e design de merchandise (camisas).
            </p>
            <div className="flex-chips">
              <span className="chip-title">Habilidades:</span>
              {labelsForth.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expertise;
