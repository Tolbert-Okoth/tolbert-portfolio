import React from 'react';
import Hero from './components/Hero';
import ProjectList from './components/ProjectList';
import About from './components/About';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <main className="flex-grow-1">
        <Hero />
        <ProjectList />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;