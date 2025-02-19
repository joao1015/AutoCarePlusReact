import { useState, useEffect } from 'react';
import styled from 'styled-components';
import image1 from './imagens/Banner AutoCarePlus.png';
import image2 from './imagens/Manutenção Corretiva.png';
import image3 from './imagens/Manutenção Preventiva.png';
import image4 from './imagens/Melhores Peças.png';
import image5 from './imagens/Troca de Óleo.png';
import testimonial1 from './imagens/Depoimento 1.png';
import testimonial2 from './imagens/Depoimento 2.png';
import testimonial3 from './imagens/Depoimento 3.png';
import tip1 from './imagens/DICA 1.png'; 
import tip2 from './imagens/DICA 2.png'; 
import tip3 from './imagens/DICA 3.png'; 
import tip4 from './imagens/DICA 4.png'; 

// Media Queries and Styled Components

const Container = styled.div`
  font-family: 'Poppins', sans-serif;
`;

const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 0;
  text-align: center;
  background-color: #ececec;
  width: 100%;
  h2 {
    font-size: 1.5cm;
    margin-bottom: 1rem;
  }
  p {
    font-size: 0.7cm;
  }


  @media (max-width: 1028px) {
    padding: 4rem 2rem;
    h2 {
      font-size: 0.8cm;
    }
    p {
      font-size: 0.4cm;
    }
  }

  @media (max-width: 770px) {
    padding: 2rem 1rem;
    h2 {
      font-size: 0.7cm;
    }
    p {
      font-size: 0.4cm;
    }
  }

  @media (max-width: 430px) {
    padding: 1.5rem 1rem;
    h2 {
      font-size: 0.6cm;
    }
    p {
      font-size: 0.3cm;
    }
  }
`;

const CarouselSection = styled.section`

@media (max-width: 2600px) {
  display: flex;
  background-color: blue;
  align-items: center;
  height: 100%; /* Ajuste para preencher o container */
  width: 100%; /* Ajuste para ocupar toda a largura */
  }

  @media (max-width: 2200px) {
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* Ajuste para ocupar toda a largura */
  }

  @media (max-width: 1700px) {
  display: flex;
  justify-content: space-between;
  background-color: blue;
  align-items: center;
  height: 100%; /* Ajuste para preencher o container */
  width: 100%; /* Ajuste para ocupar toda a largura */
  }
  
  @media (max-width: 1028px) {
    width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;
    
  }

  @media (max-width: 770px) {
    flex-direction: column;
    align-items: center;
  }
`;

const TextContainer = styled.div`

@media (max-width: 2600px){
  flex: 1;
  width: 10cm;
  height: 10cm;
  padding-left: 2cm;
  color: #FFFF;
  h2 {
    font-size: 1.75cm;
    margin-bottom: 1rem;
  }
  p {
    font-size: 0.75cm;
    color: #FFFF;
  }

  }


 

  @media (max-width: 1700px){
  flex: 1;
  width: 10cm;
  height: 10cm;
  color: #FFFF;
  h2 {
    font-size: 1.75cm;
    margin-bottom: 1rem;
  }
  p {
    font-size: 0.75cm;
    color: #FFFF;
  }

  }

  @media (max-width: 1028px) {
    width: 100%;
    padding: 0 1cm;
    color: white;
    text-align: left;

    h2 {
      font-size: 1.2cm;
    }
    p {
      font-size: 0.6cm;
    }
  }

  @media (max-width: 770px) {
    h2 {
      font-size: 1cm;
    }
    p {
      font-size: 0.5cm;
    }
  }
`;

const ImageContainer = styled.div`

