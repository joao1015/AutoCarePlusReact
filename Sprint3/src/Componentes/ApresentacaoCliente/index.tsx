import { useState, useEffect } from 'react';
import styled from 'styled-components';
import image1 from './imagens/Banner AutoCarePlus.png';
import image2 from './imagens/Manutenção Corretiva.png';
import image3 from './imagens/Manutenção Preventiva.png';
import image4 from './imagens/Melhores Peças.png';
import image5 from './imagens/Troca de Óleo.png';

const Container = styled.div`
  font-family: 'Poppins', sans-serif;
`;

const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 0;
  text-align: center;
  background-color: #ffffff;
  width: 100%;
`;

const CarouselSection = styled.section`
  display: flex;
  justify-content: space-between;
  background-color: blue;
  align-items: center;
   /* Altere para garantir espaçamento */
  height: 100%; /* Ajuste para preencher o container */
  width: 100%; /* Ajuste para ocupar toda a largura */
`;

const TextContainer = styled.div`
  flex: 1;
  width: 10cm;
  height: 10cm;
  padding-left: 1cm;
  color: #FFFF;
  h2 {
    font-size: 1.75cm;
    margin-bottom: 1rem;
  }

  p {
    font-size: 0.75cm;
    color: #FFFF;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  margin-left: 1rem; /* Adiciona espaçamento entre a imagem e o container */
  img {
    width: 20cm;
    height: 15cm;
  
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 10cm; 

  button {
    background-color: #406a34;
    margin-top: auto;
    color: #fff;
    border: none;
    padding: 0.5rem 1rem;
    margin: 0 0.5rem;
    cursor: pointer;
    border-radius: 4px;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #333;
    }
  }
`;

// Componente Principal
const HomePage = () => {
  const slides = [
    {
      image: image1,
      title: "Banner AutoCarePlus",
      description: "Transforme a gestão da sua oficina com nossa plataforma completa."
    },
    {
      image: image2,
      title: "Manutenção Corretiva",
      description: "Soluções rápidas para problemas inesperados nos veículos."
    },
    {
      image: image3,
      title: "Manutenção Preventiva",
      description: "Prevenção é o melhor caminho. Mantenha seus veículos em dia."
    },
    {
      image: image4,
      title: "Melhores Peças",
      description: "Trabalhamos apenas com as melhores peças do mercado."
    },
    {
      image: image5,
      title: "Troca de Óleo",
      description: "Oferecemos serviços especializados de troca de óleo."
    }
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <Container>
      <HeroSection>
      <h2>Revolucione sua Oficina com Metamind</h2>
      <p>Transforme a gestão e atendimento da sua oficina com nossa solução digital moderna e acessível.</p>
      </HeroSection>

      <CarouselSection>
        <TextContainer>
          <h2>{slides[currentImageIndex].title}</h2>
          <p>{slides[currentImageIndex].description}</p>
        </TextContainer>
        <ImageContainer>
          <img src={slides[currentImageIndex].image} alt={slides[currentImageIndex].title} />
        </ImageContainer>
      </CarouselSection>

      <ButtonsContainer>
        {slides.map((slide, index) => (
          <button key={index} onClick={() => setCurrentImageIndex(index)}>
            {slide.title}
          </button>
        ))}
      </ButtonsContainer>
    </Container>
  );
};

export default HomePage;

