import React from 'react';
import styled from 'styled-components';

// Styled Component para o rodapé
const RodapeContainer = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 58px;
  background-color: #000;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 26px;
  box-sizing: border-box;
  z-index: 1000;
  margin: 0 auto;
`;

function Rodape() {
  return (
    <RodapeContainer>
      <p>© 2024 Metamind Tecnologia. Todos os direitos reservados</p>
    </RodapeContainer>
  );
}

export default Rodape;