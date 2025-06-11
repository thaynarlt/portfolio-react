import React, { useState } from "react";

// Importe o seu arquivo SCSS aqui
import "../assets/styles/ImageCarousel.scss";

import rm0906_1 from "../assets/images/rm0906_1.png";
import rm0906_2 from "../assets/images/rm0906_2.png";
import rm0906_3 from "../assets/images/rm0906_3.png";
import rm0906_4 from "../assets/images/rm0906_4.png";
import rm0906_5 from "../assets/images/rm0906_5.png";

const images = [rm0906_1, rm0906_2, rm0906_3, rm0906_4, rm0906_5];

const ImageCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    // Usando a classe do container principal
    <div className="carousel-container">
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        // Usando a classe para a imagem
        className="carousel-image"
      />

      {/* Botão Anterior */}
      <button
        onClick={prevSlide}
        // Classes para o botão e seu modificador de posição
        className="carousel-btn carousel-btn--prev"
      >
        ◀
      </button>

      {/* Botão Próximo */}
      <button
        onClick={nextSlide}
        // Classes para o botão e seu modificador de posição
        className="carousel-btn carousel-btn--next"
      >
        ▶
      </button>

      {/* Indicadores */}
      <div className="carousel-indicators">
        {images.map((_, index) => (
          <div
            key={index}
            // Lógica para aplicar a classe ativa
            className={`indicator-dot ${
              currentIndex === index ? "indicator-dot--active" : ""
            }`}
          />
        ))}
      </div>
    </div>
    
  );
};

export default ImageCarousel;
