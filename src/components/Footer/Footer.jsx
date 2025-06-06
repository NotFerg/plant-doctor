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
        <p className='text-muted small mt-2'>
          <a
            href='https://www.flaticon.com/free-icons/location'
            title='icons'
            className='text-muted text-decoration-none '
            target='_blank'
            rel='noopener noreferrer'
          >
            Icons created by Freepik - Flaticon
          </a>
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