@media (max-width: 2600px){
    flex: 1;
  margin-left: 1cm; /* Adiciona espaçamento entre a imagem e o container */
  img {
    width: 35cm;
    height: 25cm;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  }

  @media (max-width: 2200px){
  flex: 1;
  margin-left: 1cm; /* Adiciona espaçamento entre a imagem e o container */
  img {
    width: 30cm;
    height: 20cm;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  }  

  @media (max-width: 1700px){
    flex: 1;
  margin-left: 1cm; /* Adiciona espaçamento entre a imagem e o container */
  img {
    width: 20cm;
    height: 15cm;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  }
 

  @media (max-width: 1028px) {
    margin: 1rem 0;
  img {
    width: 100%;
    height: auto;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    max-width: 100%;
  }
}
`;

const ButtonsContainer = styled.div`

@media (max-width: 2600px) {
  display: flex;
  justify-content: center;
  margin: 2rem 0; /* Ajuste a margem superior e inferior conforme necessário */
  button {
    background-color: #808080;
    border: none;   
    width: 30px;
    height: 30px;
    margin: 0 10px; /* Espaçamento horizontal entre os botões */
    cursor: pointer;
    border-radius: 50%; /* Torna os botões redondos */
    transition: background-color 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75rem;
    &:hover {
      background-color: blue;
    }
  }
}

@media (max-width: 2200px) {
  display: flex;
  justify-content: center;
  margin: 2rem 0; /* Ajuste a margem superior e inferior conforme necessário */
  button {
    background-color: #808080;
    border: none;
    width: 20px;
    height: 20px;
    margin: 0 10px; /* Espaçamento horizontal entre os botões */
    cursor: pointer;
    border-radius: 50%; /* Torna os botões redondos */
    transition: background-color 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75rem;
    &:hover {
      background-color: blue;
    }
  }

@media (max-width: 1700px) {
  display: flex;
  justify-content: center;
  margin: 2rem 0; /* Ajuste a margem superior e inferior conforme necessário */
  button {
    background-color: #808080;
    border: none;
    width: 20px;
    height: 20px;
    margin: 0 10px; /* Espaçamento horizontal entre os botões */
    cursor: pointer;
    border-radius: 50%; /* Torna os botões redondos */
    transition: background-color 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75rem;
    &:hover {
      background-color: blue;
    }
  }
}

  @media (max-width: 1028px) {
    display: flex;
  justify-content: center;
  margin-top: 2rem;
  button {
    background-color: #808080;
    border: none;
    width: 20px;
    height: 20px;
    margin: 0 10px;
    cursor: pointer;
    border-radius: 50%;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: blue;
    }
  }
    button {
      margin: 0 5px;
    }
  }
}
`;

const InfoSection = styled.section`
  padding: 4rem 2rem;
  text-align: center;
  background-color: #f9f9f9;
  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  p {
    font-size: 1rem;
    margin-bottom: 1rem;
    max-width: 800px;
    margin: 0 auto;
  }

  @media (max-width: 2600px){
    padding: 4rem 2rem;
  text-align: center;
  background-color: #f9f9f9;
  h3 {
    font-size: 2cm;
    margin-bottom: 1rem;
  }
  p {
    font-size: 0.8cm;
    margin-bottom: 1rem;
    max-width: 95%;
    margin: 0 auto;
  }
  }

  @media (max-width: 430px){
  padding: 4rem 2rem;
  text-align: center;
  background-color: #f9f9f9;
  h3 {
    font-size: 1cm;
    margin-bottom: 1rem;
  }
  p {
    font-size: 0.5cm;
    margin-bottom: 1rem;
    max-width: 95%;
    margin: 0 auto;
  }
  }
  
`;

const HighlightedButton = styled.a`
  display: block;
  background-color: #ff4500;
  color: #ffffff;
  padding: 1rem 2rem;
  margin: 2rem auto;
  text-align: center;
  border-radius: 8px;
  font-size: 1.25rem;
  font-weight: bold;
  text-decoration: none;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #e63946;
  }

  @media (max-width: 2600px){
    font-size: 1.5rem;
  }
`;

const TestimonialsSection = styled.section`
  background-color: #f9f9f9;
  text-align: center;

  h3{
    font-size: 1cm;
  }
`;

const TestimonialsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 5rem;
`;

const Testimonial = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TestimonialImage = styled.img`
  width: 110%;
  height: 110%;
  border-radius: 10px;
  object-fit: cover;
  margin-bottom: 1rem;
`;

const TestimonialText = styled.p`
  font-size: 1.5rem;
  color: #333;
  max-width: 100%;
  margin: 0;
  text-align: center;
`;

const TipsSection = styled.section`
  padding: 2rem 2rem;
  background-color: #e0e0e0;
  text-align: center;
  font-size: 1cm;
`;

const TipsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 2rem;
`;

const Tip = styled.div`
  width: 22%;
  background: white;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    margin-bottom: 1rem;
  }
  h4 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }
  p {
    font-size: 1.5rem;
    color: #333;
  }

  @media (max-width: 770px) {
    width: 45%; /* Adapta as dicas para telas menores */
  }

  @media (max-width: 430px) {
    width: 100%;
  }
