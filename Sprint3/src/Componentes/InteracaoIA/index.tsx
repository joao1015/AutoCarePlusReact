import React, { useState, useEffect } from 'react';
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
  margin-top: -15cm;
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

  useEffect(() => {
    // Adiciona o script do Watson Assistant
    window.watsonAssistantChatOptions = {
      integrationID: "a5f3dd64-010d-4bfe-8f86-13e14d2d217b", // The ID of this integration.
      region: "us-south", // The region your integration is hosted in.
      serviceInstanceID: "65c03cc1-5372-489e-940d-1795a8ad9d99", // The ID of your service instance.
      onLoad: async (instance) => { await instance.render(); }
    };
    setTimeout(function(){
      const t = document.createElement('script');
      t.src = "https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
      document.head.appendChild(t);
    }, 0);
  }, []); // Esse hook só roda quando o componente é montado

  const sendMessage = async () => {
    try {
      const response = await axios.post(
        'https://api.us-south.assistant.watson.cloud.ibm.com/v1/workspaces/f57c7ad1-958a-4dab-84fc-fa203e8c1efe/message',
        {
          input: {
            text: message,
          },
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `r_suOM3Fo1tcsPUKukbkHjkltOBjiJGYFdPx2mtIHb-8`,
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
