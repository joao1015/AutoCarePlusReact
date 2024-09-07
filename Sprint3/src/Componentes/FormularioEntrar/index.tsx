import React, { useState } from 'react';
import '../FormularioEntrar/style.scss';

function Login() {
  // Estado para armazenar o email e a senha digitados pelo usuário
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  // Função que lida com o envio do formulário de login
  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Evita o comportamento padrão de recarregar a página

    // Recupera os dados do usuário armazenados no localStorage com verificação de null
    const usuarioData = localStorage.getItem('usuario');
    const usuario = usuarioData ? JSON.parse(usuarioData) : null;

    // Verifica se os dados do usuário correspondem aos fornecidos no formulário
    if (usuario && usuario.email === email && usuario.senha === senha) {
      alert('Login bem-sucedido!');
      // Adicione aqui a lógica adicional após um login bem-sucedido, como redirecionamento
    } else {
      alert('Email ou senha incorretos.'); // Mensagem de erro se os dados não corresponderem
    }
  };

  return (
    <div className="logado"> {/* Reutilizando o container do formulário */}
      <form className="balao" onSubmit={handleLogin}> {/* Reutilizando a classe do formulário */}
        <h2>Acessa conta - Preencha seus dados
        de acesso para continuar</h2>
        <div className="form"> {/* Reutilizando o grupo de formulários */}
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
        <div className="form"> {/* Reutilizando o grupo de formulários */}
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
        <button className='logar' type="submit">Entrar</button > 
      </form>
    </div>
  );
}

export default Login;
