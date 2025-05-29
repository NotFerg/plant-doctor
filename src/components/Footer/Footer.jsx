import React from "react";
import { Container } from "react-bootstrap";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className='py-4 text-center'>
      <Container>
        <p className='mb-0'>
          © {currentYear} Plant Doctor AI. Built by Fergus Miles Ampuan.
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
