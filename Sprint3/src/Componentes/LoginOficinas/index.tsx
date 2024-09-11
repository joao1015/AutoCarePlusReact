import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Logado = styled.div`
  position: absolute;
  top: 163px;
  right: 0;
  transform: translateX(0);
  width: 100%;
  height: 100%;
  justify-items: center;
  background-color: #fff;
`;

const Balao = styled.form`
  background-color: #ffffff;
  padding: 20px;
  height: 100%;
  width: 50%;
  align-items: center;
  margin-left: 10cm;
  box-sizing: border-box;
`;

const Title = styled.h2`
  margin-bottom: 20px;
  font-size: 26px;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  text-align: center;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-size: 20px;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
`;

const Input = styled.input`
  width: 100%;
  max-width: 600px;
  height: 65px;
  padding: 0 15px;
  border: 1px solid white;
  border-radius: 20px;
  font-size: 20px;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  background-color: #b0bac3;
  box-sizing: border-box;
  margin-left: 1cm;

  &::placeholder {
    color: #fff;
    opacity: 0.8;
  }
`;

const LogarButton = styled.button`
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 26px;
  width: 301.45px;
  height: 40px;
  background-color: #000000;
  color: #ffffff;
  border: none;
  border-radius: 8px;
  padding: 10px;
  cursor: pointer;
  text-align: center;
  line-height: 4px;
  transition: background-color 0.3s;
  margin-left: 4.5cm;

  &:hover {
    background-color: #0056b3;
  }
`;

const OficinasLogin: React.FC = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  const oficinasFixas = [
    { nome: 'Oficina AutoTech', email: 'oficina1@example.com', senha: '123' },
    { nome: 'Oficina Mecânica Rápida', email: 'oficina2@example.com', senha: '123' },
    { nome: 'Oficina SuperCar', email: 'oficina3@example.com', senha: '123' },
  ];

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const oficinaValida = oficinasFixas.find(
      (oficina) => oficina.email === email && oficina.senha === senha
    );

    if (oficinaValida) {
      alert(`Login bem-sucedido! Bem-vindo à ${oficinaValida.nome}`);

      const storedOrcamento = localStorage.getItem('orcamento');
      if (storedOrcamento) {
        const orcamentoData = JSON.parse(storedOrcamento);
        navigate('/Pagina_da_credenciada', { state: { orcamento: orcamentoData } });
      } else {
        alert('Nenhum orçamento disponível.');
      }
    } else {
      alert('Email ou senha incorretos.');
    }
  };

  return (
    <Logado>
      <Balao onSubmit={handleLogin}>
        <Title>Acessa conta - Preencha seus dados da Credenciada acesso para continuar</Title>
        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="senha">Senha</Label>
          <Input
            type="password"
            id="senha"
            name="senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
        </FormGroup>
        <LogarButton type="submit">Logar</LogarButton>
      </Balao>
    </Logado>
  );
};

export default OficinasLogin;
