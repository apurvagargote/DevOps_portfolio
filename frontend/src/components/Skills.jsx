import React, { useState, useContext, useEffect } from 'react';
import { Container, Row, Col, Card, Carousel } from 'react-bootstrap';
import { 
  FaJenkins, FaGithub, FaDocker, FaAws, 
  FaTerminal, FaCode, FaLock 
} from 'react-icons/fa';
import { SiKubernetes, SiTerraform, SiAnsible, SiPrometheus, SiGrafana } from 'react-icons/si';
import styled from 'styled-components';
import { ThemeContext } from '../context/ThemeContext';

const SkillCategory = styled(Card)`
  border: 2px solid rgba(172, 129, 192, 0.4);
  background: ${props => props.theme === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.05)'};
  backdrop-filter: blur(15px);
  border-radius: 20px;
  transition: all 0.4s ease;
  height: 280px;
  margin: 0 10px;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #ac81c0, #6c5ce7, #a29bfe);
  }
  
  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 20px 40px rgba(172, 129, 192, 0.4);
    border-color: rgba(172, 129, 192, 0.7);
  }
  
  @media (max-width: 768px) {
    height: 250px;
    margin: 0 5px;
    border-radius: 16px;
  }
  
  @media (max-width: 576px) {
    height: 220px;
    margin: 0;
  }
`;

const CategoryHeader = styled.div`
  background: transparent;
  color: ${props => props.isDark ? '#ffffff' : '#333333'};
  padding: 1.5rem 1rem 1rem;
  text-align: center;
  font-weight: 700;
  font-size: 1.1rem;
  text-shadow: ${props => props.isDark ? '0 2px 4px rgba(0,0,0,0.3)' : '0 1px 2px rgba(255,255,255,0.5)'};
  
  @media (max-width: 768px) {
    padding: 1.2rem 0.8rem 0.8rem;
    font-size: 1rem;
  }
  
  @media (max-width: 576px) {
    padding: 1rem 0.5rem 0.5rem;
    font-size: 0.9rem;
  }
`;

const SkillItem = styled.div`
  display: flex;
  align-items: center;
  padding: 0.8rem 1rem;
  margin: 0.3rem 0;
  background: rgba(172, 129, 192, 0.15);
  border-radius: 12px;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(172, 129, 192, 0.25);
    transform: translateX(5px);
  }
  
  @media (max-width: 768px) {
    padding: 0.6rem 0.8rem;
    margin: 0.2rem 0;
  }
  
  @media (max-width: 576px) {
    padding: 0.5rem 0.6rem;
  }
`;

const SkillIcon = styled.div`
  font-size: 1.4rem;
  color: ${props => props.isDark ? '#ffffff' : '#ac81c0'};
  margin-right: 1rem;
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
    width: 25px;
    margin-right: 0.8rem;
  }
  
  @media (max-width: 576px) {
    font-size: 1rem;
    width: 20px;
    margin-right: 0.6rem;
  }
`;

