import './index.css'; // Certifique-se de que os estilos estão importados corretamente
import Cabecalho from './Componentes/Cabecalho/index'; // Certifique-se de que o caminho está correto
import Rodape from './Componentes/Rodape';
import Formulario from './Componentes/FormularioCadastrocliente';
import Texto from './Componentes/ApresentacaoCliente/index';

function App() {
  

  return (
    <div>
      <Cabecalho></Cabecalho>
      <Rodape></Rodape>
      <Formulario></Formulario>
      <Texto></Texto>
      
      
    </div>
  );
}

export default App;