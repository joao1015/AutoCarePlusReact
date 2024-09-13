import Cabecalho from "../Cabecalho";
import Formulario from "../FormularioCadastrocliente";
import Rodape from "../Rodape";
import Apresentacao from '../ApresentacaoCliente'; 
function Main() {
  
  
  document.title = "Home"; 
  return (
    <div>
      
      <header>
      <Cabecalho />
      </header>
     <Apresentacao></Apresentacao>
      <footer>
      <Rodape />
      </footer>
    </div>
  );
}

export default Main;




