import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styled from 'styled-components';
import Rodape from '../Rodape';

// Styled Components
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #F3F4F6;
`;

const LoginContainer = styled.div`
  background-color: #F3F4F6;
  width: 70%;
  max-width: 600px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(176, 30, 30, 0.1);
  border-radius: 8px;
  margin: auto;
  margin-top: 50px;
`;

const LoginForm = styled.form`
  background-color: #fff;
  padding: 20px;
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
  height: 65px;
  padding: 0 15px;
  border: 1px solid #ddd;
  border-radius: 20px;
  font-size: 20px;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  background-color: #f0f0f0;
  box-sizing: border-box;

  &::placeholder {
    color: #999;
  }
`;

const LoginButton = styled.button`
  width: 100%;
  height: 40px;
  background-color: #10B981;
  color: #fff;
  border: none;
  border-radius: 10px;
  font-size: 20px;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;

  &:hover {
    background-color: #0056b3;
  }
`;

const LinkStyled = styled.p`
  color: #000000;
  font-size: 18px;
  font-family: 'Poppins', sans-serif;
  text-align: center;
`;

// Componente de Login
function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Recupera os usuários armazenados no localStorage
    const usuariosData = localStorage.getItem('usuarios');
    const usuarios = usuariosData ? JSON.parse(usuariosData) : [];

    // Verifica se o e-mail e a senha fornecidos correspondem a algum usuário
    const usuario = usuarios.find(
      (u: { email: string; senha: string }) => {
        console.log('Checking user:', u);
        return u.email === email && u.senha === senha;
      }
    );

    if (usuario) {
      alert('Login bem-sucedido!');
      navigate("/Logado");
    } else {
      alert('Email ou senha incorretos.');
      console.log('Login failed for:', { email, senha });
    }
  };

  return (
    <PageContainer>
      <LoginContainer>
        <LoginForm onSubmit={handleLogin}>
          <Title>Acesse sua Conta</Title>
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
          <LoginButton type="submit">Entrar</LoginButton>
          <LinkStyled>
            Não tem uma conta? <Link to="/register">Cadastre-se</Link>
          </LinkStyled>
        </LoginForm>
      </LoginContainer>
      <Rodape />
    </PageContainer>
  );
}

export default Login;
