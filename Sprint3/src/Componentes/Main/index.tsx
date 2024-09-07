import Cabecalho from "../Cabecalho";
import Formulario from "../FormularioCadastrocliente";
import Rodape from "../Rodape";
import Apresentacao from '../ApresentacaoCliente'; 
function Main() {
  document.title = "Home"; 
  return (
    <div>
      <Cabecalho />
      <Apresentacao /> 
      <Formulario />
      <Rodape />
    </div>
  );
}

export default Main;




