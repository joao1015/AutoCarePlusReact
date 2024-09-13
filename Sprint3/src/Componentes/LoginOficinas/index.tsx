import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Logado = styled.div`
  position: absolute;
  top: 163px;
  right: 0;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  margin: 0 auto; /* Centraliza o conteúdo horizontalmente */
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;


`;

const Balao = styled.form`
  background-color: #ffffff;
  padding: 20px;
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  border: 3px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-size: 20px;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  color: #333; /* Cor do texto para maior contraste */
  text-align: left;
  width: 100%;
`;

const Input = styled.input`
  width: calc(100% - 30px);
  max-width: 600px;
  height: 50px;
  padding: 0 15px;
  border: 1px solid #ccc;
  border-radius: 10px;
  font-size: 18px;
  font-family: 'Poppins', sans-serif;
  background-color: #f5f5f5;
  color: #333;
  outline: none;
  transition: border-color 0.3s;

  &::placeholder {
    color: #999;
    opacity: 0.8;
  }

  &:focus {
    border-color: #0056b3;
  }
`;

const LogarButton = styled.button`
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 18px;
  width: 60%;
  max-width: 200px;
  height: 50px;
  background-color: #000;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 10px;
  cursor: pointer;
  text-align: center;
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: #0056b3;
    transform: translateY(-3px);
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
