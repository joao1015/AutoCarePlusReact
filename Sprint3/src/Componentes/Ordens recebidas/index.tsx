import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Cabecalho from '../Cabecalho';
import Rodape from '../Rodape';

const Container = styled.div`
  width: 100%;
`;

const OrcamentoCard = styled.div`
  background-color: #000000;
  padding: 20px;
  margin-bottom: 10px;
  border: 1px solid #ff0000;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  color: #fff; /* Garanta que o texto seja visível */
`;

const Button = styled.button`
  background-color: #007bff;
  color: #fff; /* Cor do texto do botão */
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 10px;
  &:hover {
    background-color: #0056b3;
  }
`;

const OrcamentosRecebidos: React.FC = () => {
  const [orcamentos, setOrcamentos] = useState<any[]>([]);
  const oficinaKey = 'oficinaA'; // Defina aqui a chave da oficina logada

  useEffect(() => {
    const storedOrcamentos = JSON.parse(localStorage.getItem('orcamentos') || '[]');
    console.log('Stored Orcamentos:', storedOrcamentos);
    
    const filteredOrcamentos = storedOrcamentos.filter((orcamento: any) => orcamento.oficinaKey === oficinaKey);
    console.log('Filtered Orcamentos:', filteredOrcamentos);

    // Verificar se a propriedade orcamento contém a propriedade descricao
    const orcamentosWithDescription = filteredOrcamentos.map((orcamento: any) => {
      console.log('Orcamento Data:', orcamento.orcamento);
      return orcamento.orcamento;
    });

    setOrcamentos(orcamentosWithDescription);
  }, [oficinaKey]);

  const handleAccept = (index: number) => {
    const updatedOrcamentos = orcamentos.filter((_, i) => i !== index);
    localStorage.setItem('orcamentos', JSON.stringify(updatedOrcamentos));
    const orcamentosAceitos = JSON.parse(localStorage.getItem('orcamentosAceitos') || '[]');
    localStorage.setItem('orcamentosAceitos', JSON.stringify([...orcamentosAceitos, orcamentos[index]]));
    setOrcamentos(updatedOrcamentos);
    console.log('Updated Orcamentos:', updatedOrcamentos);
  };

  const handleReject = (index: number) => {
    const updatedOrcamentos = orcamentos.filter((_, i) => i !== index);
    localStorage.setItem('orcamentos', JSON.stringify(updatedOrcamentos));
    setOrcamentos(updatedOrcamentos);
    console.log('Updated Orcamentos:', updatedOrcamentos);
  };

  return (
      


    <Container>
      <header><Cabecalho></Cabecalho></header>
      {orcamentos.length === 0 ? (
        <p>Não há orçamentos disponíveis.</p>
      ) : (
        orcamentos.map((orcamento, index) => (
          <OrcamentoCard key={index}>
            <div><strong>Peças:</strong> {orcamento.pecas || 'Não especificado'}</div>
            <div><strong>Modelo:</strong> {orcamento.modelo || 'Não especificado'}</div>
            <div><strong>Ano:</strong> {orcamento.ano || 'Não especificado'}</div>
            <div><strong>Placa:</strong> {orcamento.placa || 'Não especificado'}</div>
            <div><strong>Data:</strong> {orcamento.data || 'Não especificado'}</div>
            <Button onClick={() => handleAccept(index)}>Aceitar</Button>
            <Button onClick={() => handleReject(index)}>Recusar</Button>
          </OrcamentoCard>
        ))
      )}

<header><Rodape></Rodape></header>
    </Container>
  );
};

export default OrcamentosRecebidos;