`;

const HomePage = () => {
  const slides = [
    { image: image1, title: "Banner AutoCarePlus", description: "Transforme a gestão da sua oficina com nossa plataforma completa." },
    { image: image2, title: "Manutenção Corretiva", description: "Soluções rápidas para problemas inesperados nos veículos." },
    { image: image3, title: "Manutenção Preventiva", description: "Prevenção é o melhor caminho. Mantenha seus veículos em dia." },
    { image: image4, title: "Melhores Peças", description: "Trabalhamos apenas com as melhores peças do mercado." },
    { image: image5, title: "Troca de Óleo", description: "Oferecemos serviços especializados de troca de óleo." }
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
        <h2>Bem Vindo a AutoCarePlus</h2>
        <p>Utilize Inteligência Artificial para diagnosticar falhas no seu veículo em tempo real, obter o valor do reparo e encontrar as oficinas mais próximas para realizar o serviço.</p>
      </HeroSection>

      <CarouselSection>
        <TextContainer>
          <h2>{slides[currentImageIndex].title}</h2>
          <p>{slides[currentImageIndex].description}</p>
        </TextContainer>
        <ImageContainer>
          <img src={slides[currentImageIndex].image} alt="Banner AutoCarePlus" />
        </ImageContainer>
        </CarouselSection>
        <ButtonsContainer>
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              style={{ backgroundColor: index === currentImageIndex ? 'blue' : 'gray' }}
            />
          ))}
        </ButtonsContainer>

      <InfoSection>
        <h3>Com a AutoCarePlus, você tem:</h3>
        <p>Assistência completa para realizar manutenções corretivas e preventivas, além de contar com uma rede de oficinas credenciadas e a segurança de utilizar peças novas ou renovadas com garantia.</p>
        <HighlightedButton href="/clientes">Área do Cliente</HighlightedButton>
      </InfoSection>

      <TestimonialsSection>
        <h3>O que nossos clientes dizem:</h3>
        <TestimonialsContainer>
          <Testimonial>
            <TestimonialImage src={testimonial2} alt="Depoimento Cliente 2" />
            <TestimonialText>"Diagnosticar a falha do carro nunca foi tão rápido e fácil."</TestimonialText>
          </Testimonial>
          <Testimonial>
            <TestimonialImage src={testimonial3} alt="Depoimento Cliente 3" />
            <TestimonialText>"Consegui agendar e realizar o serviço em tempo recorde!"</TestimonialText>
          </Testimonial>
        </TestimonialsContainer>
      </TestimonialsSection>

      <TipsSection>
        <h3>Dicas de Manutenção:</h3>
        <TipsContainer>
          <Tip>
            <img src={tip1} alt="Dica 1" />
            <h4>Troca de Óleo</h4>
            <p>Mantenha o óleo do seu carro sempre em dia para evitar problemas.</p>
          </Tip>
          <Tip>
            <img src={tip2} alt="Dica 2" />
            <h4>Freios</h4>
            <p>Verifique o sistema de freios regularmente para garantir sua segurança.</p>
          </Tip>
          <Tip>
            <img src={tip3} alt="Dica 3" />
            <h4>Pneus</h4>
            <p>Faça o rodízio dos pneus a cada 10 mil km e mantenha a calibragem adequada.</p>
          </Tip>
          <Tip>
            <img src={tip4} alt="Dica 4" />
            <h4>Bateria</h4>
            <p>Evite surpresas e troque a bateria do carro a cada dois anos.</p>
          </Tip>
        </TipsContainer>
      </TipsSection>
    </Container>
  );
};

export default HomePage;
