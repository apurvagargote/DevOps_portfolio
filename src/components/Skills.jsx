import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { 
  FaJenkins, FaGithub, FaDocker, FaAws, 
  FaNetworkWired, FaTerminal, FaCode, FaLock 
} from 'react-icons/fa';
import { SiKubernetes, SiTerraform, SiAnsible, SiPrometheus, SiGrafana } from 'react-icons/si';

const Skills = () => {
  React.useEffect(() => {
    const cards = document.querySelectorAll('.spotlight-card');
    
    cards.forEach(card => {
      card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        
        card.style.setProperty('--x', `${x}%`);
        card.style.setProperty('--y', `${y}%`);
      });
    });
    
    return () => {
      cards.forEach(card => {
        card.removeEventListener('mousemove', () => {});
      });
    };
  }, []);
  const skillCategories = [
    {
      title: "CI/CD",
      skills: [
        { name: "Jenkins", icon: <FaJenkins className="skill-icon text-primary" /> },
        { name: "GitHub Actions", icon: <FaGithub className="skill-icon text-dark" /> },
        { name: "ArgoCD", icon: <SiKubernetes className="skill-icon text-info" /> }
      ]
    },
    {
      title: "Containers & Orchestration",
      skills: [
        { name: "Docker", icon: <FaDocker className="skill-icon text-info" /> },
        { name: "Kubernetes", icon: <SiKubernetes className="skill-icon text-primary" /> },
        { name: "Helm", icon: <SiKubernetes className="skill-icon text-secondary" /> }
      ]
    },
    {
      title: "Infrastructure as Code",
      skills: [
        { name: "Terraform", icon: <SiTerraform className="skill-icon text-purple" /> },
        { name: "CloudFormation", icon: <FaAws className="skill-icon text-warning" /> },
        { name: "Ansible", icon: <SiAnsible className="skill-icon text-danger" /> }
      ]
    },
    {
      title: "Cloud Platforms",
      skills: [
        { name: "AWS", icon: <FaAws className="skill-icon text-warning" /> },
        { name: "Azure", icon: <FaNetworkWired className="skill-icon text-primary" /> },
        { name: "GCP", icon: <FaNetworkWired className="skill-icon text-success" /> }
      ]
    },
    {
      title: "Monitoring & Logging",
      skills: [
        { name: "Prometheus", icon: <SiPrometheus className="skill-icon text-danger" /> },
        { name: "Grafana", icon: <SiGrafana className="skill-icon text-warning" /> },
        { name: "ELK Stack", icon: <FaTerminal className="skill-icon text-success" /> }
      ]
    },
    {
      title: "Development & Version Control",
      skills: [
        { name: "Git & GitHub", icon: <FaGithub className="skill-icon text-dark" /> },
        { name: "Python", icon: <FaCode className="skill-icon text-primary" /> },
        { name: "Bash/Shell", icon: <FaTerminal className="skill-icon text-secondary" /> }
      ]
    },
    {
      title: "Security",
      skills: [
        { name: "SAST/DAST", icon: <FaLock className="skill-icon text-danger" /> },
        { name: "Secret Management", icon: <FaLock className="skill-icon text-warning" /> },
        { name: "IAM", icon: <FaLock className="skill-icon text-info" /> }
      ]
    }
  ];

  return (
    <Container className="section">
      <Row>
        <Col lg={8} className="mx-auto text-center">
          <h2 className="section-title">Skills & Tools</h2>
          <p className="lead mb-5">
            My technical toolkit spans the entire DevOps lifecycle, enabling me to build and maintain
            robust, scalable infrastructure and deployment pipelines.
          </p>
        </Col>
      </Row>
      {skillCategories.map((category, index) => (
        <Row key={index} className="mb-5">
          <Col xs={12}>
            <h3 className="mb-4 reveal">{category.title}</h3>
          </Col>
          {category.skills.map((skill, skillIndex) => (
            <Col key={skillIndex} md={4} className="mb-4">
              <Card className="h-100 border-0 shadow-sm reveal spotlight-card">
                <Card.Body className="text-center p-4">
                  {skill.icon}
                  <h4 className="mt-3">{skill.name}</h4>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      ))}
    </Container>
  );
};

export default Skills;