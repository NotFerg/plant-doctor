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
  const currentYear = new Date().getFullYear();
  return (
    <>
      {/* Navbar */}
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
      <section className='hero px-3'>
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
      <section className='py-5'>
        <Container className='text-center '>
          <h2 class='section-title mb-4 section-title'>📷 Upload Your Plant</h2>
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
      {/* How it Works */}
      <section className='py-5 bg-light'>
        <Container className='text-center'>
          <h2 className='mb-5 section-title'>🌿 How It Works</h2>
          <Row className='g-4'>
            <Col md={4}>
              <div className='fs-1 mb-2'>📤</div>
              <h5>1. Upload Image</h5>
              <p className='text-muted'>
                Snap a picture or upload from your gallery.
              </p>
            </Col>
            <Col md={4}>
              <div className='fs-1 mb-2'>🧠</div>
              <h5>2. AI Diagnosis</h5>
              <p className='text-muted'>
                Our AI identifies the problem instantly.
              </p>
            </Col>
            <Col md={4}>
              <div className='fs-1 mb-2'>💡</div>
              <h5>3. Get Treatment</h5>
              <p className='text-muted'>Get tips to restore plant health.</p>
            </Col>
          </Row>
        </Container>
      </section>
      {/* Why use Plant Doctor */}
      <section className='py-5 bg-white'>
        <Container className='text-center'>
          <h2 className='mb-5 section-title'>✨ Why Use Plant Doctor?</h2>
          <Row className='g-4'>
            <Col md={4}>
              <div class='card border-0 shadow-sm h-100'>
                <div class='card-body'>
                  <h5 class='card-title'>Instant Results</h5>
                  <p class='card-text text-muted'>
                    No waiting, no sign-up. Just snap and diagnose.
                  </p>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div class='card border-0 shadow-sm h-100'>
                <div class='card-body'>
                  <h5 class='card-title'>Free to Use</h5>
                  <p class='card-text text-muted'>
                    Built with AWS free-tier and Gemini API.
                  </p>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div class='card border-0 shadow-sm h-100'>
                <div class='card-body'>
                  <h5 class='card-title'>AI Powered</h5>
                  <p class='card-text text-muted'>
                    Uses Google Gemini’s advanced vision model.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* Footer */}
      <footer className='py-4 text-center'>
        <Container>
          <p class='mb-0'>
            © {currentYear} Plant Doctor AI. Built by Fergus Miles Ampuan.
          </p>
        </Container>
      </footer>
    </>
  );
}

export default App;
