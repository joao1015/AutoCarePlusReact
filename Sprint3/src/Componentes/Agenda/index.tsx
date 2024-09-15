import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

const extractPecas = (text: string): string => {
  const pecasMatch = text.match(/Descrição dos Serviços:\s*(.+)/);
  return pecasMatch ? pecasMatch[1] : 'Não especificado';
};

const extractModelo = (text: string): string => {
  const modeloMatch = text.match(/Modelo:\s*(.+)/);
  return modeloMatch ? modeloMatch[1] : 'Não especificado';
};

const extractAno = (text: string): string => {
  const anoMatch = text.match(/Ano:\s*(.+)/);
  return anoMatch ? anoMatch[1] : 'Não especificado';
};

const extractPlaca = (text: string): string => {
  const placaMatch = text.match(/Placa:\s*(.+)/);
  return placaMatch ? placaMatch[1] : 'Não especificado';
};

const extractDados = (text: string) => {
  return {
    pecas: extractPecas(text),
    modelo: extractModelo(text),
    ano: extractAno(text),
    placa: extractPlaca(text),
  };
};

const AgendamentoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-radius: 12px;
  margin: 2rem auto;
  height: 100%;
  width: 100%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  margin-top: 2cm;
`;

const BalloonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1cm;
  flex-wrap: nowrap;
  overflow-x: auto;
`;

const Balloon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #0d00ff;
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: 15px;
  width: 245px;
  height: 255px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: transform 0.2s ease;
  border-width: 10px;

  &:hover {
    transform: scale(1.05);
  }
`;

const BalloonTitle = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;
`;

const BalloonDescription = styled.p`
  font-size: 14px;
  text-align: center;
`;

const SuccessMessage = styled.p`
  font-size: 18px;
  color: green;
  margin-top: 20px;
  font-weight: bold;
`;

const Agendamento: React.FC = () => {
  const location = useLocation();
  const lastMessage = location.state?.lastMessage || 'Nenhum orçamento disponível.';
  const [success, setSuccess] = useState(false);

  const { pecas, modelo, ano, placa } = extractDados(lastMessage);
  const data = new Date().toLocaleDateString();

  const oficinas = [
    {
      id: 1,
      title: 'Oficina A',
      localStorageKey: 'oficinaA'
    },
    {
      id: 2,
      title: 'Oficina B',
      localStorageKey: 'oficinaB'
    },
    {
      id: 3,
      title: 'Oficina C',
      localStorageKey: 'oficinaC'
    },
  ];

  const handleSelectOfficina = (localStorageKey: string) => {
    const orcamento = { pecas, modelo, ano, placa, data };
    const storedOrcamentos = JSON.parse(localStorage.getItem('orcamentos') || '[]');
    storedOrcamentos.push({ oficinaKey: localStorageKey, orcamento });
    localStorage.setItem('orcamentos', JSON.stringify(storedOrcamentos));
    setSuccess(true);
  };

  return (
    <AgendamentoContainer>
      <h1>Agendamento</h1>
      <p>Último orçamento: {lastMessage}</p>

      <BalloonsWrapper>
        {oficinas.map((oficina) => (
          <Balloon key={oficina.id} onClick={() => handleSelectOfficina(oficina.localStorageKey)}>
            <BalloonTitle>{oficina.title}</BalloonTitle>
            <BalloonDescription>
              Modelo: {modelo}<br/>
              Ano: {ano}<br/>
              Placa: {placa}<br/>
              Peças a serem trocadas: {pecas}
            </BalloonDescription>
          </Balloon>
        ))}
      </BalloonsWrapper>

      {success && <SuccessMessage>Agendamento realizado com sucesso!</SuccessMessage>}
    </AgendamentoContainer>
  );
};

export default Agendamento;
