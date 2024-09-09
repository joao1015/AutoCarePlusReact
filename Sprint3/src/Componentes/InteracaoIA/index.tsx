import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import styled from 'styled-components';

// Estilos para o contêiner principal do chatbot
const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  max-width: 1200px;
  margin: 2rem auto;
  padding: 20px;
  border: 2px solid #4a90e2;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  background-color: #fff;
  height: 500px;
  overflow: hidden;
  margin-top: -18.3cm;
`;

// Estilos para o cabeçalho do chatbot
const ChatHeader = styled.div`
  width: 100%;
  background-color: #4a90e2;
  color: white;
  padding: 10px;
  border-radius: 12px 12px 0 0;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
`;

// Estilos para o corpo do chatbot
const ChatBody = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 0 0 12px 12px;
  background-color: #f9f9f9;
  height: calc(100% - 80px);
`;

// Estilos para a entrada do usuário
const ChatInputContainer = styled.div`
  display: flex;
  padding: 10px;
  border-top: 1px solid #ddd;
  background-color: #fff;
  border-radius: 0 0 12px 12px;
  align-items: center;
`;

// Estilos para o campo de entrada
const Input = styled.input`
  flex: 1;
  padding: 10px;
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
  margin-left: 10px;

  &:hover {
    background-color: #357ABD;
  }
`;

// Estilos para a mensagem
const Message = styled.div<{ isUser: boolean }>`
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 10px;
  background-color: ${({ isUser }) => (isUser ? '#4a90e2' : '#e0e0e0')};
  color: ${({ isUser }) => (isUser ? '#fff' : '#000')};
  align-self: ${({ isUser }) => (isUser ? 'flex-end' : 'flex-start')};
`;

interface GenericItem {
  text?: string;
  response_type?: string;
}

// Interface para a resposta da API
interface WatsonResponse {
  output: {
    generic: GenericItem[];
  };
  context: any; // Ajuste o tipo de acordo com a estrutura do contexto, se conhecido
}

const Chatbot: React.FC = () => {
  const [message, setMessage] = useState<string>('');
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([]);
  const [context, setContext] = useState<any>({}); // Estado para armazenar o contexto da conversa
  const chatBodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!message.trim()) return;

    // Adiciona a mensagem do usuário ao estado
    setMessages((prevMessages) => [...prevMessages, { text: message, isUser: true }]);
    setMessage('');

    try {
      // Envia a mensagem para a API do Watson Assistant
      const response = await axios.post<WatsonResponse>(
        'https://api.us-south.assistant.watson.cloud.ibm.com/v1/workspaces/f57c7ad1-958a-4dab-84fc-fa203e8c1efe/message?version=2021-06-14',
        {
          input: {
            text: message, // Mensagem que o usuário enviou
          },
          context: context, // Inclui o contexto atual da conversa
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Basic ${btoa('apikey:r_suOM3Fo1tcsPUKukbkHjkltOBjiJGYFdPx2mtIHb-8')}`,
          }
        }
      );

      console.log('Resposta da API:', response.data);

      // Atualiza o contexto para a próxima interação
      setContext(response.data.context);

      // Obtém a resposta textual do array 'generic' da resposta da API
      const responseText = response.data.output.generic
        .map((item: GenericItem) => {
          if (item.response_type === 'text' && item.text) {
            return item.text;
          }
          return '';
        })
        .filter((text) => text) // Filtra textos vazios
        .join(' '); // Junta todos os textos em uma única string

      // Adiciona a resposta ao estado
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: responseText || 'Sem resposta', isUser: false },
      ]);
    } catch (error) {
      console.error('Erro ao enviar mensagem para o chatbot:', error);
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: 'Ocorreu um erro, tente novamente.', isUser: false },
      ]);
    }
  };

  return (
    <ChatContainer>
      <ChatHeader>Chatbot AutoCarePlus</ChatHeader>
      <ChatBody ref={chatBodyRef}>
        {messages.map((msg, index) => (
          <Message key={index} isUser={msg.isUser}>
            {msg.text}
          </Message>
        ))}
      </ChatBody>
      <ChatInputContainer>
        <Input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Digite sua mensagem"
        />
        <Button onClick={handleSubmit}>Enviar</Button>
      </ChatInputContainer>
    </ChatContainer>
  );
};

export default Chatbot;