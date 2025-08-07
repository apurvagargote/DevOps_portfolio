import React, { useState, useContext, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Badge, Carousel } from 'react-bootstrap';
import { FaGithub, FaCode, FaRocket } from 'react-icons/fa';
import styled from 'styled-components';
import { ThemeContext } from '../context/ThemeContext';

const ProjectCard = styled(Card)`
  border: 1px solid rgba(172, 129, 192, 0.3);
  background: ${props => props.isDark ? 
    'rgba(255, 255, 255, 0.08)' : 
    'rgba(255, 255, 255, 0.9)'
  };
  backdrop-filter: blur(10px);
  border-radius: 16px;
  transition: all 0.3s ease;
  height: 100%;
  min-height: 420px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, #ac81c0, #6c5ce7);
  }
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(172, 129, 192, 0.2);
    border-color: rgba(172, 129, 192, 0.5);
  }
  
  @media (max-width: 992px) {
    min-height: 380px;
    border-radius: 20px;
  }
  
  @media (max-width: 768px) {
    min-height: 350px;
    border-radius: 18px;
  }
  
  @media (max-width: 576px) {
    min-height: 400px;
    border-radius: 16px;
  }
`;

const ProjectTitle = styled.h4`
  color: ${props => props.isDark ? '#ffffff' : '#333333'} !important;
  font-weight: 700 !important;
  margin-bottom: 1rem;
  font-size: 1.1rem !important;
  display: block !important;
  text-align: center !important;
  line-height: 1.3;
  
  @media (max-width: 992px) {
    font-size: 1.1rem !important;
  }
  
  @media (max-width: 768px) {
    font-size: 1rem !important;
    margin-bottom: 1rem;
  }
  
  @media (max-width: 576px) {
    font-size: 1.15rem !important;
    margin-bottom: 1.2rem;
  }
`;

const ProjectDescription = styled.p`
  color: ${props => props.isDark ? '#e0e0e0' : '#666666'};
  font-size: 0.9rem;
  line-height: 1.5;
  margin-bottom: 1rem;
  text-align: center;
  
  @media (max-width: 992px) {
    font-size: 0.85rem;
  }
  
  @media (max-width: 768px) {
    font-size: 0.8rem;
    margin-bottom: 0.8rem;
  }
  
  @media (max-width: 576px) {
    font-size: 0.9rem;
    margin-bottom: 1rem;
  }
`;

const OutcomeText = styled.p`
  color: ${props => props.isDark ? '#b0b0b0' : '#555555'};
  font-size: 0.8rem;
  line-height: 1.4;
  text-align: left;
  font-style: italic;
  
  @media (max-width: 992px) {
    font-size: 0.75rem;
  }
  
  @media (max-width: 768px) {
    font-size: 0.7rem;
  }
  
  @media (max-width: 576px) {
    font-size: 0.8rem;
    line-height: 1.4;
  }
`;

