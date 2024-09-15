import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import logo from './Imagems/LogoAutoCareplus.png';
import { Link, NavLink } from 'react-router-dom';
import { FiHome, FiInfo, FiTool } from 'react-icons/fi';
import { FaCar } from 'react-icons/fa';

// Styled Components corrigidos
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
  margin-right: 50px;
  margin-top: -10px;

  &:hover {
    border-bottom: 2px solid #007bff;
  }
`;

const Logo = styled.img`
  height: auto;
  width: 23%;
  cursor: pointer;
  background-color: #000000;
  margin-top: 0.3cm;
  margin-right: 1cm;
  margin-left: -0.4cm;
`;

const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-grow: 1; /* Faz o menu ocupar o espaço disponível */
  justify-content: flex-start; /* Alinha os links à esquerda */
`;

const NavLinkStyled = styled(NavLink)`
  color: #000000;
  text-decoration: none;
  font-family: 'Poppins', sans-serif;
  font-size: 17px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 17px;
  border-radius: 5px;
  font-weight: bold;

  &.active {
    color: #007bff;
  }

  &:hover {
    color: #007bff;
  }
`;

const AreaDoClienteButton = styled(Link)`
  background-color: #ffffff;
  color: #007bff;
  border: 3px solid #007bff;
  padding: 1px 25px; 
  border-radius: 5px;
  text-decoration: none;
  font-family: 'Poppins', sans-serif;
  font-weight: bold;
  margin-left: auto; 
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #007bff;
    color: #ffffff;
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
      <AreaDoClienteButton to="/area-do-cliente">
        Área do Cliente
      </AreaDoClienteButton>
    </CabecalhoContainer>
  );
};

export default Cabecalho;

