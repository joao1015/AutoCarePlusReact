import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import icone from './Imagens/ia.png';  // Avatar do Chatbot
import userAvatar from './Imagens/usuario.png';  // Avatar do Usuário

// Estilos para o contêiner principal do chatbot
const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  max-width: 1200px;
  margin: 2rem auto;
  padding: 20px;
  border: 5px solid #000000;
  border-radius: 19px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  background-color: #fff;
  height: 500px;
  overflow: hidden;
  margin-top: -18.3cm;
`;

// Estilos para o cabeçalho do chatbot
const ChatHeader = styled.div`
  width: 100%;
  background-color: #000000;
  color: white;
  font-family: 'Poppins', sans-serif;
  padding: 30px;
  
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  margin-top: -0.6cm;
  border: 5px solid #000000;
`;

// Estilos para o corpo do chatbot
const ChatBody = styled.div`
  width: 100%;
  flex: 1;
  overflow-y: auto;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 12px;
  background-color: #f9f9f9;
  height: 150%;
  margin-top: 2cm;
`;

// Estilos para a entrada do usuário
const ChatInputContainer = styled.div`
  width: 100%;
  display: flex;
  font-family: 'Poppins', sans-serif;
  padding: 10px;
  border-top: 1px solid #ddd;
  background-color: #fff;
  border-radius: 40px;
  align-items: center;
  margin-top: 1cm;
`;

// Estilos para o campo de entrada
const Input = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 0;
  font-size: 16px;
  outline: none;
  font-family: 'Poppins', sans-serif;
  &:focus {
    border-color: #4a90e2;
  }
`;

// Estilos para o botão de envio
const Button = styled.button`
  padding: 10px 20px;
  background-color: #000000;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  font-family: 'Poppins', sans-serif;
  margin-left: 10px;

  &:hover {
    background-color: #357ABD;
  }
`;

// Estilos para a mensagem com ajuste de espaçamento e alinhamento
// Estilos para o contêiner da mensagem
const MessageContainer = styled.div<{ isUser: boolean }>`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  align-self: ${({ isUser }) => (isUser ? 'flex-end' : 'flex-start')};
  max-width: 95%;
  flex-direction: ${({ isUser }) => (isUser ? 'row-reverse' : 'row')};
  padding: 10px; /* Ajuste o padding conforme necessário */
`;

// Estilos para a mensagem de texto
const Message = styled.div<{ isUser: boolean }>`
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #000000;
  background-color: ${({ isUser }) => (isUser ? '#ffffff' : '#ffffff')};
  color: ${({ isUser }) => (isUser ? '#000000' : '#000000')};
  margin-left: ${({ isUser }) => (isUser ? '10px' : '0')};
  margin-right: ${({ isUser }) => (isUser ? '0' : '10px')};
  max-width: 70%;
`;

// Estilos para a imagem do avatar
const Avatar = styled.img<{ isUser: boolean }>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: ${({ isUser }) => (isUser ? '0' : '10px')};
  margin-left: ${({ isUser }) => (isUser ? '10px' : '0')}; /* Ajuste a margem para alinhar com a mensagem */
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
  context: any;
}

const Chatbot: React.FC = () => {
  const [message, setMessage] = useState<string>('');
  const [messages, setMessages] = useState<{ text: string; isUser: boolean; name: string }[]>([]);
  const [context, setContext] = useState<any>({});
  const chatBodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!message.trim()) return;

    // Adiciona a mensagem do usuário com o nome "Usuário"
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: message, isUser: true, name: 'Usuário' },
    ]);
    setMessage('');

    try {
      // Envia a mensagem para a API do Watson Assistant
      const response = await axios.post<WatsonResponse>(
        'https://api.us-south.assistant.watson.cloud.ibm.com/v1/workspaces/f57c7ad1-958a-4dab-84fc-fa203e8c1efe/message?version=2021-06-14',
        {
          input: {
            text: message,
          },
          context: context,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Basic ${btoa('apikey:r_suOM3Fo1tcsPUKukbkHjkltOBjiJGYFdPx2mtIHb-8')}`,
          },
        }
      );

      console.log('Resposta da API:', response.data);

      // Atualiza o contexto da conversa
      setContext(response.data.context);

      // Extrai a resposta textual do Watson
      const responseText = response.data.output.generic
        .map((item: GenericItem) => {
          if (item.response_type === 'text' && item.text) {
            return item.text;
          }
          return '';
        })
        .filter((text) => text)
        .join(' ');

      // Adiciona a resposta da IA com o nome "AutoCarePlus"
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: responseText || 'Sem resposta', isUser: false, name: 'AutoCarePlus' },
      ]);
    } catch (error) {
      console.error('Erro ao enviar mensagem para o chatbot:', error);
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: 'Ocorreu um erro, tente novamente.', isUser: false, name: 'Chatbot' },
      ]);
    }
  };

  return (
    <ChatContainer>
      
      <ChatHeader>Inteligencia Artificial AutoCarePlus</ChatHeader>

      
      <ChatBody ref={chatBodyRef}>
        {messages.map((msg, index) => (
          <MessageContainer key={index} isUser={msg.isUser}>
            <Avatar src={msg.isUser ? userAvatar : icone} alt={msg.isUser ? "User Avatar" : "Chatbot Avatar"} isUser={msg.isUser} />
            <Message isUser={msg.isUser}>{msg.text}</Message>
          </MessageContainer>
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
