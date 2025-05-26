import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card, Alert } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real implementation, you would send this data to a backend service
    console.log('Form submitted:', formData);
    setShowAlert(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setShowAlert(false), 5000);
  };

  return (
    <Container className="section">
      <Row>
        <Col lg={8} className="mx-auto text-center">
          <h2 className="section-title">Get In Touch</h2>
          <p className="lead mb-5">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </Col>
      </Row>

      <Row>
        <Col lg={5} className="mb-4 mb-lg-0">
          <Card className="border-0 shadow-sm h-100">
            <Card.Body className="p-4">
              <h3 className="mb-4">Contact Information</h3>
              
              <div className="d-flex align-items-center mb-4">
                <FaEnvelope className="me-3 text-primary" size={24} />
                <div>
                  <h5 className="mb-0">Email</h5>
                  <p className="mb-0">your.email@example.com</p>
                </div>
              </div>
              
              <div className="d-flex align-items-center mb-4">
                <FaLinkedin className="me-3 text-primary" size={24} />
                <div>
                  <h5 className="mb-0">LinkedIn</h5>
                  <p className="mb-0">
                    <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                      linkedin.com/in/yourusername
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="d-flex align-items-center">
                <FaGithub className="me-3 text-primary" size={24} />
                <div>
                  <h5 className="mb-0">GitHub</h5>
                  <p className="mb-0">
                    <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                      github.com/yourusername
                    </a>
                  </p>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        
        <Col lg={7}>
          <Card className="border-0 shadow-sm">
            <Card.Body className="p-4">
              <h3 className="mb-4">Send a Message</h3>
              
              {showAlert && (
                <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
                  Your message has been sent successfully!
                </Alert>
              )}
              
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control 
                    type="text" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    required 
                  />
                </Form.Group>
                
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control 
                    type="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                  />
                </Form.Group>
                
                <Form.Group className="mb-4">
                  <Form.Label>Message</Form.Label>
                  <Form.Control 
                    as="textarea" 
                    rows={5} 
                    name="message" 
                    value={formData.message} 
                    onChange={handleChange} 
                    required 
                  />
                </Form.Group>
                
                <Button variant="primary" type="submit" size="lg">
                  Send Message
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;