import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <>
    <nav className="navbar">
        <NavLink 
        to="/" className={({ isActive }) => (isActive ? 'active nav-link' : 'nav-link')}>
        Home
        </NavLink>
        <NavLink to="/compras" className={({ isActive }) => (isActive ? 'active nav-link' : 'nav-link')}>
        Compras
        </NavLink>
        <NavLink to="/contato" className={({ isActive }) => (isActive ? 'active nav-link' : 'nav-link')}>
        Fale Conosco
        </NavLink>
    </nav>
    </>
  );
}
export default Navbar;