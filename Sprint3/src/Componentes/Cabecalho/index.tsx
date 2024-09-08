// src/Componentes/Cabecalho/index.tsx
import React from 'react';
import styled from 'styled-components';
import logo from './Imagems/LogoAutoCareplus.png'; // Substitua pelo caminho correto da sua imagem
import { Link } from 'react-router-dom'; // Importa o Link para navegação

// Styled Component para o cabeçalho
const CabecalhoContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 2.5cm;
  background-color: #000;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  box-sizing: border-box;
  z-index: 1000;
`;

// Styled Component para a logo
const Logo = styled.img`
  height: 100%;
  object-fit: contain;
`;

// Styled Component para o botão "Sobre Nós"
const SobreNosButton = styled(Link)`
  padding: 10px 20px;
  background-color: #ffffff;
  color: #000000;
  text-decoration: none;
  border-radius: 5px;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 16px;
  display: inline-block;
  transition: background-color 0.3s;
  margin-left: 25cm;

  &:hover {
    background-color: #0056b3;
  }
`;

function Cabecalho() {
  return (
    <CabecalhoContainer>
      <Logo src={logo} alt="Logo do Aplicativo" />
      <SobreNosButton to="/sobrenos">Sobre Nós</SobreNosButton>
    </CabecalhoContainer>
  );
}

export default Cabecalho;
