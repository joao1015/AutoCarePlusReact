import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Styled Component para o contêiner principal do formulário
const FormularioContainer = styled.div`
  position: absolute;
  top: 163px;
  right: 0;
  border: 10px solid #000000;
  transform: translateX(0);
  width: 50%;
  height: 100%;
  justify-items: center;
  background-color: #fff;
  margin-top: -1.9cm;

  @media (max-width: 768px) {
    width: 90%;
    right: 5%;
    height: auto;
    align-items: center;
  }
`;

// Styled Component para o formulário
const FormularioStyled = styled.form`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  height: 100%;
  align-items: center;
  margin-left: 1.5cm;
`;

// Styled Component para o título do formulário
const Title = styled.h2`
  margin-bottom: 20px;
  font-size: 26px;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  text-align: center;
`;

// Styled Component para os grupos de campos do formulário
const FormGroup = styled.div`
  margin-bottom: 20px;
`;

// Styled Component para o rótulo dos campos
const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-size: 20px;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
`;

// Styled Component para os campos de entrada
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

  &::placeholder {
    color: #fff;
    opacity: 0.8;
  }
`;

// Styled Component para o botão de criação de conta
const Button = styled.button`
  width: 100%;
  max-width: 600px;
  height: 65px;
  padding: 0 15px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 20px;
  font-size: 20px;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #0056b3;
  }
`;

// Styled Component para o link de login
const LinkStyled = styled.p`
  color: #007bff;
`;

function Formulario() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const usuario = {
      nome,
      email,
      senha,
    };

    localStorage.setItem('usuario', JSON.stringify(usuario));

    setNome('');
    setEmail('');
    setSenha('');

    alert('Conta criada com sucesso!');
  };

  return (
    <FormularioContainer>
      <FormularioStyled onSubmit={handleSubmit}>
        <Title>Crie sua Conta Gratuita</Title>
        <FormGroup>
          <Label htmlFor="nome">Nome Completo</Label>
          <Input
            type="text"
            id="nome"
            name="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </FormGroup>
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
        <Button type="submit">Criar Conta</Button>
        <LinkStyled>
          Já tem uma conta? <Link to="/entrar">Faça login</Link>
        </LinkStyled>
      </FormularioStyled>
    </FormularioContainer>
  );
}

export default Formulario;
