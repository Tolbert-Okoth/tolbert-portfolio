import React from 'react';
import { Container, Row, Col, Badge } from 'react-bootstrap';
import { PatchCheckFill, Award, BoxArrowUpRight } from 'react-bootstrap-icons';

const fccUsername = "tolbert"; 

const certifications = [
  { 
    name: "Data Analysis with Python", 
    date: "Jan 2026", 
    link: `https://www.freecodecamp.org/certification/${fccUsername}/data-analysis-with-python-v7`
  },
  { 
    name: "Scientific Computing with Python", 
    date: "Oct 2025",
    link: `https://www.freecodecamp.org/certification/${fccUsername}/scientific-computing-with-python-v7`
  },
  { 
    name: "Quality Assurance (Node.js)", 
    date: "Aug 2025", 
    link: `https://www.freecodecamp.org/certification/${fccUsername}/quality-assurance-v7`
  },
  { 
    name: "Relational Database (PostgreSQL)", 
    date: "Jul 2025", 
    link: `https://www.freecodecamp.org/certification/${fccUsername}/relational-database-v8`
  },
  { 
    name: "Back End Development and APIs", 
    date: "Jul 2025", 
    link: `https://www.freecodecamp.org/certification/${fccUsername}/back-end-development-and-apis`
  },
  { 
    name: "Data Visualization", 
    date: "Jun 2025", 
    link: `https://www.freecodecamp.org/certification/${fccUsername}/data-visualization`
  },
  { 
    name: "Front End Development Libraries", 
    date: "Jun 2025", 
    link: `https://www.freecodecamp.org/certification/${fccUsername}/front-end-development-libraries`
  },
  { 
    name: "JavaScript Algorithms and Data Structures", 
    date: "Jun 2025", 
    link: `https://www.freecodecamp.org/certification/${fccUsername}/javascript-algorithms-and-data-structures-v8`
  },
  { 
    name: "Responsive Web Design", 
    date: "Jun 2025", 
    link: `https://www.freecodecamp.org/certification/${fccUsername}/responsive-web-design`
  }
];

const About = () => {
  return (
    <section id="about" className="py-5 bg-white">
      <Container>
        <Row className="align-items-start">
          
          {/* Left Column: The Narrative & Education */}
          <Col lg={6} className="mb-5 mb-lg-0">
            <h2 className="display-5 fw-bold mb-3">About Me</h2>
            <p className="lead text-muted">
              Bridging the gap between <span className="text-primary fw-bold">Mathematical Logic</span> and <span className="text-primary fw-bold">Full-Stack Engineering</span>.
            </p>
            <p>
              I am currently a BSc Mathematics & Computer Science student with a passion for building scalable, real-world solutions. My academic background gives me a strong foundation in algorithms and data analysis, while my practical experience comes from building complex full-stack applications.
            </p>
            
            {/* Education Block */}
            <div className="mt-4 mb-4 p-3 bg-light rounded border-start border-4 border-primary">
              <h5 className="fw-bold d-flex align-items-center">
                <Award className="me-2 text-primary" /> Education
              </h5>
              <ul className="list-unstyled mb-0 ms-1">
                <li className="mb-2">
                  <strong>BSc Mathematics & Computer Science</strong>
                  <br />
                  <span className="text-muted small">Current Student</span>
                </li>
              </ul>
            </div>

            {/* Certifications Grid with Links */}
            <div className="p-3 bg-light rounded border-start border-4 border-warning">
              <h5 className="fw-bold d-flex align-items-center mb-3">
                <PatchCheckFill className="me-2 text-warning" /> 
                freeCodeCamp Certifications (9)
              </h5>
              <Row>
                {certifications.map((cert, index) => (
                  <Col xs={12} sm={6} key={index} className="mb-3">
                    <div className="d-flex align-items-start">
                      {/* Clickable Link */}
                      <a 
                        href={cert.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="fw-bold text-dark text-decoration-none hover-primary"
                        title="Verify Certification"
                      >
                        {cert.name} <BoxArrowUpRight size={10} className="text-primary ms-1" style={{ verticalAlign: 'top' }} />
                      </a>
                    </div>
                    <div className="text-muted" style={{ fontSize: '0.75rem' }}>Issued {cert.date}</div>
                  </Col>
                ))}
              </Row>
            </div>
          </Col>

          {/* Right Column: Skills Matrix */}
          <Col lg={5} className="offset-lg-1">
            <h3 className="h4 fw-bold mb-4">Technical Arsenal</h3>
            
            <div className="mb-4">
              <h6 className="text-uppercase text-muted small fw-bold">Languages</h6>
              <div>
                {["JavaScript (ES6+)", "Python", "SQL", "HTML5/CSS3"].map(skill => (
                  <Badge key={skill} bg="primary" className="me-1 mb-1 p-2">{skill}</Badge>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <h6 className="text-uppercase text-muted small fw-bold">Frontend</h6>
              <div>
                {["React.js", "Redux", "Bootstrap 5", "Tailwind", "Recharts"].map(skill => (
                  <Badge key={skill} bg="dark" className="me-1 mb-1 p-2">{skill}</Badge>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <h6 className="text-uppercase text-muted small fw-bold">Backend & AI</h6>
              <div>
                {["Node.js", "Express", "Flask", "PostgreSQL", "Socket.io", "Groq AI Integration"].map(skill => (
                  <Badge key={skill} bg="secondary" className="me-1 mb-1 p-2">{skill}</Badge>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <h6 className="text-uppercase text-muted small fw-bold">DevOps & Tools</h6>
              <div>
                {["Git/GitHub", "Vercel", "Render", "Postman", "Linux"].map(skill => (
                  <Badge key={skill} bg="info" text="dark" className="me-1 mb-1 p-2">{skill}</Badge>
                ))}
              </div>
            </div>

          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;