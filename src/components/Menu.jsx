import { NavLink } from 'react-router-dom';

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/sobre', label: 'Sobre' },
  { to: '/contato', label: 'Contato' },
  { to: '/produtos', label: 'Produtos' },
];

export default function Menu() {
  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Navegação principal">
        <NavLink className="brand" to="/">
          ReactStore
        </NavLink>

        <div className="nav-links">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) =>
                isActive ? 'nav-link nav-link-active' : 'nav-link'
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
}
