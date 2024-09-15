import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App.tsx';
import './index.css';
import Home from './routes/PAGINAHOME'; 
import Sobrenos from './routes/SobreNos/index.tsx'; 
import Cadastrados from './routes/Entrar/index.tsx';
import Logado from './routes/Logado/index.tsx';
import Chatbot from './Componentes/InteracaoIA/index.tsx'; 
import Agenda from './routes/Agendamentooficinas/index.tsx'; 
import OF from './routes/OficinasLogin'; 
import OFL from './routes/OficinasLogada/index.tsx'; 
import SEJACADASTRADO from './routes/LoginClientes'; 
import ConhecaAuto from './routes/ConhecaAuto/index.tsx'; 

import OrcamentosRecebidos from './Componentes/Ordens recebidas/index.tsx';
import GestaoOrcamentos from './Componentes/GestaoOrcamentos/index.tsx';
import OrdensFinalizadas from './Componentes/Ordens finalizadas';

const root = createRoot(document.getElementById('root')!);

root.render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} /> {/* Página inicial */}
        <Route path="/home" element={<Home />} /> {/* Página Home */}
        <Route path="/sobrenos" element={<Sobrenos />} /> {/* Página Sobre Nós */}
        <Route path="/entrar" element={<Cadastrados />} /> {/* Página de Login */}
        <Route path="/Logado" element={<Logado />} /> {/* Página logado */}
        <Route path="/chatbot" element={<Chatbot />} /> {/* Caminho ajustado para o chatbot */}
        <Route path="/Orcamentos" element={<Agenda />} /> {/* Caminho ajustado para a Agenda */}
        <Route path="/lOGINoFICINAS" element={<OF />} /> {/* Caminho ajustado para a Agenda */}
        <Route path="Pagina_da_credenciada" element={<OFL />} /> {/* Caminho ajustado para a Agenda */}
        <Route path="/SejaCadastrado" element={<SEJACADASTRADO />} /> {/* Caminho ajustado para a Agenda */}
      </Routes>
    </Router>
  </StrictMode>
);
