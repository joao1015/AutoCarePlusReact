import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import logo from './Imagems/LogoAutoCareplus.png';
import { Link, NavLink } from 'react-router-dom';
import { FiMenu, FiHome, FiInfo, FiTool, FiUser } from 'react-icons/fi';
import { FaCar } from 'react-icons/fa';

// Styled Components corrigidos
const CabecalhoContainer = styled.header`
  position: relative;
  top: 0;
  left: 0;
  width: 101%;
  height: 2cm;
  background-color: #A3DFF6;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  box-sizing: border-box;
  z-index: 1000;
  border: 0; /* Reseta todas as bordas */
  border-bottom: 2px solid #000000; /* Adiciona borda apenas embaixo */
  transition: border-bottom 0.3s ease; /* Transição suave para a borda inferior */
  margin-right: 50px;
  margin-top: -10px;

  &:hover {
    border-bottom: 2px solid #007bff; /* Muda a cor da borda ao passar o mouse */
  }
`;

const Logo = styled.img`
  height: auto;
  width: 30%;
  object-fit: contain;
  cursor: pointer;
  background-color: #000000;
  margin-top: 1cm;
  margin-right: -45px;
  margin-left: -1cm;
`;

const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const NavLinkStyled = styled(NavLink)`
  color: #000000;
  text-decoration: none;
  font-family: 'Poppins', sans-serif;
  font-size: 18px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 10px;
  border-radius: 5px;
  transition: background-color 0.3s;
  font-weight: bold;

  &.active {
    color: #007bff;
  }

  &:hover {
    color: #007bff;
  }
`;

const MenuButton = styled.button`
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  padding: 10px;
  margin-left: 10px;

  &:hover {
    color: #ffffff;
  }
`;

const UsuarioInfo = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid #fff;
  margin-right: 10px;
`;

const Nome = styled.span`
  font-size: 16px;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  color: #fff;
  margin-left: 15px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  background-color: #333;
  border-radius: 5px;
`;

interface MenuDropdownProps {
  open: boolean;
}

const MenuDropdown = styled.div<MenuDropdownProps>`
  position: absolute;
  top: 100%;
  right: 0;
  background-color: #fff;
  color: #cfcfcf;
  min-width: 160px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  border-radius: 5px;
  display: ${(props) => (props.open ? 'block' : 'none')};
`;

const DropdownItem = styled(Link)`
  color: #000;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  font-family: 'Poppins', sans-serif;
  font-size: 14px;

  &:hover {
    background-color: #ddd;
  }
`;

interface CabecalhoProps {
  usuario?: {
    nome: string;
    avatarUrl?: string;
  } | null;
}

const Cabecalho: React.FC<CabecalhoProps> = ({ usuario }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

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
          <FiInfo /> Cadastro de Clientes AutoCarePlus
        </NavLinkStyled>
        <NavLinkStyled to="/loginOficinas">
          <FiTool /> Oficinas Credenciadas
        </NavLinkStyled>
        <NavLinkStyled to="/conheca">
          <FaCar /> Conheça o AutoCarePlus
        </NavLinkStyled>
        <NavLinkStyled to="/SejaCadastrado">
          <FiUser /> Clientes AutoCarePlus
        </NavLinkStyled>
        <NavLinkStyled to="/sobrenos">
          <FiInfo /> Sobre Nós
        </NavLinkStyled>
      </NavContainer>

      {usuario && (
        <UsuarioInfo>
          {usuario.avatarUrl && <Avatar src={usuario.avatarUrl} alt="Avatar do Usuário" />}
          <Nome>{usuario.nome}</Nome>
          <MenuButton onClick={toggleMenu}>
            <FiMenu />
          </MenuButton>
          <MenuDropdown ref={menuRef} open={menuOpen}>
            <DropdownItem to="/login">Login</DropdownItem>
            <DropdownItem to="/oficinas">Oficinas</DropdownItem>
            <DropdownItem to="/informacoes-oficinas">Informações de Oficinas</DropdownItem>
            <DropdownItem to="/servico">Serviço do AutoCarePlus</DropdownItem>
          </MenuDropdown>
        </UsuarioInfo>
      )}
    </CabecalhoContainer>
  );
};

export default Cabecalho;
