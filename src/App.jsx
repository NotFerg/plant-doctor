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
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFile(file);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      alert("Please select a file before submitting.");
      return;
    }

    try {
      // Convert file to base64
      const base64File = await new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
      });

      const requestOptions = {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                { text: "Tell me about this plant" },
                {
                  inlineData: {
                    mimeType: file.type,
                    data: base64File.includes(",")
                      ? base64File.split(",")[1]
                      : "",
                  },
                },
              ],
            },
          ],
        }),
      };

      const response = await fetch(
        import.meta.env.VITE_GEMINI_API,
        requestOptions
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();

      const apiResponseText = data.candidates[0].content.parts[0].text
        .replace(/\*\*(.*?)\*\*/g, "$1")
        .trim();
      console.log(apiResponseText);
    } catch (error) {
      console.error("Error:", error.message);
    }
  };
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
          <h1 className='display-4 fw-bold mb-3 text-success'>
            🪴 Plant Doctor AI
          </h1>
          <p className='lead text-muted mb-4'>
            Upload a photo of your plant and get an instant diagnosis using AI.
            Know what’s wrong and how to fix it.
          </p>
          <a href='#upload' className='btn btn-success btn-lg px-4'>
            Try It Now
          </a>
        </Container>
      </section>
      {/* UPLOAD */}
      <section className='py-5'>
        <Container className='text-center '>
          <h2 className='section-title mb-4 section-title'>
            📷 Upload Your Plant
          </h2>
          <p className='text-muted mb-4'>
            We'll analyze your plant and tell you what's wrong — and how to fix
            it.
          </p>
          <form action='#' onSubmit={handleFormSubmit}>
            <input
              type='file'
              accept='image/*'
              className='form-control w-50 mx-auto mb-3'
              onChange={handleFileChange}
            />
            <button className='btn btn-success'>Analyze</button>
          </form>
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
              <div className='card border-0 shadow-sm h-100'>
                <div className='card-body'>
                  <h5 className='card-title'>Instant Results</h5>
                  <p className='card-text text-muted'>
                    No waiting, no sign-up. Just snap and diagnose.
                  </p>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className='card border-0 shadow-sm h-100'>
                <div className='card-body'>
                  <h5 className='card-title'>Free to Use</h5>
                  <p className='card-text text-muted'>
                    Built with AWS free-tier and Gemini API.
                  </p>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className='card border-0 shadow-sm h-100'>
                <div className='card-body'>
                  <h5 className='card-title'>AI Powered</h5>
                  <p className='card-text text-muted'>
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
          <p className='mb-0'>
            © {currentYear} Plant Doctor AI. Built by Fergus Miles Ampuan.
          </p>
        </Container>
      </footer>
    </>
  );
}

export default App;
