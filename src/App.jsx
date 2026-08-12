import { Routes, Route } from 'react-router-dom';
import Inicio from './pages/Inicio.jsx';
import ListaCompras from './components/ListaCompras.jsx';
import Contato from './pages/Contato.jsx';
import Navbar from './components/Navbar.jsx';
import Header from './components/Header.jsx';


export default function App() {
  return (
    <div>
      <Header />
      <hr />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/compras" element={<ListaCompras />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </div>
  );
}