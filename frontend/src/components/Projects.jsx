import React from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import profilePhoto from '../assets/profile-photo.jpg';

const Projects = () => {
  const projects = [
    {
      title: "Cloud-Native Resource Monitoring App",
      description: " Built a real-time system metrics dashboard using Flask and psutil.",
      image: "project1.jpg",
      tags: ["Kubernetes", "Flask", "Python", "Containerd"],
      github: "https://github.com/apurvagargote/Cloud-native-monitoring-app",
      demo: "https://architecture-diagram-url.com",
      outcomes: "Deployed on Kubernetes (KIND) using Containerd; improved setup efficiency by 40% and Optimized system responsiveness to 300ms under 100+ concurrent test requests."
    },
    {
      title: "Node.js ToDo App with CI/CD Pipeline",
      description: " Designed and automated a full CI/CD pipeline using Jenkins and GitHub Webhooks..",
      image: "project2.jpg",
      tags: ["Node.js", "Jenkins", "Docker", " AWS EC2", " GitHub Webhooks"],
      github: "https://github.com/apurvagargote/Node-todo-cicd",
      demo: "https://architecture-diagram-url.com",
      outcomes: "Reduced deployment time by 53% (15min → 7min); maintained 95% build success rate and  Enabled zero-downtime releases using Docker and Nginx reverse proxy on AWS EC2."
    },
    {
      title: "Two-Tier Flask Web App on Kubernetes",
      description: " Deployed a Flask–MySQL app on Kubernetes with persistent volumes and service discovery.",
      image: "project3.jpg",
      tags: ["Flask", "MySQL", "Kubernetes", "Containerd", "AWS"],
      github: "https://github.com/apurvagargote/two-tier-flask-app",
      demo: "https://architecture-diagram-url.com",
      outcomes: " Configured 3 services, 2 PVCs, and horizontal pod autoscaling for scalability and Ensured 99.9% uptime through resilient deployment and AWS-based network security."
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