const TagBadge = styled(Badge)`
  background: linear-gradient(45deg, #ac81c0, #6c5ce7) !important;
  border: none;
  font-size: 0.7rem;
  padding: 0.3rem 0.6rem;
  margin: 0.2rem;
  border-radius: 15px;
  
  @media (max-width: 992px) {
    font-size: 0.65rem;
    padding: 0.25rem 0.5rem;
  }
  
  @media (max-width: 768px) {
    font-size: 0.6rem;
    padding: 0.2rem 0.4rem;
    margin: 0.15rem;
  }
  
  @media (max-width: 576px) {
    font-size: 0.7rem;
    padding: 0.3rem 0.6rem;
    margin: 0.2rem;
  }
`;

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [cardsPerSlide, setCardsPerSlide] = useState(3);
  const { isDarkMode } = useContext(ThemeContext);
  
  useEffect(() => {
    const updateCardsPerSlide = () => {
      if (window.innerWidth < 576) {
        setCardsPerSlide(1);
      } else if (window.innerWidth < 992) {
        setCardsPerSlide(2);
      } else {
        setCardsPerSlide(3);
      }
    };
    
    updateCardsPerSlide();
    window.addEventListener('resize', updateCardsPerSlide);
    
    return () => window.removeEventListener('resize', updateCardsPerSlide);
  }, []);

  const projects = [
    {
      title: "Cloud-Native Resource Monitoring App",
      description: "Built a real-time system metrics dashboard using Flask and psutil.",
      tags: ["Kubernetes", "Flask", "Python", "Containerd"],
      github: "https://github.com/apurvagargote/Cloud-native-monitoring-app",
      outcomes: "Deployed on Kubernetes (KIND) using Containerd; improved setup efficiency by 40% and optimized system responsiveness to 300ms under 100+ concurrent test requests."
    },
    {
      title: "Node.js ToDo App with CI/CD Pipeline",
      description: "Designed and automated a full CI/CD pipeline using Jenkins and GitHub Webhooks.",
      tags: ["Node.js", "Jenkins", "Docker", "AWS EC2", "GitHub Webhooks"],
      github: "https://github.com/apurvagargote/Node-todo-cicd",
      outcomes: "Reduced deployment time by 53% (15min → 7min); maintained 95% build success rate and enabled zero-downtime releases using Docker and Nginx reverse proxy on AWS EC2."
    },
    {
      title: "Two-Tier Flask Web App on Kubernetes",
      description: "Deployed a Flask–MySQL app on Kubernetes with persistent volumes and service discovery.",
      tags: ["Flask", "MySQL", "Kubernetes", "Containerd", "AWS"],
      github: "https://github.com/apurvagargote/two-tier-flask-app",
      outcomes: "Configured 3 services, 2 PVCs, and horizontal pod autoscaling for scalability and ensured 99.9% uptime through resilient deployment and AWS-based network security."
    }
  ];

  return (
    <Container className="section">
      <Row>
        <Col lg={8} className="mx-auto text-center">
          <h2 className="section-title">DevOps Projects</h2>
          <p className="lead mb-5">
            Key projects demonstrating DevOps practices and cloud architecture
          </p>
        </Col>
      </Row>
      
      <Carousel 
        activeIndex={activeIndex} 
        onSelect={setActiveIndex}
        indicators={true}
        controls={true}
        interval={6000}
        className="projects-carousel"
      >
        {(() => {
          const groupedProjects = [];
          for (let i = 0; i < projects.length; i += cardsPerSlide) {
            groupedProjects.push(projects.slice(i, i + cardsPerSlide));
          }
          
          return groupedProjects.map((group, groupIndex) => (
            <Carousel.Item key={groupIndex}>
              <Row className="justify-content-center">
                {group.map((project, index) => {
                  const colClass = cardsPerSlide === 1 ? 'col-12' : 
                                 cardsPerSlide === 2 ? 'col-md-6 col-12' : 
                                 'col-lg-4 col-md-6 col-12';
                  return (
                    <div key={index} className={`${colClass} mb-4`}>
                      <ProjectCard isDark={isDarkMode}>
                        <Card.Body className="p-3 p-md-4 d-flex flex-column" style={{position: 'relative', zIndex: 2}}>
                          <ProjectTitle isDark={isDarkMode} style={{color: isDarkMode ? '#ffffff' : '#333333'}}>
                            <FaRocket className="me-2" style={{color: '#ac81c0'}} />
                            {project.title}
                          </ProjectTitle>
                          
                          <div className="mb-3 text-center">
                            {project.tags.map((tag, tagIndex) => (
                              <TagBadge key={tagIndex}>{tag}</TagBadge>
                            ))}
                          </div>
                          
                          <ProjectDescription isDark={isDarkMode}>
                            {project.description}
                          </ProjectDescription>
                          
                          <div className="mb-3">
                            <h6 style={{color: '#ac81c0', fontWeight: '600', textAlign: 'left', marginBottom: '0.8rem', fontSize: '0.9rem'}}>
                              <FaCode className="me-2" />
                              Key Outcomes:
                            </h6>
                            <OutcomeText isDark={isDarkMode}>
                              {project.outcomes}
                            </OutcomeText>
                          </div>
                          
                          <div className="mt-auto text-center">
                            <Button 
                              variant="outline-primary" 
                              href={project.github} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              size="sm"
                              className="project-btn"
                              style={{
                                borderColor: '#ac81c0',
                                color: '#ac81c0',
                                borderRadius: '20px',
                                padding: '0.4rem 1.2rem',
                                transition: 'all 0.3s ease'
                              }}
                            >
                              <FaGithub className="me-2" /> View Code
                            </Button>
                          </div>
                        </Card.Body>
                      </ProjectCard>
                    </div>
                  );
                })}
              </Row>
            </Carousel.Item>
          ));
        })()}
      </Carousel>
      
      <style jsx>{`
        .project-btn:hover {
          background-color: #ac81c0 !important;
          color: white !important;
          border-color: #ac81c0 !important;
        }
        
        .projects-carousel {
          padding: 0 60px;
        }
        
        @media (max-width: 992px) {
          .projects-carousel {
            padding: 0 40px;
          }
        }
        
        .projects-carousel .carousel-indicators {
          bottom: -60px;
        }
        
        .projects-carousel .carousel-indicators button {
          background-color: #ac81c0;
          width: 12px;
          height: 12px;
          border-radius: 50%;
        }
        
        .projects-carousel .carousel-control-prev,
        .projects-carousel .carousel-control-next {
          width: 50px;
          height: 50px;
          background: rgba(172, 129, 192, 0.3);
          border-radius: 50%;
          top: 50%;
          transform: translateY(-50%);
          backdrop-filter: blur(10px);
          border: 2px solid rgba(172, 129, 192, 0.5);
        }
        
        .projects-carousel .carousel-control-prev {
          left: -30px;
        }
        
        .projects-carousel .carousel-control-next {
          right: -30px;
        }
        
        .projects-carousel .carousel-control-prev:hover,
        .projects-carousel .carousel-control-next:hover {
          background: rgba(172, 129, 192, 0.6);
        }
        
        .projects-carousel .carousel-control-prev-icon,
        .projects-carousel .carousel-control-next-icon {
          filter: brightness(0) saturate(100%) invert(100%);
          width: 20px;
          height: 20px;
        }
        
        [data-theme='light'] .projects-carousel .carousel-control-prev-icon,
        [data-theme='light'] .projects-carousel .carousel-control-next-icon {
          filter: brightness(0) saturate(100%) invert(0%);
        }
        
        @media (max-width: 768px) {
          .projects-carousel {
            padding: 0 25px;
          }
          
          .projects-carousel .carousel-control-prev {
            left: -12px;
            width: 40px;
            height: 40px;
          }
          
          .projects-carousel .carousel-control-next {
            right: -12px;
            width: 40px;
            height: 40px;
          }
          
          .projects-carousel .carousel-indicators {
            bottom: -45px;
          }
        }
        
        @media (max-width: 576px) {
          .projects-carousel {
            padding: 0 15px;
          }
          
          .projects-carousel .carousel-control-prev {
            left: -8px;
            width: 35px;
            height: 35px;
          }
          
          .projects-carousel .carousel-control-next {
            right: -8px;
            width: 35px;
            height: 35px;
          }
          
          .projects-carousel .carousel-control-prev-icon,
          .projects-carousel .carousel-control-next-icon {
            width: 16px;
            height: 16px;
          }
          
          .projects-carousel .carousel-indicators {
            bottom: -40px;
          }
          
          .projects-carousel .carousel-indicators button {
            width: 10px;
            height: 10px;
          }
        }
      `}</style>
    </Container>
  );
};

export default Projects;