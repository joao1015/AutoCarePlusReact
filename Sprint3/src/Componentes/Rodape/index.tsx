import styled from 'styled-components';

// Styled Component para o rodapé
const RodapeContainer = styled.footer`
 
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background-color: #ffffff;
  color: #000000;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 13px;
  box-sizing: border-box;
  z-index: 1000;
  margin: 0 auto;
  border-top: 1px solid #000000;
 
`;

function Rodape() {
  return (
    <RodapeContainer>
      <p>© 2024 Metamind Tecnologia. Todos os direitos reservados</p>
    </RodapeContainer>
  );
}

export default Rodape;