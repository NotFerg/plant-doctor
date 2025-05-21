import { useState } from "react";
import "./App.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
  return (
    <>
      <Navbar expand='lg' className='bg-body-tertiary'>
        <Container>
          <Navbar.Brand href='#home'>🪴 Plant Doctor</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              <Nav.Link href='#home'>Home</Nav.Link>
              <Nav.Link href='#link'>About</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* HERO */}
      <section className='hero'>
        <Container className='text-center'>
          <h1 class='display-4 fw-bold mb-3 text-success'>
            🪴 Plant Doctor AI
          </h1>
          <p class='lead text-muted mb-4'>
            Upload a photo of your plant and get an instant diagnosis using AI.
            Know what’s wrong and how to fix it.
          </p>
          <a href='#upload' class='btn btn-success btn-lg px-4'>
            Try It Now
          </a>
        </Container>
      </section>
      {/* UPLOAD */}
      <section className='py-4'>
        <Container className='text-center '>
          <h2 class='section-title mb-4'>📷 Upload Your Plant</h2>
          <p class='text-muted mb-4'>
            We'll analyze your plant and tell you what's wrong — and how to fix
            it.
          </p>
          <input
            type='file'
            accept='image/*'
            class='form-control w-50 mx-auto mb-3'
          />
          <button class='btn btn-success'>Analyze</button>
        </Container>
      </section>
    </>
  );
}

export default App;
