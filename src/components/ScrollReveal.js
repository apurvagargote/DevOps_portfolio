import { useEffect } from 'react';

const ScrollReveal = () => {
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');
    const sectionTitles = document.querySelectorAll('.section-title');
    const sections = document.querySelectorAll('main > div');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    const revealOnScroll = () => {
      // Animate regular reveal elements
      revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
          element.classList.add('active');
        }
      });
      
      // Animate section titles
      sectionTitles.forEach(title => {
        const titleTop = title.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (titleTop < windowHeight - 100) {
          title.classList.add('animate');
        }
      });
      
      // Update active navbar link based on scroll position
      let currentSectionId = '';
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight / 2) {
          currentSectionId = section.id;
        }
      });
      
      if (currentSectionId) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${currentSectionId}`) {
            link.classList.add('active');
          }
        });
      }
    };
    
    window.addEventListener('scroll', revealOnScroll);
    // Initial check
    setTimeout(revealOnScroll, 300);
    
    return () => window.removeEventListener('scroll', revealOnScroll);
  }, []);
  
  return null;
};

export default ScrollReveal;