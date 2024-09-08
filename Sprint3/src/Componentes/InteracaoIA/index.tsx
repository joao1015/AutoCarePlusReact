import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

// Estilos para o contêiner principal do chatbot
const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 2px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

// Estilo para o título
const Title = styled.h2`
  color: #4a90e2;
  margin-bottom: 20px;
`;

// Estilos para o campo de entrada
const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
  outline: none;

  &:focus {
    border-color: #4a90e2;
  }
`;

// Estilos para o botão de envio
const Button = styled.button`
  padding: 10px 20px;
  background-color: #4a90e2;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #357ABD;
  }
`;

// Estilos para a resposta do chatbot
const Response = styled.p`
  margin-top: 20px;
  font-size: 16px;
  color: #333;
  text-align: center;
`;

const Chatbot = () => {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const sendMessage = async () => {
    try {
      const response = await axios.post(
        'URL_DA_SUA_API',
        {
          input: {
            text: message,
          },
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer SUA_API_KEY`,
          },
        }
      );

      setResponse(response.data.output.generic[0].text);
    } catch (error) {
      console.error('Erro ao enviar mensagem para o chatbot:', error);
      setResponse('Ocorreu um erro, tente novamente.');
    }
  };

  return (
    <ChatContainer>
      <Title>Chatbot IBM Watson</Title>
      <Input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Digite sua mensagem"
      />
      <Button onClick={sendMessage}>Enviar</Button>
      <Response>Resposta do Chatbot: {response}</Response>
    </ChatContainer>
  );
};

export default Chatbot;
