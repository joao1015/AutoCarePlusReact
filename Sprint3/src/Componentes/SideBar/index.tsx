// src/Componentes/Sidebar/index.tsx
import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom'; // Para redirecionar após o logout

// Define o tipo Usuario
interface Usuario {
  nome: string;
}

// Styled Component para a Sidebar
const SidebarContainer = styled.div`
  width: 200px; /* Largura da sidebar */
  height: 100vh; /* Altura da sidebar para preencher a tela */
  background-color: #000; /* Cor de fundo preta */
  color: #fff; /* Texto branco */
  display: flex;
  flex-direction: column; /* Alinha os itens verticalmente */
  padding: 20px;
  box-sizing: border-box;
  margin-left: -1cm;
  margin-top: 2cm;
`;

// Styled Component para o botão de deslogar
const BotaoDeslogar = styled.button`
  background-color: #ffffff; /* Preto */
  color: #000000; /* Texto branco */
  border: none; /* Remove a borda padrão */
  padding: 10px 20px; /* Espaçamento interno */
  font-size: 16px; /* Tamanho da fonte */
  cursor: pointer; /* Muda o cursor ao passar sobre o botão */
  border-radius: 5px; /* Borda arredondada */
  transition: background-color 0.3s ease; /* Transição suave para a cor de fundo */
  margin-left: 20px;

  &:hover {
    background-color: #333; /* Cor de fundo ao passar o mouse */
  }
`;

// Styled Component para a mensagem de boas-vindas
const MensagemBoasVindas = styled.div`
  margin-bottom: 20px; /* Espaçamento inferior */
  font-family: 'Poppins', sans-serif;
  font-size: 10px;
  font-weight: 600;
  margin-left: 10px;
`;

const Sidebar: React.FC<{ usuario: Usuario | null }> = ({ usuario }) => {
  const navigate = useNavigate(); // Hook para redirecionar após o logout

  // Função para lidar com o deslogar
  const handleLogout = () => {
    localStorage.removeItem('usuarioLogado'); // Remove o usuário do localStorage
    navigate("/entrar"); // Redireciona para a página de login
  };

  return (
    <SidebarContainer>
      <MensagemBoasVindas>
        {usuario ? `Bem-vindo, ${usuario.nome}` : 'Bem-vindo!'}
      </MensagemBoasVindas>
     
      <BotaoDeslogar onClick={handleLogout}>Deslogar</BotaoDeslogar>
    </SidebarContainer>
  );
};

export default Sidebar;
