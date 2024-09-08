// src/Componentes/Texto/index.tsx
import React from 'react';
import styled, { keyframes } from 'styled-components';
import Icone from './imagens/Icone de carro.png'; // Substitua pelo caminho correto da sua imagem

// Animação para mover a imagem horizontalmente
const moverHorizontalmente = keyframes`
  0% {
    left: 0;
  }
  100% {
    left: calc(100% - 167px);
  }
`;

// Styled Component para o contêiner de texto
const TextoContainer = styled.div`
  position: absolute;
  top: 163px;
  left: 0;
  width: 50%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
  background-color: white;
  border: 10px solid #000000;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -1.9cm;


  span {
    font-size: 20px;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    margin-bottom: 20px;
    color: red;
  }

  h1 {
    font-size: 36px;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    margin-bottom: 20px;
    text-align: center;
  }

  p {
    font-size: 20px;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    line-height: 1.5;
    margin-top: 20px;
    text-align: center;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    padding: 10px;
  }
`;

// Styled Component para o contêiner da imagem
const ImagemContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

// Styled Component para a imagem do carro
const IconeCarro = styled.img`
  width: 167px;
  height: 147px;
  border-radius: 20px;
  position: absolute;
  animation: ${moverHorizontalmente} 5s infinite alternate;

  @media (max-width: 768px) {
    width: 100px;
    height: 90px;
  }
`;

// Styled Component para o subtítulo
const Subtitulo = styled.h2`
  font-size: 20px;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  line-height: 1.5;
  margin-top: auto;
  text-align: center;
  margin-bottom: 200px;
`;

function Texto() {
  return (
    <TextoContainer>
      <h1>Está com problemas no seu veículo?</h1>
      <p>
        <span>Não se preocupe! Com a AutoCarePlus,</span> você pode diagnosticar falhas em segundos e agendar serviços de onde estiver
      </p>
      <ImagemContainer>
        <IconeCarro src={Icone} alt="Ícone do Carro" />
      </ImagemContainer>
      <Subtitulo>Bem-vindo ao novo jeito de cuidar do seu carro!</Subtitulo>
    </TextoContainer>
  );
}

export default Texto;
