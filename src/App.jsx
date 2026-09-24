import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';
import Produtos from './pages/Produtos';
import ProdutoDetalhe from './pages/ProdutoDetalhe';
import NaoEncontrada from './pages/NaoEncontrada';
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <Menu />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/produtos" element={<Produtos />} />
            <Route path="/produtos/:id" element={<ProdutoDetalhe />} />
            <Route path="*" element={<NaoEncontrada />} />
          </Routes>
        </main>
        <footer className="footer">
          Atividade Guiada • React + React Router
        </footer>
      </div>
    </BrowserRouter>
  );
}
