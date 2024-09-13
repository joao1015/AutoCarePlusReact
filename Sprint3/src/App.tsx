// src/App.tsx
import './index.css'; // Certifique-se de que os estilos estão importados corretamente
import Home from './routes/PAGINAHOME'; // Corrija a importação para usar o nome correto do componente
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border: 0; /* Reseta a borda de todos os elementos */
  }
`;

function App() {
  return (
    <div>
      <GlobalStyle />
      <div>
        <Home />
        
      </div>
    </div>
  );
}

export default App;

