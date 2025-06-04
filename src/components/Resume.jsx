import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaDownload } from 'react-icons/fa';
import styled from 'styled-components';

const PDFFrame = styled.iframe`
  width: 100%;
  height: 800px;
  border: 1px solid var(--border-color);
  
  @media (max-width: 768px) {
    height: 500px;
  }
  
  @media (max-width: 576px) {
    height: 400px;
  }
`;

const Resume = () => {
  const googleDriveFileId = "10tTDWn8uOwTCp6AVP1hQaYj9WJ5APaxe"; // replace with your actual file ID

  return (
    <Container className="section">
      <Row className="mb-4">
        <Col lg={8} className="mx-auto text-center">
          <h2 className="section-title mb-4">Resume</h2>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col lg={8} className="mx-auto text-center">
          <Button 
            href={`https://drive.google.com/uc?export=download&id=${googleDriveFileId}`} 
            download="Apurva_Gargote_Resume.pdf"
            variant="primary" 
            size="lg" 
            className="resume-download-btn"
          >
            <FaDownload className="me-2" /> Download Resume
          </Button>
        </Col>
      </Row>

      <Row>
        <Col lg={9} className="mx-auto">
          <PDFFrame
            src={`https://drive.google.com/file/d/${googleDriveFileId}/preview`}
            title="Apurva Gargote's Resume"
            allow="autoplay"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Resume;
