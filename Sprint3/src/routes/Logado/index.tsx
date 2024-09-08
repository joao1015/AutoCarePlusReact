// src/Paginas/PaginaLogada.tsx
import React from 'react';
import styled from 'styled-components';
import Cabecalho from '../../Componentes/Cabecalho';
import Rodape from '../../Componentes/Rodape';
import Sidebar from '../../Componentes/SideBar';
import { useNavigate } from 'react-router-dom'; // Para redirecionar após o logout

interface Usuario {
  nome: string;
}

// Styled Component para o conteúdo principal
const ConteudoPrincipal = styled.div`
  margin-left: 200px; /* Espaçamento para a sidebar */
  padding: 20px;
`;

const PaginaLogada: React.FC = () => {
  const navigate = useNavigate(); // Hook para redirecionar após o logout

  // Recupera o usuário do localStorage
  const usuarioData = localStorage.getItem('usuarioLogado');
  const usuario: Usuario | null = usuarioData ? JSON.parse(usuarioData) : null;

  return (
    <div>
      {/* Passa o usuário como prop para o Cabecalho e Sidebar */}
      <Cabecalho usuario={usuario} />
      <Sidebar usuario={usuario} />
      <ConteudoPrincipal>
        {/* Conteúdo principal */}
        <main>
          {/* Adicione aqui o conteúdo da página */}
        </main>
      </ConteudoPrincipal>
      <Rodape />
    </div>
  );
};

export default PaginaLogada;
