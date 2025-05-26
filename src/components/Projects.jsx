import React from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: "Kubernetes Microservices Platform",
      description: "Designed and implemented a complete microservices platform using Kubernetes, Istio, and ArgoCD for continuous deployment.",
      image: "project1.jpg",
      tags: ["Kubernetes", "Istio", "ArgoCD", "Microservices"],
      github: "https://github.com/yourusername/k8s-microservices-platform",
      demo: "https://architecture-diagram-url.com",
      outcomes: "Reduced deployment time by 80% and improved system reliability with automated canary deployments."
    },
    {
      title: "Infrastructure as Code Framework",
      description: "Developed a comprehensive Terraform framework for provisioning and managing multi-environment AWS infrastructure.",
      image: "project2.jpg",
      tags: ["Terraform", "AWS", "IaC", "CI/CD"],
      github: "https://github.com/yourusername/terraform-aws-framework",
      demo: "https://architecture-diagram-url.com",
      outcomes: "Standardized infrastructure provisioning across 3 environments, reducing configuration drift and enabling infrastructure testing."
    },
    {
      title: "CI/CD Pipeline Automation",
      description: "Built a Jenkins pipeline framework with shared libraries for standardized build, test, and deployment processes.",
      image: "project3.jpg",
      tags: ["Jenkins", "Docker", "Pipeline-as-Code", "GitOps"],
      github: "https://github.com/yourusername/jenkins-pipeline-framework",
      demo: "https://architecture-diagram-url.com",
      outcomes: "Implemented for 15+ development teams, reducing onboarding time and ensuring consistent security scanning."
    },
    {
      title: "Cloud Cost Optimization Tool",
      description: "Created an automated solution for identifying and addressing underutilized AWS resources and implementing cost-saving measures.",
      image: "project4.jpg",
      tags: ["AWS", "Python", "Lambda", "Cost Optimization"],
      github: "https://github.com/yourusername/cloud-cost-optimizer",
      demo: "https://architecture-diagram-url.com",
      outcomes: "Reduced monthly cloud spend by 35% through automated resource rightsizing and scheduling."
    }
  ];

  return (
    <Container className="section">
      <Row>
        <Col lg={8} className="mx-auto text-center">
          <h2 className="section-title">DevOps Projects</h2>
          <p className="lead mb-5">
            A showcase of my key projects demonstrating DevOps practices, infrastructure automation, and cloud architecture.
          </p>
        </Col>
      </Row>
      
      <Row>
        {projects.map((project, index) => (
          <Col key={index} lg={6} className="mb-4">
            <Card className="h-100 project-card border-0 shadow-sm">
              <Card.Body className="p-4">
                <h3>{project.title}</h3>
                <div className="mb-3">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} bg="primary" className="me-2 mb-2">{tag}</Badge>
                  ))}
                </div>
                <Card.Text>{project.description}</Card.Text>
                <h5 className="mt-3">Outcomes:</h5>
                <Card.Text>{project.outcomes}</Card.Text>
              </Card.Body>
              <Card.Footer className="bg-white border-0 p-4">
                <div className="d-flex justify-content-between">
                  <Button variant="outline-dark" href={project.github} target="_blank" rel="noopener noreferrer">
                    <FaGithub className="me-2" /> GitHub
                  </Button>
                  <Button variant="outline-primary" href={project.demo} target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt className="me-2" /> Architecture
                  </Button>
                </div>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Projects;