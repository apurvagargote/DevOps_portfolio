import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { FaDownload, FaBriefcase, FaGraduationCap, FaCertificate } from 'react-icons/fa';

const Resume = () => {
  // Sample resume data
  const experience = [
    {
      title: "Senior DevOps Engineer",
      company: "Tech Solutions Inc.",
      period: "2021 - Present",
      description: [
        "Led the migration from monolithic architecture to microservices using Kubernetes and Docker",
        "Implemented GitOps workflow with ArgoCD, reducing deployment errors by 75%",
        "Designed and maintained CI/CD pipelines using Jenkins and GitHub Actions",
        "Automated infrastructure provisioning with Terraform, supporting multi-cloud deployments"
      ]
    },
    {
      title: "DevOps Engineer",
      company: "Cloud Systems LLC",
      period: "2018 - 2021",
      description: [
        "Built and maintained AWS infrastructure using CloudFormation and Terraform",
        "Implemented monitoring and alerting using Prometheus and Grafana",
        "Containerized legacy applications and migrated them to Kubernetes",
        "Reduced deployment time from days to minutes through pipeline automation"
      ]
    },
    {
      title: "Systems Administrator",
      company: "Data Networks Corp",
      period: "2016 - 2018",
      description: [
        "Managed Linux server environments and automated routine tasks",
        "Implemented configuration management using Ansible",
        "Supported CI/CD pipelines and deployment processes",
        "Improved system uptime from 99.5% to 99.9% through monitoring and automation"
      ]
    }
  ];

  const education = [
    {
      degree: "B.S. Computer Science",
      institution: "Tech University",
      year: "2016",
      description: "Focus on distributed systems and software engineering"
    }
  ];

  const certifications = [
    { name: "AWS Certified DevOps Engineer - Professional", year: "2022" },
    { name: "Certified Kubernetes Administrator (CKA)", year: "2021" },
    { name: "HashiCorp Certified Terraform Associate", year: "2020" },
    { name: "AWS Certified Solutions Architect - Associate", year: "2019" }
  ];

  return (
    <Container className="section">
      <Row>
        <Col lg={8} className="mx-auto text-center">
          <h2 className="section-title">Resume</h2>
          <p className="lead mb-4">
            My professional journey in DevOps and cloud infrastructure.
          </p>
          <Button variant="primary" size="lg" className="mb-5">
            <FaDownload className="me-2" /> Download Full Resume
          </Button>
        </Col>
      </Row>

      <Row>
        <Col lg={10} className="mx-auto">
          <Card className="border-0 shadow-sm mb-5">
            <Card.Body className="p-5">
              <h3 className="mb-4">
                <FaBriefcase className="me-3" /> Work Experience
              </h3>
              
              {experience.map((job, index) => (
                <div key={index} className={index !== experience.length - 1 ? "mb-5" : ""}>
                  <h4>{job.title}</h4>
                  <h5 className="text-muted">{job.company} | {job.period}</h5>
                  <ul className="mt-3">
                    {job.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </Card.Body>
          </Card>

          <Row>
            <Col md={6}>
              <Card className="border-0 shadow-sm h-100">
                <Card.Body className="p-4">
                  <h3 className="mb-4">
                    <FaGraduationCap className="me-3" /> Education
                  </h3>
                  
                  {education.map((edu, index) => (
                    <div key={index}>
                      <h4>{edu.degree}</h4>
                      <h5 className="text-muted">{edu.institution} | {edu.year}</h5>
                      <p>{edu.description}</p>
                    </div>
                  ))}
                </Card.Body>
              </Card>
            </Col>
            
            <Col md={6}>
              <Card className="border-0 shadow-sm h-100">
                <Card.Body className="p-4">
                  <h3 className="mb-4">
                    <FaCertificate className="me-3" /> Certifications
                  </h3>
                  
                  <ul className="list-unstyled">
                    {certifications.map((cert, index) => (
                      <li key={index} className="mb-3">
                        <h5>{cert.name}</h5>
                        <p className="text-muted">Issued {cert.year}</p>
                      </li>
                    ))}
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Resume;