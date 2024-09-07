// src/index.tsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importa o BrowserRouter e as rotas
import App from './App.tsx';
import './index.css';
import Home from './Componentes/Main'; // Atualize o caminho conforme necessário
import Sobrenos from './routes/SobreNos/index.tsx'; // Atualize o caminho conforme necessário

// Cria a raiz do React
const root = createRoot(document.getElementById('root')!);

root.render(
  <StrictMode>
    <Router> {/* Adiciona o Router para gerenciar as rotas */}
      <Routes>
        <Route path="/" element={<App />} /> {/* Página inicial */}
        <Route path="/home" element={<Home />} /> {/* Página Home */}
        <Route path="/sobrenos" element={<Sobrenos />} /> {/* Página Sobre Nós */}
      </Routes>
    </Router>
  </StrictMode>
);
