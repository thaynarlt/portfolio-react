import React from "react";
// 1. Importe o ReactPlayer genérico para suportar arquivos .mp4
import ReactPlayer from "react-player";

// Importe os componentes e os módulos do Swiper
import { Swiper, SwiperSlide } from "swiper/react";
// Re-importado o módulo de Navigation
import { Autoplay, Navigation } from "swiper/modules";

// Importe os estilos base do Swiper e o seu arquivo SCSS personalizado
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../assets/styles/CarouselContainer.scss";

// --- IMPORTANDO IMAGENS LOCAIS ---
import fotoEsquerda1 from "../assets/images/design/1.png";
import fotoEsquerda2 from "../assets/images/design/2.png";
import fotoEsquerda3 from "../assets/images/design/3.png";
import fotoEsquerda4 from "../assets/images/design/4.png";
import fotoEsquerda5 from "../assets/images/design/5.png";
import fotoEsquerda6 from "../assets/images/design/6.png";
import fotoEsquerda7 from "../assets/images/design/7.jpg";
import fotoEsquerda8 from "../assets/images/design/8.jpg";
import fotoEsquerda9 from "../assets/images/design/9.jpg";
import fotoEsquerda10 from "../assets/images/design/10.jpg";
import fotoEsquerda11 from "../assets/images/design/11.jpg";
import fotoEsquerda12 from "../assets/images/design/12.jpg";
import fotoEsquerda13 from "../assets/images/design/13.png";
import fotoEsquerda14 from "../assets/images/design/14.png";
import fotoEsquerda15 from "../assets/images/design/15.jpg";
import fotoEsquerda16 from "../assets/images/design/16.jpg";

import fotoDireita1 from "../assets/images/design/17.jpg";
import fotoDireita2 from "../assets/images/design/18.jpg";
import fotoDireita3 from "../assets/images/design/19.png";
import fotoDireita4 from "../assets/images/design/20.png";
import fotoDireita5 from "../assets/images/design/21.png";
import fotoDireita6 from "../assets/images/design/22.png";
import fotoDireita7 from "../assets/images/design/23.png";
import fotoDireita8 from "../assets/images/design/24.png";
import fotoDireita9 from "../assets/images/design/25.png";
import fotoDireita10 from "../assets/images/design/26.png";
import fotoDireita11 from "../assets/images/design/27.png";
import fotoDireita12 from "../assets/images/design/28.png";
import fotoDireita13 from "../assets/images/design/29.png";
import fotoDireita14 from "../assets/images/design/30.png";
import fotoDireita15 from "../assets/images/design/31.png";
import fotoDireita16 from "../assets/images/design/32.png";
import fotoDireita17 from "../assets/images/design/33.png";

const leftImages = [
  fotoEsquerda1, fotoEsquerda2, fotoEsquerda3, fotoEsquerda4, fotoEsquerda5,
  fotoEsquerda6, fotoEsquerda7, fotoEsquerda8, fotoEsquerda9, fotoEsquerda10,
  fotoEsquerda11, fotoEsquerda12, fotoEsquerda13, fotoEsquerda14, fotoEsquerda15, fotoEsquerda16,
];

const rightImages = [
  fotoDireita1, fotoDireita2, fotoDireita3, fotoDireita4, fotoDireita5,
  fotoDireita6, fotoDireita7, fotoDireita8, fotoDireita9, fotoDireita10,
  fotoDireita11, fotoDireita12, fotoDireita13, fotoDireita14, fotoDireita15,
  fotoDireita16, fotoDireita17,
];

