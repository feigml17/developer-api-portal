import { Braces, Code2, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Shell({ children }) {
  const [open, setOpen] = useState(false);
  const links = [['/', 'Overview'], ['/catalog', 'API catalog'], ['/dashboard', 'Dashboard']];

  return (
    <div className="app-shell">
      <header className="topbar">
        <Link className="brand" to="/" aria-label="Launchpad home">
          <span className="brand-mark"><Braces size={22} /></span>
          <span>Launchpad</span>
        </Link>
        <button className="menu-button" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
        <nav className={open ? 'nav open' : 'nav'}>
          {links.map(([to, label]) => <NavLink key={to} to={to} onClick={() => setOpen(false)}>{label}</NavLink>)}
          <a className="github-link" href="https://github.com/feigml17" target="_blank" rel="noreferrer"><Code2 size={17} /> GitHub</a>
        </nav>
      </header>
      <main>{children}</main>
      <footer><span>Portfolio project by Chu Fei Lee</span><span>React · Laravel · Kubernetes</span></footer>
    </div>
  );
}

