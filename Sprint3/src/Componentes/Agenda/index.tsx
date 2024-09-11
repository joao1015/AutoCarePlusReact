import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const extractPecas = (text: string) => {
  const pecasMatch = text.match(/Descrição dos Serviços:\s*(.+)/);
  return pecasMatch ? pecasMatch[1] : 'Não especificado';
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
  const navigate = useNavigate();
  const lastMessage = location.state?.lastMessage || 'Nenhum orçamento disponível.';
  const [selectedOfficina, setSelectedOfficina] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const pecas = extractPecas(lastMessage);
  const data = new Date().toLocaleDateString();

  const oficinas = [
    {
      id: 1,
      title: 'Oficina A',
      description: `Peças a serem trocadas: ${pecas}`,
      loginPath: '/login/oficinaA'
    },
    {
      id: 2,
      title: 'Oficina B',
      description: `Peças a serem trocadas: ${pecas}`,
      loginPath: '/login/oficinaB'
    },
    {
      id: 3,
      title: 'Oficina C',
      description: `Peças a serem trocadas: ${pecas}`,
      loginPath: '/login/oficinaC'
    },
  ];

  const handleSelectOfficina = (loginPath: string) => {
    setSelectedOfficina(loginPath);
    localStorage.setItem('orcamento', JSON.stringify({ pecas, data }));
    
    // Mostrar mensagem de sucesso sem redirecionar
    setSuccess(true);
  };

  return (
    <AgendamentoContainer>
      <h1>Agendamento</h1>
      <p>Último orçamento: {lastMessage}</p>

      <BalloonsWrapper>
        {oficinas.map((oficina) => (
          <Balloon key={oficina.id} onClick={() => handleSelectOfficina(oficina.loginPath)}>
            <BalloonTitle>{oficina.title}</BalloonTitle>
            <BalloonDescription>{oficina.description}</BalloonDescription>
          </Balloon>
        ))}
      </BalloonsWrapper>

      {success && <SuccessMessage>Agendamento realizado com sucesso!</SuccessMessage>}
    </AgendamentoContainer>
  );
};

export default Agendamento;
