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
import tip1 from './imagens/DICA 1.png'; // Imagem para Dica 1
import tip2 from './imagens/DICA 2.png'; // Imagem para Dica 2
import tip3 from './imagens/DICA 3.png'; // Imagem para Dica 3
import tip4 from './imagens/DICA 4.png'; // Imagem para Dica 4

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
    font-size: 1cm;
    margin-bottom: 1rem;
  }
  p {
    font-size: 0.5cm;
  }
`;

const CarouselSection = styled.section`
  display: flex;
  justify-content: space-between;
  background-color: blue;
  align-items: center;
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
  margin-left: 1cm; /* Adiciona espaçamento entre a imagem e o container */
  img {
    width: 20cm;
    height: 15cm;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

const ButtonsContainer = styled.div`
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
  a {
    color: #003366;
    text-decoration: none;
    font-weight: bold;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const HighlightedButton = styled.a`
  display: block;
  background-color: #ff4500; /* Laranja chamativo */
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
    background-color: #e63946; /* Cor mais escura no hover */
  }
`;

const TestimonialsSection = styled.section`
  padding: 4rem 0;
  background-color: #f9f9f9;
  text-align: center;
`;

const TestimonialsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem; /* Espaçamento entre os depoimentos */
`;

const Testimonial = styled.div`
  width: 250px; /* Tamanho fixo para os depoimentos */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TestimonialImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px; /* Ajuste a borda conforme preferir */
  object-fit: cover; /* Mantém a proporção da imagem sem distorção */
  margin-bottom: 1rem;
`;

const TestimonialText = styled.p`
  font-size: 1rem;
  color: #333;
  max-width: 100%;
  margin: 0;
  text-align: center;
`;

const TipsSection = styled.section`
  padding: 4rem 2rem;
  background-color: #e0e0e0;
  text-align: center;
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
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
  }
  p {
    font-size: 1rem;
    color: #333;
  }
`;

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
        <h2>Bem Vindo a AutoCarePlus</h2>
        <p>Utilize Inteligência Artificial para diagnosticar falhas no seu veículo em tempo real, obter o valor do reparo e encontrar as oficinas mais próximas para realizar o serviço.</p>
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
            {index + 1}
          </button>
        ))}
      </ButtonsContainer>

      <InfoSection>
        <h3>Como Funciona Nossa Solução de IA</h3>
        <p>Nosso sistema utiliza Inteligência Artificial para fornecer diagnósticos rápidos e precisos para seu veículo. Basta inserir as informações do seu carro, e nossa IA irá analisar e oferecer um diagnóstico, estimar o custo do reparo e localizar as oficinas mais próximas para você. Experimente a tecnologia que transforma a manutenção do seu veículo!</p>
        <a href="/ConhecaAuto">Saiba Mais sobre Nossa Tecnologia</a>
        <HighlightedButton href="/entrar">Clique Aqui para Acessar Nossa Inovação</HighlightedButton>
      </InfoSection>

      <TipsSection>
        <h2>Por Que Utilizar Nossos Serviços?</h2>
        <TipsContainer>
          <Tip>
            <img src={tip1} alt="Dica 1" />
            <h4>Diagnóstico Preciso</h4>
            <p>Utilizamos IA avançada para oferecer diagnósticos rápidos e precisos, ajudando você a resolver problemas com eficiência.</p>
          </Tip>
          <Tip>
            <img src={tip2} alt="Dica 2" />
            <h4>Reduza o Tempo de Espera</h4>
            <p>Encontre as oficinas mais próximas e agende seu serviço sem complicações, economizando tempo e evitando transtornos.</p>
          </Tip>
          <Tip>
            <img src={tip3} alt="Dica 3" />
            <h4>Peças de Qualidade</h4>
            <p>Trabalhamos com as melhores peças do mercado, garantindo a durabilidade e a performance do seu veículo.</p>
          </Tip>
          <Tip>
            <img src={tip4} alt="Dica 4" />
            <h4>Atendimento Personalizado</h4>
            <p>Oferecemos um atendimento personalizado para atender às suas necessidades específicas, com soluções feitas sob medida.</p>
          </Tip>
        </TipsContainer>
      </TipsSection>

      <TestimonialsSection>
        <h2>O que nossos clientes dizem</h2>
        <TestimonialsContainer>
          <Testimonial>
            <TestimonialImage src={testimonial1} alt="Cliente 1" />
            <TestimonialText>“A AutoCarePlus transformou a forma como mantenho meu carro. O diagnóstico rápido e preciso ajudou a economizar tempo e dinheiro!” – João S.</TestimonialText>
          </Testimonial>
          <Testimonial>
            <TestimonialImage src={testimonial2} alt="Cliente 2" />
            <TestimonialText>“A tecnologia de IA da AutoCarePlus é impressionante. Fiquei surpreso com a precisão do diagnóstico e a facilidade de encontrar uma oficina perto de mim.” – Juliana L.</TestimonialText>
          </Testimonial>
          <Testimonial>
            <TestimonialImage src={testimonial3} alt="Cliente 3" />
            <TestimonialText>“Excelente serviço! Recebi o valor do reparo em tempo real e pude agendar o serviço sem complicações. Recomendo a todos!” – Maria A.</TestimonialText>
          </Testimonial>
        </TestimonialsContainer>
      </TestimonialsSection>
    </Container>
  );
};

export default HomePage;
