// src/pages/Sobrenos.jsx

import Cabecalho from '../../Componentes/Cabecalho';
import Rodape from '../../Componentes/Rodape';
import'./Style.scss'
import Arthur from './Imagens/Foto-Arthur.jpg'
import Joao from './Imagens/Foto-Joao.jpg'
import Paulo from './Imagens/Carpina.jpeg'

function Sobrenos() {
  
  
    return (
    <div>
      <Cabecalho />

      <main className="apresentacao" role="main">
        <h1 className='texto1'>Bem-vindo à MetaMind!</h1>
        <span className="frase-destaque">A MetaMind é uma consultoria que visa resolver problemas do cotidiano utilizando tecnologia.</span>
        <p>Conheça um pouco do nosso time:</p>

        <div className="container">
          <div className="boxes-container">
            {/* Perfil 1 - Arthur Bispo */}
            <div className="box box2 coluna1 profile-container" role="complementary">
              <img
                src={Arthur}
                alt="foto do Arthur Bispo"
                className="coluna-img profile-img"
              />
              <span className="profile-story">
                Arthur Bispo de Lima é apaixonado por desenvolvimento web e tem experiência em projetos de sustentabilidade. Ele adora desafios e está sempre buscando aprender algo novo.
              </span>
              <div className="text">
                <p>Arthur Bispo de Lima</p>
                <p>RM: 557568</p>
                <p>TURMA: 1TDSPV</p>
                <a
                  href="https://github.com/ArthurBispo00?tab=repositories"
                  aria-label="GitHub do Arthur"
                >
                  GitHub Arthur
                </a>
                <a href="https://github.com/ArthurBispo00/Sprint1-Front" aria-label="Repositório do Projeto">
                  Repositório do Projeto
                </a>
              </div>
            </div>

            {/* Perfil 2 - João Paulo Moreira */}
            <div className="box box3 coluna2 profile-container" role="complementary">
              <img
                src={Joao}
                alt="foto do João Paulo Moreira"
                className="coluna-img profile-img"
              />
              <span className="profile-story">
                João Paulo Moreira dos Santos é entusiasta de tecnologia e meio ambiente. Ele acredita que a inovação pode ser uma grande aliada na preservação dos recursos naturais.
              </span>
              <div className="text">
                <p>João Paulo Moreira dos Santos</p>
                <p>RM: 557808</p>
                <p>TURMA: 1TDSPV</p>
                <a
                  href="https://github.com/joao1015?tab=repositories"
                  aria-label="GitHub do João Paulo"
                >
                  GitHub João Paulo
                </a>
                <a href="https://github.com/ArthurBispo00/Sprint1-Front" aria-label="Repositório do Projeto">
                  Repositório do Projeto
                </a>
              </div>
            </div>

            {/* Perfil 3 - Paulo André Carminati */}
            <div className="box box4 coluna3 profile-container" role="complementary">
              <img
                src={Paulo}
                alt="foto de Paulo André Carminati"
                className="coluna-img profile-img"
              />
              <span className="profile-story">
                Paulo André Carminati tem uma visão inovadora sobre soluções ambientais. Ele está sempre à procura de maneiras criativas para resolver problemas complexos.
              </span>
              <div className="text">
                <p>Paulo André Carminati</p>
                <p>RM: 557881</p>
                <p>TURMA: 1TDSPZ</p>
                <a href="https://github.com/carmipa" aria-label="GitHub do Paulo André">
                  GitHub Paulo André
                </a>
                <a
                  href="https://github.com/ArthurBispo00/Projeto_Oceanos_Limpos"
                  aria-label="Repositório do Projeto"
                >
                  Repositório do Projeto
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Rodape />
    </div>
  );
}

export default Sobrenos
