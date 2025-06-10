import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Experiência Profissional</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Agosto 2024 - Atualmente"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Estagiário Projeto Gráfico</h3>
            <h4 className="vertical-timeline-element-subtitle">LAVID, UFPB</h4>
            <p>
              Desenvolvimento de história do usuário; Criação de protótipos de alta fidelidade;
              Testes de usabilidade; Design de interfaces; Colaboração com equipes multidisciplinares;
              UX/UI Design voltado para aplicações para TV 3.0.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Agosto 2023 - Atualmente"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Editora de Vídeos e Designer Gráfico</h3>
            <h4 className="vertical-timeline-element-subtitle">Al Company, João Pessoa</h4>
            <p>
              Edição de vídeos, Criação de conteúdo visual, Design gráfico, Colaboração com equipes criativas,
              Desenvolvimento de identidade visual, Criação de materiais promocionais. Utilização de aplicativos Adobe,
              Canva, Caput e outros.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Novembro 2023 - Março 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Social Media Designer e Editora de Vídeos</h3>
            <h4 className="vertical-timeline-element-subtitle">V4 Company, João Pessoa</h4>
            <p>
              Criação de conteúdo visual para redes sociais, Edição de vídeos para plataformas digitais,
              Desenvolvimento de identidade visual, Colaboração com equipes criativas, Produção de direcionamentos
              mensais para redes sociais, Criação de artes para campanhas publicitárias.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;