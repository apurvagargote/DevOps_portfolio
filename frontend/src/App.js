import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import ScrollReveal from './components/ScrollReveal';
import { ThemeProvider } from './context/ThemeContext';
import './styles/index.css';
import './styles/themes.css';
import './styles/animations.css';
import './styles/coolEffects.css';


function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Header />
        <ScrollReveal />
        <main>
          <section id="home" aria-label="Home section"><Home /></section>
          <section id="about" aria-label="About section"><About /></section>
          <section id="skills" aria-label="Skills section"><Skills /></section>
          <section id="projects" aria-label="Projects section"><Projects /></section>
          <section id="resume" aria-label="Resume section"><Resume /></section>
          <section id="contact" aria-label="Contact section"><Contact /></section>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App; 