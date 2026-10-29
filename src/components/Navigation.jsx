import Arrow from './Arrow';

export default function Navigation({ menuOpen, setMenuOpen }) {
  return (
    <header className="site-header">
        <a className="wordmark" href="#home" aria-label="OSUS home">O<span>S</span>U<span>S</span></a>
        <span className="header-descriptor">Quantitative engineering<br />Python & data systems.</span>
        <button className="menu-toggle" aria-expanded={menuOpen} aria-controls="navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? 'Close −' : 'Menu +'}</button>
        <nav id="navigation" className={menuOpen ? 'navigation is-open' : 'navigation'} aria-label="Main navigation">
          <a href="#work" onClick={() => setMenuOpen(false)}>Selected work</a>
          <a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a className="nav-contact" href="#contact" onClick={() => setMenuOpen(false)}>Let’s talk <Arrow /></a>
        </nav>
      </header>
  );
}
