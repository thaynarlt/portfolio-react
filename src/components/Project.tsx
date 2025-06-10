import React from "react";
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Projetos</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://www.figma.com/community/file/1514280813377321596" target="_blank" rel="noreferrer"><img src={mock10} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.figma.com/community/file/1514280813377321596" target="_blank" rel="noreferrer"><h2>Landing Page - Ced+</h2></a>
                <p>Concepção e design de um aplicativo para profissionais de saúde, focado em centralizar e otimizar o gerenciamento de pacientes. A plataforma permite agendamento de consultas, acesso rápido a prontuários eletrônicos e histórico clínico.</p>
            </div>
            <div className="project">
                <a href="https://www.figma.com/community/file/1458511832397859570" target="_blank" rel="noreferrer"><img src={mock09} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.figma.com/community/file/1458511832397859570" target="_blank" rel="noreferrer"><h2>Landing Page - Oxxy</h2></a>
                <p>Design de site para empresa de consultoria especializada em alta performance voltada ao segmento de nutrição animal. Clique aqui: <a href="www.oxxyconsultoriaindustrial.com.br">Site da Oxxy</a></p>
            </div>
            <div className="project">
                <a href="https://www.behance.net/gallery/191525527/Al-Company-Landing-Page" target="_blank" rel="noreferrer"><img src={mock08} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.behance.net/gallery/191525527/Al-Company-Landing-Page" target="_blank" rel="noreferrer"><h2>Landing Page - Al Company</h2></a>
                <p>Realizei o UX Design da Landpage da Agência de Marketing, Al Company, em colaboração com meu irmão na programação do website.</p>
            </div>
            <div className="project">
                <a href="https://www.figma.com/community/file/1359150290638878115/pontope-interface-simples-e-commerce" target="_blank" rel="noreferrer"><img src={mock07} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.figma.com/community/file/1359150290638878115/pontope-interface-simples-e-commerce" target="_blank" rel="noreferrer"><h2>Interface Simples de E-commerce para PontoPé</h2></a>
                <p>Projeto de reformulação de interface para site e-commerce da loja de calçados PontoPé.</p>
            </div>
            <div className="project">
                <a href="https://github.com/thaynarlt/SiteEducacaoAmbiental-P2" target="_blank" rel="noreferrer"><img src={mock06} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/thaynarlt/SiteEducacaoAmbiental-P2" target="_blank" rel="noreferrer"><h2>Landing Page de Educação Ambiental - EDAMB.br</h2></a>
                <p>Durante o segundo período da faculdade, elaborei o Design de website com foco na implementação de funcionalidades avançadas utilizando Javascript.</p>
            </div>
            <div className="project">
                <a href="https://github.com/thaynarlt/SiteTheErasTourBrasil-P1" target="_blank" rel="noreferrer"><img src={mock05} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/thaynarlt/SiteTheErasTourBrasil-P1" target="_blank" rel="noreferrer"><h2>Landing Page - The Eras Tour Brasil</h2></a>
                <p>Projeto de website desenvolvido durante meu primeiro período da faculdade, com o intuito de aprimorar a proficiência em HTML e CSS.</p>
            </div>
            
            
        </div>
    </div>
    );
}

export default Project;