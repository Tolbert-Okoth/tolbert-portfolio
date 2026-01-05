import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4 text-center mt-auto">
      <Container>
        <p className="mb-0">
          Built with React & Bootstrap by <strong>Tolbert Okoth Asumba</strong>.
        </p>
        <small className="text-white-50">
          &copy; {new Date().getFullYear()} - Open for Opportunities.
        </small>
      </Container>
    </footer>
  );
};

export default Footer;