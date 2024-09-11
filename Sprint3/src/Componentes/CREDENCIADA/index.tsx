import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

const CredenciadaContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-radius: 12px;
  margin: 2rem auto;
  height: 100%;
  width: 80%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
margin-top: 4cm;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

const OrcamentoWrapper = styled.div`
  background-color: #f9f9f9;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  width: 100%;
  max-width: 500px;
  margin-top: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const OrcamentoTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 10px;
`;

const OrcamentoDetail = styled.p`
  font-size: 16px;
  margin-bottom: 5px;
  color: #333;
`;

const PaginaDaCredenciada: React.FC = () => {
  const location = useLocation();
  const orcamento = location.state?.orcamento;

  // Caso não haja orçamento, exibir mensagem informativa
  if (!orcamento) {
    return (
      <CredenciadaContainer>
        <Title>Orçamentos</Title>
        <p>Nenhum orçamento disponível no momento.</p>
      </CredenciadaContainer>
    );
  }

  return (
    <CredenciadaContainer>
      <Title>Orçamento Recebido</Title>
      <OrcamentoWrapper>
        <OrcamentoTitle>Detalhes do Orçamento</OrcamentoTitle>
        <OrcamentoDetail>Peças a serem trocadas: {orcamento.pecas}</OrcamentoDetail>
        <OrcamentoDetail>Data do Orçamento: {orcamento.data}</OrcamentoDetail>
      </OrcamentoWrapper>
    </CredenciadaContainer>
  );
};

export default PaginaDaCredenciada;
