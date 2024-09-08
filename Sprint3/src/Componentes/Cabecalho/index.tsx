import React from 'react';
import styled from 'styled-components';
import logo from './Imagems/LogoAutoCareplus.png'; // Substitua pelo caminho correto da sua imagem
import { Link } from 'react-router-dom';

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
  margin-left: auto;

  &:hover {
    background-color: #0056b3;
  }
`;

// Styled Component para o contêiner de informações do usuário
const UsuarioInfo = styled.div`
  display: flex;
  align-items: center;
`;

// Styled Component para o avatar do usuário
const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid #fff; // Adiciona uma borda branca ao redor do avatar
  margin-right: 10px; // Espaçamento entre o avatar e o nome do usuário
`;

// Styled Component para o nome do usuário
const Nome = styled.span`
  font-size: 18px;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  color: #fff;
  margin-left: 15px; // Espaçamento entre o nome e o botão "Sobre Nós"
  display: flex;
  align-items: center; // Alinha verticalmente o texto
  padding: 0 10px; // Adiciona um pouco de padding para espaçamento interno
  background-color: #333; // Fundo do nome, para destacar o texto
  border-radius: 5px; // Adiciona bordas arredondadas
`;

interface CabecalhoProps {
  usuario?: {
    nome: string;
    avatarUrl?: string; // Adiciona a URL do avatar ao tipo do usuário
  } | null;
}

const Cabecalho: React.FC<CabecalhoProps> = ({ usuario }) => {
  return (
    <CabecalhoContainer>
      <Logo src={logo} alt="Logo do Aplicativo" />
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <SobreNosButton to="/sobrenos">Sobre Nós</SobreNosButton>
        {usuario && (
          <UsuarioInfo>
            {usuario.avatarUrl && <Avatar src={usuario.avatarUrl} alt="Avatar do Usuário" />}
            <Nome>{usuario.nome}</Nome>
          </UsuarioInfo>
        )}
      
      </div>
    </CabecalhoContainer>
  );
};

export default Cabecalho;
