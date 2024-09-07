import './Style.scss';
import Icone from './imagens/Icone de carro.png';

function Texto() {
  return (
    <div className="texto-container">
      <h1>Está com problemas no seu veículo?</h1>
      <p><span>Não se preocupe! Com a AutoCarePlus,</span> você pode diagnosticar falhas em segundos e agendar serviços de onde estiver</p>
      
      {/* Coloque a imagem dentro de um contêiner separado */}
      <div className="imagem-container">
        <img src={Icone} className="Iconecarro" alt="Ícone do Carro" />
      </div>

      <h2>Bem-vindo ao novo jeito de cuidar do seu carro!</h2>
    </div>
  );
}

export default Texto;


