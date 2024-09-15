import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import oficinaAImage from './imagens/garagem.png'; // Adjust the path as needed
import oficinaBImage from './imagens/servico-automotivo (1).png';
import oficinaCImage from './imagens/servico-automotivo.png';

// Extract data functions
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

// Styled components for Modal
const ModalOverlay = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  z-index: 1000;
  border-radius: 12px;
`;

const ModalContent = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 22px;
  max-width: 500px;
  width: 100%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  position: relative;
`;

const CloseButton = styled.button`
  background: #f44336;
  color: #000000;
  border: none;
  padding: 10px;
  border-radius: 50%;
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;

  &:hover {
    background: #ffffff;
  }
`;

const ModalTitle = styled.h2`
  margin: 0 0 10px 0;
  font-size: 24px;
`;

const ModalMessage = styled.p`
  font-size: 16px;
  margin: 0;
`;

const ModalButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  background-color: #117500;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0d5b00;
  }
`;

// Styled components for Agendamento
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

const Balloon = styled.div<{ disabled: boolean, image: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #3437F1;
  border: 1px solid #ddd;
  border-radius: 12px;
  font-family: 'Poppins', sans-serif;
  color: white;
  padding: 30px;
  width: 245px;
  height: 240px; /* Increased height for the button */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  transition: transform 0.2s ease;
  border-width: 10px;
  position: relative; /* For positioning the image circle */
  font-weight: bold;
  background-size: cover;
  background-position: center;
  margin-top: 2cm;

  &:hover {
    transform: ${({ disabled }) => (disabled ? 'none' : 'scale(1.05)')};
  }
`;

const BalloonImageContainer = styled.div`
  position: absolute;
  top: -30px; /* Adjust as needed */
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid #fff;
  background-color: #2c6568;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BalloonImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
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

const ServiceOptions = styled.div`
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const ServiceOptionLabel = styled.label`
  font-size: 14px;
  display: flex;
  align-items: center;
`;

const ServiceOptionCheckbox = styled.input.attrs({ type: 'checkbox' })`
  margin-right: 10px;
`;

const Button = styled.button<{ disabled: boolean }>`
  margin-top: 10px;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  background-color: ${({ disabled }) => (disabled ? '#aaa' : '#117500')};
  color: #fff;
  font-size: 16px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ disabled }) => (disabled ? '#aaa' : '#0000cc')};
  }
`;

// Styled component for the button that opens the modal
const OpenModalButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  background-color: #117500;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-bottom: 20px; // Adjust spacing as needed

  &:hover {
    background-color: #0d5b00;
  }
`;

// Component
const Agendamento: React.FC<{ usuario: any | null }> = ({ usuario }) => {
  const location = useLocation();
  const lastMessage = location.state?.lastMessage || 'Nenhum orçamento disponível.';
  const [success, setSuccess] = useState(false);
  const [disabledOfficinas, setDisabledOfficinas] = useState<string[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state

  const { pecas, modelo, ano, placa } = extractDados(lastMessage);
  const data = new Date().toLocaleDateString();

  const oficinas = [
    {
      id: 1,
      title: 'Oficina Faria Lima',
      localStorageKey: 'oficinaA',
      image: oficinaAImage,
    },
    {
      id: 2,
      title: 'Oficina Barra Funda',
      localStorageKey: 'oficinaB',
      image: oficinaBImage,
    },
    {
      id: 3,
      title: 'Oficina Vila Sonia',
      localStorageKey: 'oficinaC',
      image: oficinaCImage,
    },
  ];

  const handleSelectOfficina = (localStorageKey: string) => {
    const orcamento = { pecas, modelo, ano, placa, data };
    const storedOrcamentos = JSON.parse(localStorage.getItem('orcamentos') || '[]');
    storedOrcamentos.push({ oficinaKey: localStorageKey, orcamento });
    localStorage.setItem('orcamentos', JSON.stringify(storedOrcamentos));
    setSuccess(true);
    setDisabledOfficinas([...disabledOfficinas, localStorageKey]);
  };

  return (
    <AgendamentoContainer>
      <h1>Agendamento</h1>
      <OpenModalButton onClick={() => setIsModalOpen(true)}>Ver Último Orçamento</OpenModalButton>
      
      <ModalOverlay isOpen={isModalOpen}>
        <ModalContent>
          <CloseButton onClick={() => setIsModalOpen(false)}>×</CloseButton>
          <ModalTitle>Último Orçamento</ModalTitle>
          <ModalMessage>{lastMessage}</ModalMessage>
          <ModalButton onClick={() => setIsModalOpen(false)}>Fechar</ModalButton> {/* New button in modal */}
        </ModalContent>
      </ModalOverlay>

      <BalloonsWrapper>
        {oficinas.map((oficina) => (
          <Balloon
            key={oficina.id}
            disabled={disabledOfficinas.includes(oficina.localStorageKey)}
            image={oficina.image}
          >
            <BalloonImageContainer>
              <BalloonImage src={oficina.image} alt={oficina.title} />
            </BalloonImageContainer>
            <BalloonTitle>{oficina.title}</BalloonTitle>
            <BalloonDescription>
              Modelo: {modelo}<br/>
              Ano: {ano}<br/>
              Placa: {placa}<br/>
              Peças a serem trocadas: {pecas}
            </BalloonDescription>
            <ServiceOptions>
              <ServiceOptionLabel>
                <ServiceOptionCheckbox />
                Adicionar serviço
              </ServiceOptionLabel>
              <ServiceOptionLabel>
                <ServiceOptionCheckbox />
                Leva e traz
              </ServiceOptionLabel>
            </ServiceOptions>
            <Button
              disabled={disabledOfficinas.includes(oficina.localStorageKey)}
              onClick={() => handleSelectOfficina(oficina.localStorageKey)}
            >
              Agendar
            </Button>
          </Balloon>
        ))}
      </BalloonsWrapper>

      {success && <SuccessMessage>Agendamento realizado com sucesso!</SuccessMessage>}
    </AgendamentoContainer>
  );
};

export default Agendamento;
