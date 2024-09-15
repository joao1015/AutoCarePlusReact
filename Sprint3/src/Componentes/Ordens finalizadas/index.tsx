import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  padding: 20px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
`;

const TableHeader = styled.th`
  background-color: #007bff;
  color: white;
  padding: 15px;
  text-align: left;
`;

const TableCell = styled.td`
  padding: 15px;
  border: 1px solid #ddd;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const OrdensFinalizadas: React.FC = () => {
  const [ordens, setOrdens] = useState<any[]>([]);

  useEffect(() => {
    const storedOrdens = JSON.parse(localStorage.getItem('ordensFinalizadas') || '[]');
    setOrdens(storedOrdens);
  }, []);

  return (
    <Container>
      <Title>Ordens Finalizadas</Title>
      <Table>
        <thead>
          <tr>
            <TableHeader>Descrição</TableHeader>
            <TableHeader>Peças</TableHeader>
            <TableHeader>Modelo</TableHeader>
            <TableHeader>Ano</TableHeader>
            <TableHeader>Placa</TableHeader>
            <TableHeader>Data</TableHeader>
            <TableHeader>Falha</TableHeader>
            <TableHeader>Defeito</TableHeader>
            <TableHeader>Medidas</TableHeader>
          </tr>
        </thead>
        <tbody>
          {ordens.map((ordem, index) => (
            <TableRow key={index}>
              <TableCell>{ordem.descricao}</TableCell>
              <TableCell>{ordem.pecas || 'Não especificado'}</TableCell>
              <TableCell>{ordem.modelo || 'Não especificado'}</TableCell>
              <TableCell>{ordem.ano || 'Não especificado'}</TableCell>
              <TableCell>{ordem.placa || 'Não especificado'}</TableCell>
              <TableCell>{ordem.data || 'Não especificado'}</TableCell>
              <TableCell>{ordem.falha || 'Não especificado'}</TableCell>
              <TableCell>{ordem.defeito || 'Não especificado'}</TableCell>
              <TableCell>{ordem.medidas || 'Não especificado'}</TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default OrdensFinalizadas;
