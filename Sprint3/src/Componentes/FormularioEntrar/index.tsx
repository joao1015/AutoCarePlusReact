import React, { useState } from 'react';
import styled from 'styled-components';

// Styled Component para o contêiner principal
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

// Styled Component para o formulário (balao)
const Balao = styled.form`
  background-color: #ffffff;
  padding: 20px;
  height: 100%;
  width: 50%;
  align-items: center;
  margin-left: 10cm;
  box-sizing: border-box;
`;

// Styled Component para o título
const Title = styled.h2`
  margin-bottom: 20px;
  font-size: 26px;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  text-align: center;
`;

// Styled Component para o contêiner de cada campo do formulário
const FormGroup = styled.div`
  margin-bottom: 20px;
`;

// Styled Component para os rótulos dos campos do formulário
const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-size: 20px;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
`;

// Styled Component para os inputs do formulário
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

// Styled Component para o botão de login
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

function Login() {
  // Estado para armazenar o email e a senha digitados pelo usuário
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  // Função que lida com o envio do formulário de login
  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Evita o comportamento padrão de recarregar a página

    // Recupera os dados do usuário armazenados no localStorage com verificação de null
    const usuarioData = localStorage.getItem('usuario');
    const usuario = usuarioData ? JSON.parse(usuarioData) : null;

    // Verifica se os dados do usuário correspondem aos fornecidos no formulário
    if (usuario && usuario.email === email && usuario.senha === senha) {
      alert('Login bem-sucedido!');
      // Adicione aqui a lógica adicional após um login bem-sucedido, como redirecionamento
    } else {
      alert('Email ou senha incorretos.'); // Mensagem de erro se os dados não corresponderem
    }
  };

  return (
    <Logado>
      <Balao onSubmit={handleLogin}>
        <Title>Acessa conta - Preencha seus dados de acesso para continuar</Title>
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
        <LogarButton type="submit">Entrar</LogarButton>
      </Balao>
    </Logado>
  );
}

export default Login;
