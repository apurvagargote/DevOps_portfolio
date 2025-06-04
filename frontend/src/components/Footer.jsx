import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4 mt-5" role="contentinfo">
      <Container>
        <Row>
          <Col md={6} className="text-center text-md-start">
            <p>&copy; {new Date().getFullYear()} DevOps Portfolio</p>
          </Col>
          <Col md={6} className="text-center text-md-end">
            <nav aria-label="Social media links">
              <a href="https://github.com/apurvagargote" target="_blank" rel="noopener noreferrer" className="text-white me-3" aria-label="GitHub Profile">
                <FaGithub size={24} aria-hidden="true" />
              </a>
              <a href="https://linkedin.com/in/apurvagargote" target="_blank" rel="noopener noreferrer" className="text-white" aria-label="LinkedIn Profile">
                <FaLinkedin size={24} aria-hidden="true" />
              </a>
            </nav>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;