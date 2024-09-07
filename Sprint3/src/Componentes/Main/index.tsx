import Cabecalho from "../Cabecalho";
import Formulario from "../FormularioCadastrocliente";
import Rodape from "../Rodape";
import Apresentacao from '../ApresentacaoCliente'; // Corrige a importação do componente

function Main() {
  return (
    <div>
      <Cabecalho />
      <Apresentacao /> {/* Utiliza o componente corretamente */}
      <Formulario />
      <Rodape />
    </div>
  );
}

export default Main;




