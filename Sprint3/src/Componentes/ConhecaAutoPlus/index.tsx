import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 2rem;
  background-color: #f0f4f8;
`;

const Title = styled.h1`
  text-align: center;
  color: #002d72;
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
`;

const Subtitle = styled.h2`
  text-align: center;
  color: #004a99;
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;

const Card = styled.div`
  background: #ffffff;
  border: 1px solid #d1d9e6;
  border-radius: 10px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  color: #004a99;
`;

const FeatureDescription = styled.p`
  color: #333333;
`;

const Details = styled.p`
  margin-top: 1rem;
  color: #666666;
`;

const Button = styled.button`
  background-color: #0066cc;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  margin-top: 0.5rem;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #004a99;
  }
`;

const ConhecaAuto  = () => {
  const [openFeature, setOpenFeature] = useState<number | null>(null); // Define o estado com número ou null

  const features = [
    {
      id: 1,
      title: 'Proposta Metamind',
      description:
        'A Metamind visa criar um ecossistema inovador que democratize o acesso a sistemas automatizados para oficinas.',
      details:
        'Nossa solução permite que oficinas operem de forma moderna, oferecendo uma experiência digital sem servidores locais, apenas com internet.'
    },
    {
      id: 2,
      title: 'IA para Diagnóstico de Falhas',
      description:
        'Uma inteligência artificial que identifica falhas em veículos e oferece soluções detalhadas.',
      details:
        'A IA fornece uma descrição completa para evitar erros e alucinações, garantindo uma análise precisa do problema.'
    },
    {
    id: 3,
      title: 'Busca e Comparação de Oficinas',
      description:
        'Plataforma que permite encontrar oficinas credenciadas, comparar preços, tempo de serviço e avaliações.',
      details:
        'A plataforma facilita a busca de oficinas de acordo com a necessidade do cliente, com critérios como preço e avaliações.'
    },
    {
      id: 4,
      title: 'Serviços Extras',
      description:
        'Adicione serviços como leva e traz, alinhamento e mais de forma personalizada.',
      details:
        'Os clientes podem personalizar o serviço com opções extras, como leva e traz e alinhamento.'
    },
    {
      id: 5,
      title: 'Escolha de Peças',
      description:
        'Flexibilidade para escolher entre peças renovadas ou novas, conforme a preferência do cliente.',
      details:
        'A plataforma oferece a opção de escolher entre peças renovadas ou novas, dependendo do orçamento e preferência do cliente.'
    },
    {
      id: 6,
      title: 'Agendamento e Execução',
      description:
        'O cliente agenda o serviço, escolhe a oficina e recebe um atendimento personalizado.',
      details:
        'O sistema oferece um processo simples de agendamento, além de aprendizado contínuo da IA com base nas ordens de serviço.'
    }
  ];

  const handleToggle = (id: number) => {  // Definindo o tipo do parâmetro como number
    setOpenFeature(openFeature === id ? null : id);
  };

  return (
    <Container>
      <Title>Conheça a AutoCarePlus</Title>
      <Subtitle>Revolucionando o Acesso a Sistemas Automatizados para Oficinas</Subtitle>

      {features.map((feature) => (
        <Card key={feature.id}>
          <FeatureTitle>{feature.title}</FeatureTitle>
          <FeatureDescription>{feature.description}</FeatureDescription>
          <Button onClick={() => handleToggle(feature.id)}>
            {openFeature === feature.id ? 'Ocultar detalhes' : 'Ver mais detalhes'}
          </Button>
          {openFeature === feature.id && <Details>{feature.details}</Details>}
        </Card>
      ))}
    </Container>
  );
};

export default ConhecaAuto;
