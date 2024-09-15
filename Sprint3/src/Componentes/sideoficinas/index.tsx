import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SidebarContainer = styled.div`
  width: 250px;
  background-color: #ff0000;
  height: 100vh;
  padding: 20px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
`;

const SidebarLink = styled(Link)`
  display: block;
  padding: 10px;
  color: #333;
  text-decoration: none;
  font-size: 18px;
  margin-bottom: 10px;
  border-radius: 4px;
  &:hover {
    background-color: #ddd;
  }
`;

function Side() {
  return (
    <SidebarContainer>
      <SidebarLink to="/orcamentosrecebidos">Orçamentos Recebidos</SidebarLink>
      <SidebarLink to="/gestao-orcamentos">Gestão de Orçamentos</SidebarLink>
      <SidebarLink to="/ordens-finalizadas">Ordens Finalizadas</SidebarLink>
    </SidebarContainer>
  );
}

export default Side;
