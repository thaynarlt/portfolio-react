import React from "react";
import "../assets/styles/Contact.scss";

function Contact() {
  return (
    <section id="contact">
      <div className="contact-container">
        <h2 className="contact-title">Vamos Conversar?</h2>
        <p className="contact-subtitle">
          Estou sempre aberta a novas oportunidades e colaborações. <br />
          Sinta-se à vontade para entrar em contato!
        </p>

        <div className="contact-actions">
          <a href="mailto:thayvfx@gmail.com" className="action-button primary">
            Enviar Email
          </a>
          {/* Lembre-se de colocar o link real para o seu currículo aqui */}
          <a
            href="https://drive.google.com/file/d/151fjgmIlWTef139bAdS_oAhKUpvsgzYf/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="action-button secondary"
          >
            Visualizar Currículo
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
