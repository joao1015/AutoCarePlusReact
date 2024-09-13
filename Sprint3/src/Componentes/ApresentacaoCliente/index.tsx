
import styled from 'styled-components';

// Estilização dos componentes
const Container = styled.div`
  font-family: 'Poppins', sans-serif;
  padding: 0 2rem;
`;

const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 0;
  text-align: center;
  background: url('/path/to/hero-image.jpg') no-repeat center center/cover;
  color: #406a34;
  position: relative;
  overflow: hidden;
  background-color: #ffffff;
  width: 100%;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);
  }

  
`;

const FeaturesSection = styled.section`
  padding: 3rem 0;
  background-color: #f9f9f9;

  h3 {
    text-align: center;
    margin-bottom: 2rem;
    font-size: 2rem;
  }

  .features {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }

  .feature {
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 1.5rem;
    width: 80%;
    max-width: 300px;
    text-align: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;

    &:hover {
      transform: translateY(-5px);
    }

    h4 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }

    p {
      font-size: 1rem;
      color: #666;
    }
  }
`;

// Componente Principal
const HomePage = () => {
  return (
    <Container>
      <HeroSection>
        <h2>Revolucione sua Oficina com Metamind</h2>
        <p>Transforme a gestão e atendimento da sua oficina com nossa solução digital moderna e acessível.</p>
        
      </HeroSection>
      <FeaturesSection id="features">
        <h3>Funcionalidades Principais</h3>
        <div className="features">
          <div className="feature">
            <h4>Orçamento Automático</h4>
            <p>Gerencie orçamentos de forma autônoma com nossa ferramenta de orçamento automatizado.</p>
          </div>
          <div className="feature">
            <h4>Gestão Simplificada</h4>
            <p>Integre a compra de peças, emissão de notas fiscais e gestão de garantias em um único lugar.</p>
          </div>
          <div className="feature">
            <h4>Marketing Integrado</h4>
            <p>Impulsione a visibilidade da sua oficina e atraia mais clientes com nosso serviço de marketing.</p>
          </div>
          <div className="feature">
            <h4>Valorização da Mão de Obra</h4>
            <p>Destaque a qualidade e especialização dos seus serviços para atrair mais negócios.</p>
          </div>
        </div>
      </FeaturesSection>
    </Container>
  );
};

export default HomePage;
