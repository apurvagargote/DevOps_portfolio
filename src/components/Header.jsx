import React, { useContext, useEffect, useState, useRef } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import ThemeToggle from './ThemeToggle';
import { ThemeContext } from '../context/ThemeContext';
import styled from 'styled-components';

const ThemeToggleWrapper = styled.div`
  margin-left: 15px;
  display: flex;
  align-items: center;
  transition: all 0.3s ease;
  
  &:hover {
    transform: rotate(10deg);
  }
`;

const NavbarBrandWrapper = styled.div`
  max-width: 60%;
  @media (max-width: 576px) {
    max-width: 50%;
  }
`;

const CustomToggle = styled(Navbar.Toggle)`
  border-color: var(--accent-color) !important;
  
  .navbar-toggler-icon {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='%23C9A0DC' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e") !important;
  }
`;

const Header = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const [expanded, setExpanded] = useState(false);
  const navbarRef = useRef(null);
  useEffect(() => {
    // Close navbar when clicking a navigation link
    const handleNavClick = () => {
      setExpanded(false);
    };
    
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', handleNavClick);
    });
    
    return () => {
      navLinks.forEach(link => {
        link.removeEventListener('click', handleNavClick);
      });
    };
  }, []);
  
  // Add active class to nav links based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.pageYOffset + 100; // Offset for better detection
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          navLink?.classList.add('active');
        } else {
          navLink?.classList.remove('active');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
      if (navbar) {
        if (window.scrollY > 50) {
          navbar.classList.add('navbar-glass');
        } else {
          navbar.classList.remove('navbar-glass');
        }
      }
    };
    
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target) && expanded) {
        setExpanded(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [expanded]);
  
  return (
    <Navbar 
      as="nav"
      bg={isDarkMode ? "dark" : "light"} 
      variant={isDarkMode ? "dark" : "light"} 
      expand="lg" 
      sticky="top" 
      className="navbar-dark"
      expanded={expanded}
      ref={navbarRef}
      role="navigation"
      aria-label="Main navigation"
    >
      <Container className="d-flex justify-content-between">
        <NavbarBrandWrapper>
          <Navbar.Brand href="#home" className="gradient-text">DevOps Portfolio</Navbar.Brand>
        </NavbarBrandWrapper>
        <div className="d-flex align-items-center">
          <ThemeToggleWrapper className="d-flex d-lg-none me-2">
            <ThemeToggle />
          </ThemeToggleWrapper>
          <CustomToggle 
            aria-controls="basic-navbar-nav" 
            onClick={() => setExpanded(!expanded)}
            aria-label="Toggle navigation"
          />
        </div>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto" as="ul">
            <Nav.Item as="li"><Nav.Link href="#home" onClick={() => setExpanded(false)}>Home</Nav.Link></Nav.Item>
            <Nav.Item as="li"><Nav.Link href="#about" onClick={() => setExpanded(false)}>About</Nav.Link></Nav.Item>
            <Nav.Item as="li"><Nav.Link href="#skills" onClick={() => setExpanded(false)}>Skills</Nav.Link></Nav.Item>
            <Nav.Item as="li"><Nav.Link href="#projects" onClick={() => setExpanded(false)}>Projects</Nav.Link></Nav.Item>
            <Nav.Item as="li"><Nav.Link href="#resume" onClick={() => setExpanded(false)}>Resume</Nav.Link></Nav.Item>
            <Nav.Item as="li"><Nav.Link href="#contact" onClick={() => setExpanded(false)}>Contact</Nav.Link></Nav.Item>
            <Nav.Item as="li">
              <ThemeToggleWrapper className="d-none d-lg-flex">
                <ThemeToggle />
              </ThemeToggleWrapper>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
