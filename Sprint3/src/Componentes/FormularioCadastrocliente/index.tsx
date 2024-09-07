// src/Componentes/Formulario/Formulario.jsx
import './Style.scss'; // Importe os estilos necessários

function Formulario() {
  return (
    <div className="formulario-container">
      <form className="formulario">
        <h2>Crie sua Conta Gratuita</h2>
        <div className="form-group">
          <label htmlFor="nome">Nome Completo</label>
          <input type="text" id="nome" name="nome" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="senha">Senha</label>
          <input type="password" id="senha" name="senha" required />
        </div>
        
      </form>
    </div>
  );
}

export default Formulario;
