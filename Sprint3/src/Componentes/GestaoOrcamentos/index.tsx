import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Cabecalho from '../Cabecalho';
import Rodape from '../Rodape';

interface Orcamento {
  descricao: string;
  status: string;
  pecas: string;
  modelo: string;
  ano: string;
  placa: string;
  data: string;
}

const Container = styled.div`
  width: 100%;
  padding: 20px;
`;

const OrcamentoCard = styled.div`
  background-color: #ffffff;
  padding: 20px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const StatusButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 10px;
  &:hover {
    background-color: #0056b3;
  }
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  width: 400px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ModalButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 10px;
  &:hover {
    background-color: #0056b3;
  }
`;

const GestaoOrcamentos: React.FC = () => {
  const [orcamentosAceitos, setOrcamentosAceitos] = useState<Orcamento[]>([]);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const [failureDescription, setFailureDescription] = useState<string>('');
  const [defectDescription, setDefectDescription] = useState<string>('');
  const [measurements, setMeasurements] = useState<string>('');

  useEffect(() => {
    try {
      const storedAceitos = localStorage.getItem('orcamentosAceitos');
      if (storedAceitos) {
        setOrcamentosAceitos(JSON.parse(storedAceitos));
      }
    } catch (error) {
      console.error('Erro ao carregar orçamentos do localStorage:', error);
    }
  }, []);

  const handleStatusChange = (index: number, status: string) => {
    if (status === 'Finalizado') {
      setCurrentIndex(index);
      setShowModal(true);
    } else {
      const updatedOrcamentos = [...orcamentosAceitos];
      updatedOrcamentos[index] = { ...updatedOrcamentos[index], status }; // Atualiza o status do orçamento
      setOrcamentosAceitos(updatedOrcamentos); // Atualiza o estado
      localStorage.setItem('orcamentosAceitos', JSON.stringify(updatedOrcamentos)); // Salva no localStorage
    }
  };

  const handleModalSubmit = () => {
    if (currentIndex !== null) {
      const updatedOrcamentos = [...orcamentosAceitos];
      const finalizedOrcamento = { 
        ...updatedOrcamentos[currentIndex],
        status: 'Finalizado',
        falha: failureDescription,
        defeito: defectDescription,
        medidas: measurements
      };

      // Remove do localStorage de orçamentos aceitos e adiciona aos finalizados
      const updatedAceitos = updatedOrcamentos.filter((_, i) => i !== currentIndex);
      localStorage.setItem('orcamentosAceitos', JSON.stringify(updatedAceitos));
      localStorage.setItem('ordensFinalizadas', JSON.stringify([...JSON.parse(localStorage.getItem('ordensFinalizadas') || '[]'), finalizedOrcamento]));

      setOrcamentosAceitos(updatedAceitos);
      setShowModal(false);
      setCurrentIndex(null);
      setFailureDescription('');
      setDefectDescription('');
      setMeasurements('');
    }
  };

  const handleModalClose = () => {
    setShowModal(false);
    setCurrentIndex(null);
    setFailureDescription('');
    setDefectDescription('');
    setMeasurements('');
  };

  if (orcamentosAceitos.length === 0) {
    return <Container>Nenhum orçamento aceito no momento.</Container>;
  }

  return (


    <Container>

        <Cabecalho></Cabecalho>
      {orcamentosAceitos.map((orcamento, index) => (
        <OrcamentoCard key={index}>
          <div><strong>Descrição:</strong> {orcamento.descricao}</div>
          <div><strong>Peças:</strong> {orcamento.pecas || 'Não especificado'}</div>
          <div><strong>Modelo:</strong> {orcamento.modelo || 'Não especificado'}</div>
          <div><strong>Ano:</strong> {orcamento.ano || 'Não especificado'}</div>
          <div><strong>Placa:</strong> {orcamento.placa || 'Não especificado'}</div>
          <div><strong>Data:</strong> {orcamento.data || 'Não especificado'}</div>
          <div><strong>Status Atual:</strong> {orcamento.status}</div>
          <StatusButton onClick={() => handleStatusChange(index, 'Em andamento')}>Em Andamento</StatusButton>
          <StatusButton onClick={() => handleStatusChange(index, 'Aguardando Peças')}>Aguardando Peças</StatusButton>
          <StatusButton onClick={() => handleStatusChange(index, 'Finalizado')}>Finalizado</StatusButton>
        </OrcamentoCard>
      ))}

      {showModal && (
        <Modal>
          <ModalContent>
            <h3>Finalizar Serviço</h3>
            <div>
              <label>Falha Relatada:</label>
              <textarea value={failureDescription} onChange={(e) => setFailureDescription(e.target.value)} />
            </div>
            <div>
              <label>Defeito Apresentado:</label>
              <textarea value={defectDescription} onChange={(e) => setDefectDescription(e.target.value)} />
            </div>
            <div>
              <label>Medidas Tomadas:</label>
              <textarea value={measurements} onChange={(e) => setMeasurements(e.target.value)} />
            </div>
            <ModalButton onClick={handleModalSubmit}>Enviar</ModalButton>
            <ModalButton onClick={handleModalClose}>Cancelar</ModalButton>
          </ModalContent>
        </Modal>
      )}

      <Rodape></Rodape>
    </Container>
  );
};

export default GestaoOrcamentos;
