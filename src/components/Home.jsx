import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeroSection = styled.div`
  padding: 120px 0;
  background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
  color: white;
`;

const Home = () => {
  return (
    <>
      <HeroSection>
        <Container>
          <Row className="align-items-center">
            <Col lg={8} className="mx-auto text-center">
              <h1 className="display-4 fw-bold mb-4">DevOps Engineer Portfolio</h1>
              <p className="lead mb-5">
                Specializing in CI/CD pipelines, infrastructure as code, and cloud architecture.
                Building scalable, reliable, and automated infrastructure solutions.
              </p>
              <div>
                <Button as={Link} to="/contact" variant="primary" size="lg" className="cta-button">
                  Contact Me
                </Button>
                <Button as={Link} to="/resume" variant="outline-light" size="lg" className="cta-button">
                  Download Resume
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </HeroSection>

      <Container className="section">
        <Row>
          <Col lg={8} className="mx-auto text-center">
            <h2 className="section-title">What I Do</h2>
            <p className="lead mb-5">
              I design and implement DevOps solutions that bridge development and operations,
              enabling teams to deliver software faster and more reliably.
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={4} className="mb-4">
            <div className="text-center">
              <div className="skill-icon">🚀</div>
              <h3>CI/CD Pipelines</h3>
              <p>Automated build, test, and deployment workflows using Jenkins, GitHub Actions, and more.</p>
            </div>
          </Col>
          <Col md={4} className="mb-4">
            <div className="text-center">
              <div className="skill-icon">⚙️</div>
              <h3>Infrastructure as Code</h3>
              <p>Terraform and CloudFormation for provisioning and managing cloud resources.</p>
            </div>
          </Col>
          <Col md={4} className="mb-4">
            <div className="text-center">
              <div className="skill-icon">🐳</div>
              <h3>Containerization</h3>
              <p>Docker and Kubernetes for container orchestration and microservices architecture.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;