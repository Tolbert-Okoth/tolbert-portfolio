import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Github, Linkedin, EnvelopeFill, FileEarmarkArrowDown } from 'react-bootstrap-icons';

const Hero = () => {
  return (
    <section className="bg-white py-5 shadow-sm" style={{ minHeight: '85vh', display: 'flex', alignItems: 'center' }}>
      <Container>
        <Row className="justify-content-center text-center">
          <Col md={10} lg={8}>
            
            <span className="badge bg-light text-dark border mb-3 px-3 py-2 rounded-pill">
              Available for Hire
            </span>
            
            <h1 className="display-3 fw-bold mb-2">Tolbert Okoth Asumba</h1>
            <h2 className="h4 text-primary mb-4">Full Stack Developer & Software Developer</h2>
            
            <p className="lead text-muted mb-5 px-md-5">
              Specializing in scalable full-stack platforms and data-driven solutions, 
              turning complex problems into intuitive digital experiences.
            </p>

            <div className="d-flex justify-content-center gap-3 mb-5">
              {/* UPDATED: Added your real email address here */}
              <Button variant="primary" size="lg" href="mailto:osumba30@gmail.com">
                <EnvelopeFill className="me-2" />
                Contact Me
              </Button>
              
              {/* This link looks for a file named 'resume.pdf' in your public folder */}
              <Button variant="outline-dark" size="lg" href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <FileEarmarkArrowDown className="me-2" />
                Download Resume
              </Button>
            </div>

            <div className="d-flex justify-content-center gap-4">
              <a href="https://github.com/Tolbert-Okoth" target="_blank" rel="noreferrer" className="text-dark">
                <Github size={32} />
              </a>
              <a href="https://www.linkedin.com/in/tolbert-asumba-542b3b344/" target="_blank" rel="noreferrer" className="text-primary">
                <Linkedin size={32} />
              </a>
            </div>

          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;