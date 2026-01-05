import React from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { Github, BoxArrowUpRight } from 'react-bootstrap-icons';

const projects = [
  {
    id: 1,
    title: "Afya-Pulse",
    subtitle: "AI-Driven Healthcare Triage Platform",
    description: "A real-time medical surveillance system designed for Kenya. It uses Llama-3 to analyze patient symptoms (including Sheng & Swahili) and categorize urgency for medical command centers.",
    highlights: [
      "Microservices (Node.js Gateway + Python AI Engine)",
      "Real-time Socket broadcasting",
      "Service-to-Service Auth & Token Refreshing"
    ],
    tech: ["React", "Node.js", "Python/Flask", "PostgreSQL", "Groq AI", "Firebase"],
    github: "https://github.com/Tolbert-Okoth/afya-pulse",
    demo: null 
  },
  {
    id: 2,
    title: "Ghoul System",
    subtitle: "Autonomous Market Surveillance",
    description: "A 'Cyberpunk' tactical dashboard that scans financial news and technical data. It feeds real-time data into an LLM to generate trading signals autonomously.",
    highlights: [
      "Dual-Service Architecture (Manager + Brain)",
      "Real-time WebSockets & Alpaca API",
      "Custom Cyberpunk UI with Recharts"
    ],
    tech: ["React", "Socket.io", "Python", "Pandas", "TA-Lib", "Alpaca API"],
    github: "https://github.com/Tolbert-Okoth/ghoul-system",
    demo: null
  },
  {
    id: 3,
    title: "FarmConnect",
    subtitle: "Multi-Vendor Agri-Marketplace",
    description: "A full-stack e-commerce platform connecting farmers directly to buyers. Features a complete financial loop including a wallet system and mobile payments.",
    highlights: [
      "M-Pesa API Integration (STK Push & B2C)",
      "Multi-vendor Admin Dashboard",
      "Secure JWT Auth & Cloudinary Storage"
    ],
    tech: ["React", "Node.js", "PostgreSQL", "M-Pesa API", "Redux", "Bootstrap"],
    github: "https://github.com/Tolbert-Okoth/farmconnect",
    demo: null
  }
];

const ProjectList = () => {
  return (
    <section id="projects" className="py-5 bg-light">
      <Container>
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold">Featured Projects</h2>
          <p className="lead text-muted">Technical deep dives into System Architecture, AI, and Fintech.</p>
        </div>
        
        <Row>
          {projects.map((project) => (
            <Col key={project.id} lg={4} md={6} className="mb-4 d-flex align-items-stretch">
              <Card className="shadow-sm border-0 w-100 h-100 hover-shadow">
                <Card.Body className="d-flex flex-column">
                  <div className="mb-3">
                    <Card.Title className="fw-bold fs-4 mb-1">{project.title}</Card.Title>
                    <Card.Subtitle className="text-primary mb-3">{project.subtitle}</Card.Subtitle>
                    <Card.Text className="text-muted small">
                      {project.description}
                    </Card.Text>
                  </div>

                  <div className="mb-3 bg-white p-3 rounded border">
                    <h6 className="small fw-bold text-uppercase text-secondary">Key Features</h6>
                    <ul className="small text-muted ps-3 mb-0">
                      {project.highlights.map((highlight, index) => (
                        <li key={index}>{highlight}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4 mt-auto">
                    {project.tech.map((t) => (
                      <Badge key={t} bg="light" text="dark" className="me-1 mb-1 border">
                        {t}
                      </Badge>
                    ))}
                  </div>

                  <div className="d-grid gap-2">
                    <Button variant="outline-dark" href={project.github} target="_blank">
                      <Github className="me-2" /> View Code
                    </Button>
                    {project.demo && (
                      <Button variant="primary" href={project.demo} target="_blank">
                        <BoxArrowUpRight className="me-2" /> Live Demo
                      </Button>
                    )}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ProjectList;