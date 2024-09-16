import styled from 'styled-components';


// Styled Component para o rodapé
const RodapeContainer = styled.footer`
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: black;
  color: #ffffff;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 13px;
  box-sizing: border-box;
  border-top: 1px solid #000000;
  padding: 20px 0;

  @media (max-width: 430px) {
    font-size: 12px; /* Reduz o tamanho da fonte para telas menores */
    padding: 10px 0; /* Ajusta o padding */
  }
`;

// Container para a estrutura do rodapé
const RodapeContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 430px) {
    max-width: 100%;
    padding: 0 15px; /* Ajusta o padding para telas menores */
  }
`;

// Estilos para os links
const RodapeLinks = styled.div`
  margin-bottom: 20px;
  text-align: center;

  a {
    color: #ffffff;
    text-decoration: none;
    margin: 0 10px;

    &:hover {
      text-decoration: underline;
    }

    @media (max-width: 430px) {
      margin: 0 5px; /* Diminui o espaçamento entre os links */
    }
  }
`;

// Estilo para os botões de app
const AppButtons = styled.div`
  margin: 10px 0;

  img {
    width: 120px;
    margin: 0 10px;

    @media (max-width: 430px) {
      width: 100px; /* Reduz o tamanho das imagens dos botões */
    }
  }
`;

// Estilo para a seção de redes sociais
const SocialLinks = styled.div`
  margin-bottom: 20px;

  a {
    color: #ffffff;
    margin: 0 10px;
    font-size: 18px;
    text-decoration: none;

    @media (max-width: 430px) {
      font-size: 16px; /* Reduz o tamanho das fontes para os ícones de redes sociais */
      margin: 0 5px; /* Diminui o espaçamento entre os ícones */
    }
  }
`;

function Rodape() {
  return (
    <RodapeContainer>
      <RodapeContent>
        <RodapeLinks>
          <a href="/sobre-nos">Sobre Nós</a>
          <a href="/contato">Contato</a>
          <a href="/privacidade">Política de Privacidade</a>
          <a href="/termos">Termos de Serviço</a>
        </RodapeLinks>
        <SocialLinks>
          <a href="https://facebook.com/seudominio" target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
          <a href="https://twitter.com/seudominio" target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
          <a href="https://instagram.com/seudominio" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
          <a href="https://linkedin.com/company/seudominio" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </SocialLinks>
        <p>© 2024 Metamind Tecnologia. Todos os direitos reservados</p>
      </RodapeContent>
    </RodapeContainer>
  );
}

export default Rodape;
