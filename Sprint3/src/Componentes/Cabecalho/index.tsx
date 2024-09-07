// src/Componentes/Cabecalho/index.tsx
import './Style.scss'; // Importe os estilos necessários
import logo from './Imagems/LogoAutoCareplus.png'; // Substitua pelo caminho correto da sua imagem
import { Link } from 'react-router-dom'; // Importa o Link para navegação

function Cabecalho() {
  return (
    <header className="cabecalho">
      <img src={logo} alt="Logo do Aplicativo" className="logo" />
      <Link to="/sobrenos" className="sobre-nos-button">
        Sobre Nós
      </Link>
    </header>
  );
}

export default Cabecalho;
