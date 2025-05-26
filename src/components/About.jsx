import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const About = () => {
  return (
    <Container className="section">
      <Row>
        <Col lg={8} className="mx-auto text-center">
          <h2 className="section-title">About Me</h2>
        </Col>
      </Row>
      <Row>
        <Col lg={8} className="mx-auto">
          <Card className="border-0 shadow-sm">
            <Card.Body className="p-5">
              <p className="lead">
                I'm a passionate DevOps Engineer with expertise in automating and optimizing critical deployments in cloud environments.
              </p>
              <p>
                With a background in both development and operations, I bridge the gap between writing code and deploying applications at scale.
                I specialize in designing and implementing CI/CD pipelines, infrastructure as code, and containerization strategies that enable
                teams to deliver software faster and more reliably.
              </p>
              <p>
                My approach focuses on creating scalable, secure, and self-healing infrastructure that supports modern application development.
                I'm particularly interested in cloud-native technologies, Kubernetes orchestration, and implementing GitOps workflows.
              </p>
              <h4 className="mt-4">Career Goals</h4>
              <p>
                I aim to continue growing as a DevOps architect, designing systems that enable organizations to achieve continuous delivery
                while maintaining high reliability and security standards. I'm passionate about mentoring teams in DevOps practices and
                contributing to open-source projects that advance the field.
              </p>
              <h4 className="mt-4">Interests</h4>
              <p>
                Beyond my professional work, I enjoy exploring new technologies through side projects, contributing to tech communities,
                and staying current with industry trends. I'm particularly interested in cloud-native architectures, serverless computing,
                and infrastructure security.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default About;