import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4 mt-5">
      <Container>
        <Row>
          <Col md={6} className="text-center text-md-start">
            <p>&copy; {new Date().getFullYear()} DevOps Portfolio</p>
          </Col>
          <Col md={6} className="text-center text-md-end">
            <a href="https://github.com/apurvagargote" target="_blank" rel="noopener noreferrer" className="text-white me-3">
              <FaGithub size={24} />
            </a>
            <a href="https://linkedin.com/in/apurvagargote" target="_blank" rel="noopener noreferrer" className="text-white">
              <FaLinkedin size={24} />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;