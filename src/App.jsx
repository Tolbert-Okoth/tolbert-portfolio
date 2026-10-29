import { useState } from 'react';
import { projects } from './data';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import ProjectList from './components/ProjectList';
import About from './components/About';
import Experience from './components/Experience';
import Credentials from './components/Credentials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState('All work');
  const visibleProjects = projects.filter(project => filter === 'All work' || project.categories.includes(filter));

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Navigation menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main id="main">
        <Hero />
        <ProjectList filter={filter} setFilter={setFilter} visibleProjects={visibleProjects} />
        <Experience />
        <About />
        <Credentials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
