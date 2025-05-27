import React, { useContext, useEffect, useState, useRef } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
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
  const location = useLocation();
  
  useEffect(() => {
    // Close navbar when route changes
    setExpanded(false);
  }, [location]);
  
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
      bg={isDarkMode ? "dark" : "light"} 
      variant={isDarkMode ? "dark" : "light"} 
      expand="lg" 
      sticky="top" 
      className="navbar-dark"
      expanded={expanded}
      ref={navbarRef}
    >
      <Container className="d-flex justify-content-between">
        <NavbarBrandWrapper>
          <Navbar.Brand as={Link} to="/" className="gradient-text">DevOps Portfolio</Navbar.Brand>
        </NavbarBrandWrapper>
        <div className="d-flex align-items-center">
          <ThemeToggleWrapper className="d-flex d-lg-none me-2">
            <ThemeToggle />
          </ThemeToggleWrapper>
          <CustomToggle 
            aria-controls="basic-navbar-nav" 
            onClick={() => setExpanded(!expanded)}
          />
        </div>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" onClick={() => setExpanded(false)}>Home</Nav.Link>
            <Nav.Link as={Link} to="/about" onClick={() => setExpanded(false)}>About</Nav.Link>
            <Nav.Link as={Link} to="/skills" onClick={() => setExpanded(false)}>Skills</Nav.Link>
            <Nav.Link as={Link} to="/projects" onClick={() => setExpanded(false)}>Projects</Nav.Link>
            <Nav.Link as={Link} to="/resume" onClick={() => setExpanded(false)}>Resume</Nav.Link>
            <Nav.Link as={Link} to="/contact" onClick={() => setExpanded(false)}>Contact</Nav.Link>
            <ThemeToggleWrapper className="d-none d-lg-flex">
              <ThemeToggle />
            </ThemeToggleWrapper>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