const Skills = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [cardsPerSlide, setCardsPerSlide] = useState(3);
  const { isDarkMode } = useContext(ThemeContext);
  
  useEffect(() => {
    const updateCardsPerSlide = () => {
      if (window.innerWidth < 576) {
        setCardsPerSlide(1); // Mobile: 1 card
      } else if (window.innerWidth < 992) {
        setCardsPerSlide(2); // Tablet: 2 cards
      } else {
        setCardsPerSlide(3); // Desktop: 3 cards
      }
    };
    
    updateCardsPerSlide();
    window.addEventListener('resize', updateCardsPerSlide);
    
    return () => window.removeEventListener('resize', updateCardsPerSlide);
  }, []);

  const skillCategories = [
    {
      title: "CI/CD",
      skills: [
        { name: "Jenkins", icon: <FaJenkins /> },
        { name: "GitHub Actions", icon: <FaGithub /> },
        { name: "ArgoCD", icon: <SiKubernetes /> }
      ]
    },
    {
      title: "Containers & Orchestration",
      skills: [
        { name: "Docker", icon: <FaDocker /> },
        { name: "Kubernetes", icon: <SiKubernetes /> },
        { name: "Helm", icon: <SiKubernetes /> }
      ]
    },
    {
      title: "Infrastructure as Code",
      skills: [
        { name: "Terraform", icon: <SiTerraform /> },
        { name: "CloudFormation", icon: <FaAws /> },
        { name: "Ansible", icon: <SiAnsible /> }
      ]
    },
    {
      title: "Cloud Platforms",
      skills: [
        { name: "AWS", icon: <FaAws /> }
      ]
    },
    {
      title: "Monitoring & Logging",
      skills: [
        { name: "Prometheus", icon: <SiPrometheus /> },
        { name: "Grafana", icon: <SiGrafana /> }
      ]
    },
    {
      title: "Development & Version Control",
      skills: [
        { name: "Git & GitHub", icon: <FaGithub /> },
        { name: "Python", icon: <FaCode /> },
        { name: "Bash/Shell", icon: <FaTerminal /> }
      ]
    },
    {
      title: "Security",
      skills: [
        { name: "Secret Management", icon: <FaLock /> },
        { name: "IAM", icon: <FaLock /> }
      ]
    }
  ];

  // Group categories based on screen size
  const groupedCategories = [];
  for (let i = 0; i < skillCategories.length; i += cardsPerSlide) {
    groupedCategories.push(skillCategories.slice(i, i + cardsPerSlide));
  }

  return (
    <Container className="section">
      <Row>
        <Col lg={8} className="mx-auto text-center">
          <h2 className="section-title">Skills & Tools</h2>
          <p className="lead mb-5">
            My technical expertise across the DevOps ecosystem
          </p>
        </Col>
      </Row>
      
      <Carousel 
        activeIndex={activeIndex} 
        onSelect={setActiveIndex}
        indicators={true}
        controls={true}
        interval={5000}
        className="skills-carousel"
      >
        {groupedCategories.map((group, groupIndex) => (
          <Carousel.Item key={groupIndex}>
            <Row className="justify-content-center">
              {group.map((category, index) => {
                const colClass = cardsPerSlide === 1 ? 'col-12' : 
                               cardsPerSlide === 2 ? 'col-md-6 col-12' : 
                               'col-lg-4 col-md-6 col-12';
                return (
                  <div key={index} className={`${colClass} mb-4`}>
                    <SkillCategory theme={isDarkMode ? 'dark' : 'light'}>
                      <CategoryHeader isDark={isDarkMode}>
                        <h6 className="mb-0">{category.title}</h6>
                      </CategoryHeader>
                      <Card.Body className="px-3 pb-3 pt-0">
                        {category.skills.map((skill, skillIndex) => (
                          <SkillItem key={skillIndex} isDark={isDarkMode}>
                            <SkillIcon isDark={isDarkMode}>
                              {skill.icon}
                            </SkillIcon>
                            <div className="flex-grow-1" style={{display: 'flex', alignItems: 'center'}}>
                              <span 
                                className="fw-medium" 
                                style={{
                                  color: isDarkMode ? '#ffffff' : '#333333', 
                                  fontSize: '0.95rem',
                                  fontWeight: '500',
                                  display: 'block',
                                  width: '100%',
                                  textAlign: 'left'
                                }}
                              >
                                {skill.name}
                              </span>
                            </div>
                          </SkillItem>
                        ))}
                      </Card.Body>
                    </SkillCategory>
                  </div>
                );
              })}
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
      
      <style jsx>{`
        .skills-carousel {
          padding: 0 60px;
        }
        
        @media (max-width: 992px) {
          .skills-carousel {
            padding: 0 40px;
          }
        }
        
        .skills-carousel .carousel-indicators {
          bottom: -50px;
        }
        
        .skills-carousel .carousel-indicators button {
          background-color: #ac81c0;
          width: 12px;
          height: 12px;
          border-radius: 50%;
        }
        
        .skills-carousel .carousel-control-prev,
        .skills-carousel .carousel-control-next {
          width: 50px;
          height: 50px;
          background: rgba(172, 129, 192, 0.3);
          border-radius: 50%;
          top: 50%;
          transform: translateY(-50%);
          backdrop-filter: blur(10px);
          border: 2px solid rgba(172, 129, 192, 0.5);
        }
        
        .skills-carousel .carousel-control-prev {
          left: -30px;
        }
        
        .skills-carousel .carousel-control-next {
          right: -30px;
        }
        
        .skills-carousel .carousel-control-prev:hover,
        .skills-carousel .carousel-control-next:hover {
          background: rgba(172, 129, 192, 0.6);
        }
        
        .skills-carousel .carousel-control-prev-icon,
        .skills-carousel .carousel-control-next-icon {
          filter: brightness(0) saturate(100%) invert(100%);
          width: 20px;
          height: 20px;
        }
        
        [data-theme='light'] .skills-carousel .carousel-control-prev-icon,
        [data-theme='light'] .skills-carousel .carousel-control-next-icon {
          filter: brightness(0) saturate(100%) invert(0%);
        }
        
        @media (max-width: 768px) {
          .skills-carousel {
            padding: 0 30px;
          }
          
          .skills-carousel .carousel-control-prev {
            left: -15px;
            width: 40px;
            height: 40px;
          }
          
          .skills-carousel .carousel-control-next {
            right: -15px;
            width: 40px;
            height: 40px;
          }
          
          .skills-carousel .carousel-control-prev-icon,
          .skills-carousel .carousel-control-next-icon {
            width: 16px;
            height: 16px;
          }
        }
        
        @media (max-width: 576px) {
          .skills-carousel {
            padding: 0 20px;
          }
          
          .skills-carousel .carousel-control-prev {
            left: -10px;
            width: 35px;
            height: 35px;
          }
          
          .skills-carousel .carousel-control-next {
            right: -10px;
            width: 35px;
            height: 35px;
          }
          
          .skills-carousel .carousel-indicators {
            bottom: -40px;
          }
          
          .skills-carousel .carousel-indicators button {
            width: 10px;
            height: 10px;
          }
        }
      `}</style>
    </Container>
  );
};

export default Skills;