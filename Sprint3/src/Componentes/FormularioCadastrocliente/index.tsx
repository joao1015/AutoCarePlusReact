import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styled from 'styled-components';

// Styled Components
const FormularioContainer = styled.div`
  background-color: #F3F4F6;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70%;
  max-width: 600px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  margin-top: 8cm;
`;

const FormularioStyled = styled.form`
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

const Button = styled.button`
  width: 20%;
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

const Message = styled.p<{ error?: boolean }>`
  color: ${({ error }) => (error ? 'red' : 'green')};
  font-size: 18px;
  font-family: 'Poppins', sans-serif;
  text-align: center;
  margin-top: 10px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

// Definindo o tipo para o usuário
interface Usuario {
  nome: string;
  email: string;
  senha: string;
  logradouro: string;
  numero: string;
  cidade: string;
  estado: string;
}

// Componente de Formulário em Etapas
function Formulario() {
  const [step, setStep] = useState(1);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [cep, setCep] = useState('');
  const [logradouro, setLogradouro] = useState('');
  const [numero, setNumero] = useState('');
  const [estado, setEstado] = useState('');
  const [cidade, setCidade] = useState('');
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleCepChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const cep = event.target.value;
    setCep(cep);

    if (cep.length === 8) {
      try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();

        if (data.erro) {
          setError(true);
          setMessage('CEP não encontrado.');
          return;
        }

        setLogradouro(data.logradouro || '');
        setEstado(data.uf || '');
        setCidade(data.localidade || '');
        setError(false);
        setMessage(null);
      } catch (error) {
        setError(true);
        setMessage('Erro ao buscar CEP.');
      }
    }
  };

  const handleNext = () => {
    if (step === 6) {
      handleSubmit(); // Chama o submit quando chega ao final
    } else {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleSubmit = () => {
    const usuariosCadastrados: Usuario[] = JSON.parse(localStorage.getItem('usuarios') || '[]');
    const emailJaCadastrado = usuariosCadastrados.some((usuario) => usuario.email === email);

    if (emailJaCadastrado) {
      setError(true);
      setMessage('E-mail já está sendo usado.');
      return;
    }

    const novoUsuario: Usuario = {
      nome,
      email,
      senha,
      logradouro,
      numero,
      cidade,
      estado,
    };

    usuariosCadastrados.push(novoUsuario);
    localStorage.setItem('usuarios', JSON.stringify(usuariosCadastrados));

    setNome('');
    setEmail('');
    setSenha('');
    setCep('');
    setLogradouro('');
    setNumero('');
    setCidade('');
    setEstado('');

    setError(false);
    setMessage('Conta criada com sucesso!');
    
    setTimeout(() => {
      navigate("/Logado");
    }, 3000);
  };


  return (
    <FormularioContainer>
      <FormularioStyled>
        <Title>Crie sua Conta Gratuita</Title>
        {message && <Message error={error}>{message}</Message>}
        {step === 1 && (
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
            <ButtonContainer>
              <Button type="button" onClick={handleNext}>Próximo</Button>
            </ButtonContainer>
          </FormGroup>
        )}
        {step === 2 && (
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
            <ButtonContainer>
              <Button type="button" onClick={handleBack}>Voltar</Button>
              <Button type="button" onClick={handleNext}>Próximo</Button>
            </ButtonContainer>
          </FormGroup>
        )}
        {step === 3 && (
          <FormGroup>
            <Label htmlFor="cep">CEP</Label>
            <Input
              type="text"
              id="cep"
              name="cep"
              value={cep}
              onChange={handleCepChange}
              maxLength={8}
              required
              placeholder="00000000"
            />
            <ButtonContainer>
              <Button type="button" onClick={handleBack}>Voltar</Button>
              <Button type="button" onClick={handleNext}>Próximo</Button>
            </ButtonContainer>
          </FormGroup>
        )}
        {step === 4 && (
          <FormGroup>
            <Label htmlFor="logradouro">Logradouro</Label>
            <Input
              type="text"
              id="logradouro"
              name="logradouro"
              value={logradouro}
              onChange={(e) => setLogradouro(e.target.value)}
              required
            />
            <ButtonContainer>
              <Button type="button" onClick={handleBack}>Voltar</Button>
              <Button type="button" onClick={handleNext}>Próximo</Button>
            </ButtonContainer>
          </FormGroup>
        )}
        {step === 5 && (
          <>
            <FormGroup>
              <Label htmlFor="numero">Número</Label>
              <Input
                type="text"
                id="numero"
                name="numero"
                value={numero}
                onChange={(e) => setNumero(e.target.value)}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="estado">Estado</Label>
              <Input
                type="text"
                id="estado"
                name="estado"
                value={estado}
                onChange={(e) => setEstado(e.target.value)}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="cidade">Cidade</Label>
              <Input
                type="text"
                id="cidade"
                name="cidade"
                value={cidade}
                onChange={(e) => setCidade(e.target.value)}
                required
              />
            </FormGroup>
            <ButtonContainer>
              <Button type="button" onClick={handleBack}>Voltar</Button>
              <Button type="button" onClick={handleNext}>Próximo</Button>
            </ButtonContainer>
          </>
        )}
        {step === 6 && (
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
            <ButtonContainer>
              <Button type="button" onClick={handleBack}>Voltar</Button>
              <Button type="button" onClick={handleNext}>Concluir </Button>
            </ButtonContainer>
          </FormGroup>
        )}
      </FormularioStyled>
    </FormularioContainer>
  );
}

export default Formulario;
