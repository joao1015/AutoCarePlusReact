import React from 'react';
import styled from 'styled-components';
import logo from './Imagems/LogoAutoCareplus.png';
import { Link, NavLink } from 'react-router-dom';
import { FiHome, FiInfo, FiTool, FiUser } from 'react-icons/fi';
import { FaCar } from 'react-icons/fa';

// Styled Components
const CabecalhoContainer = styled.header`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 4cm;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  box-sizing: border-box;
  z-index: 1000;
  border-bottom: 2px solid #000000;

  &:hover {
    border-bottom: 2px solid #007bff;
  }

  @media (max-width: 1024px) {
    height: 10cm;
    flex-direction: column;
    justify-content: center;
    padding: 8rem;
    width: auto;
  }

  @media (max-width: 800px) { 
    height: 1cm;
  }

  @media (max-width: 530px) { 
    padding: 1rem;  
    height: auto ;
      

  }
`;

const Logo = styled.img`
  height: auto;
  width: 20%;
  cursor: pointer;

  @media (max-width: 1024px) {
    height: 5cm;
    width: 6cm;
    margin-left: 1.5cm;
  }

  @media (max-width: 800px) {
    width: 3cm;
    height: 3cm;
 

  }

  @media (max-width: 530px) { 
    margin-right: 1.3cm;
  }
`;

const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-grow: 1;
  justify-content: flex-start;

  @media (max-width: 1024px) {
  width: auto;
}

  @media (max-width: 800px) {

    width: auto;
    height: 3cm;
    margin-left: 1cm;

  }

  @media (max-width: 530px) {

    justify-content: center;
    flex-direction: column;
    gap: 0.5rem;
    margin-top: 1rem;
    height: auto;
    margin-left: 0cm;
    
   
  }
`;

const NavLinkStyled = styled(NavLink)`
  color: #000000;
  text-decoration: none;
  font-family: 'Poppins', sans-serif;
  font-size: 17px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  font-weight: bold;

  &.active {
    color: #007bff;
  }

  &:hover {
    color: #007bff;
  }

  @media (max-width: 1024px) {
  width: auto;
  font-size: 17px;
} 

  @media (max-width: 800px) {
    font-size: 10px;

  }

  @media (max-width: 530px) { 
    font-size: 12px;
    padding: 0.5rem;
  }
`;

const AreaDoClienteButton = styled(Link)`
  background-color: #ffffff;
  color: #007bff;
  border: 2px solid #007bff;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  text-decoration: none;
  font-family: 'Poppins', sans-serif;
  font-weight: bold;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #007bff;
    color: #ffffff;
  }
  @media (max-width: 1500px){
    
  }

  @media (max-width: 1024px) {
    height: 1cm;
    width: 4.5cm;
    margin-top: 0.6cm;
    margin-left: 0.7cm;
  }

  @media (max-width: 800px) {
    font-size: 10px;
    width: 3cm;
    margin-bottom: 1cm;
    width: 3.1cm;
  }

  @media (max-width: 530px) { 
    padding: -1rem 1rem;
    font-size: 12px;
    width: 3.5cm;

  }
`;

interface CabecalhoProps {
  usuario?: {
    nome: string;
    avatarUrl?: string;
  } | null;
}

const Cabecalho: React.FC<CabecalhoProps> = ({ usuario }) => {
  return (
    <CabecalhoContainer>
      <Link to="/">
        <Logo src={logo} alt="Logo do AutoCarePlus" />
      </Link>
      <NavContainer>
        <NavLinkStyled to="/">
          <FiHome /> Início
        </NavLinkStyled>
        <NavLinkStyled to="/SejaCadastrado">
          <FiUser /> Seja Cadastrado
        </NavLinkStyled>
        <NavLinkStyled to="/loginOficinas">
          <FiTool /> Oficinas Credenciadas
        </NavLinkStyled>
        <NavLinkStyled to="/ConhecaAuto">
          <FaCar /> Conheça o AutoCarePlus
        </NavLinkStyled>
        <NavLinkStyled to="/sobrenos">
          <FiInfo /> Sobre Nós
        </NavLinkStyled>
      </NavContainer>
      <AreaDoClienteButton to="/entrar">
        Área do Cliente
      </AreaDoClienteButton>
    </CabecalhoContainer>
  );
};

export default Cabecalho;
