// Componentes/Cabecalho/index.tsx
import './Style.scss'; // Importe os estilos necessários
import logo from './Imagems/LogoAutoCareplus.png'; // Substitua pelo caminho correto da sua imagem

function Cabecalho() {
  return (
    <header className="cabecalho">
      <img src={logo} alt="Logo do Aplicativo" className="logo" />
      
    </header>
  );
}

export default Cabecalho;
