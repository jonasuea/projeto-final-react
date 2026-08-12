import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
        <NavLink 
        to="/" style={({ isActive }) => ({ color: isActive ? 'blue' : 'black' })}>
        Home
        </NavLink>
        <NavLink to="/compras" style={({ isActive }) => ({ color: isActive ? 'blue' : 'black' })}>
        Compras
        </NavLink>
        <NavLink to="/contato" style={({ isActive }) => ({ color: isActive ? 'blue' : 'black' })}>
        Fale Conosco
        </NavLink>
    </nav>
  );
}
export default Navbar;