// Listas de vídeos para os dois carrosséis
const videoUrlsLeft = [
  "https://youtube.com/shorts/rZaWu5mbipo",
  "https://youtube.com/shorts/1Yji7Y5I4cU",
  "https://youtube.com/shorts/Ce2VC7QRu-M",
  "https://youtube.com/shorts/AjCUvYoFXKs",
  "https://youtube.com/shorts/rjHN9VeM41w",
  "https://youtube.com/shorts/3osp3SA9v6g",
  "https://youtube.com/shorts/A6W85zRP6ic",
  "https://youtube.com/shorts/W1PVZTlB5WU",
  "https://youtube.com/shorts/biL2R83FPoY",
  "https://youtube.com/shorts/oNuq5sXSbLw",
  "https://youtube.com/shorts/I5tTDAmIxIM",
];

const videoUrlsRight = [
  "https://youtube.com/shorts/NISoHClezoE",
  "https://youtube.com/shorts/zUIcg_t1UWY",
  "https://youtube.com/shorts/JD8JH0wx9XY",
  "https://youtube.com/shorts/QrjXBhhE-Cw",
  "https://youtube.com/shorts/f48wwEkcIQc",
  "https://youtube.com/shorts/xLsIxQSwonw",
  "https://youtube.com/shorts/8_IyObaCZ9E",
  "https://youtube.com/shorts/wsyQIJojY5U",
  "https://youtube.com/shorts/dc0Dw4AS3Ao",
  "https://youtube.com/shorts/ciOvjXhQ86A",
];


const CarouselContainer: React.FC = () => {
  return (
    // Container renomeado para refletir 4 itens
    <div className="quad-carousel-container">
      {/* Carrossel 1 (Imagens Esquerda) */}
      <div className="carousel-wrapper image-carousel">
        <Swiper
          modules={[Autoplay]} spaceBetween={10} slidesPerView={1} loop={true}
          autoplay={{ delay: 2500, disableOnInteraction: false, pauseOnMouseEnter: true }}
          className="my-swiper-instance"
        >
          {leftImages.map((src, index) => (
            <SwiperSlide key={`left-img-${index}`}>
              <img src={src} alt={`Imagem esquerda ${index + 1}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Carrossel 2 (Vídeos Esquerda) */}
      <div className="carousel-wrapper video-carousel">
        <Swiper
          // Módulos de navegação re-adicionados
          modules={[Navigation]}
          spaceBetween={10} slidesPerView={1}
          loop={true} 
          navigation={true} /* Habilita as setas */
          className="my-swiper-instance"
        >
          {videoUrlsLeft.map((videoUrl, index) => (
            <SwiperSlide key={`left-video-${index}`}>
              <ReactPlayer
                url={videoUrl}
                className="react-player"
                width="100%"
                height="100%"
                controls={false}  
                playing={true} 
                muted={true}   
                loop={true}
                // A propriedade 'config' foi removida para permitir o clique nas setas
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Carrossel 3 (Vídeos Direita) - NOVO */}
      <div className="carousel-wrapper video-carousel">
        <Swiper
          // Módulos de navegação re-adicionados
          modules={[Navigation]}
          spaceBetween={10} slidesPerView={1}
          loop={true}
          navigation={true} /* Habilita as setas */
          className="my-swiper-instance"
        >
          {videoUrlsRight.map((videoUrl, index) => (
            <SwiperSlide key={`right-video-${index}`}>
              <ReactPlayer
                url={videoUrl}
                className="react-player"
                width="100%"
                height="100%"
                controls={false}  
                playing={true} 
                muted={true}   
                loop={true}
                // A propriedade 'config' foi removida para permitir o clique nas setas
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Carrossel 4 (Imagens Direita) */}
      <div className="carousel-wrapper image-carousel">
        <Swiper
          modules={[Autoplay]} spaceBetween={10} slidesPerView={1} loop={true}
          autoplay={{ delay: 3500, disableOnInteraction: false, pauseOnMouseEnter: true, }}
          className="my-swiper-instance"
        >
          {rightImages.map((src, index) => (
            <SwiperSlide key={`right-img-${index}`}>
              <img src={src} alt={`Imagem direita ${index + 1}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CarouselContainer;
