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
          <div id="home"><Home /></div>
          <div id="about"><About /></div>
          <div id="skills"><Skills /></div>
          <div id="projects"><Projects /></div>
          <div id="resume"><Resume /></div>
          <div id="contact"><Contact /></div>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;