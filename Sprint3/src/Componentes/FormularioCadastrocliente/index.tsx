import React, { useState } from 'react';
import './Style.scss'; // Importe os estilos necessários
import { Link } from 'react-router-dom';
function Formulario() {
  // Estados para armazenar os valores dos inputs do formulário
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  // Função que lida com o envio do formulário
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Evita o comportamento padrão de recarregar a página
    
    // Armazenar os dados no localStorage
    const usuario = {
      nome,
      email,
      senha,
    };
    
    localStorage.setItem('usuario', JSON.stringify(usuario));
    
    // Limpar o formulário (opcional)
    setNome('');
    setEmail('');
    setSenha('');
    
    alert('Conta criada com sucesso!');
  };

  return (
    <div className="formulario-container">
      <form className="formulario" onSubmit={handleSubmit}>
        <h2>Crie sua Conta Gratuita</h2>
        <div className="form-group">
          <label htmlFor="nome">Nome Completo</label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="senha">Senha</label>
          <input
            type="password"
            id="senha"
            name="senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
        </div>
        <button type="submit">Criar Conta</button>
        <p className='link'>Já tem uma conta? <Link to="/entrar">Faça login</Link></p>
        
      </form>
      
    </div>
  );
}

export default Formulario;
