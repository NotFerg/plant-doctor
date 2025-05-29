import { useState } from "react";
import "./App.css";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { TypeAnimation } from "react-type-animation";
import Swal from "sweetalert2";
import Footer from "./components/Footer/Footer.jsx";
import Hero from "./components/Hero/Hero.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import WhyUse from "./components/WhyUse/WhyUse.jsx";
import HowIt from "./components/HowIt/HowIt.jsx";

function App() {
  const [file, setFile] = useState(null);
  const [plantInfo, setPlantInfo] = useState("");
  const [healthStatus, setHealthStatus] = useState("");
  const [careInstructions, setCareInstructures] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const allowedTypes = ["image/jpeg", "image/jpg", "image/png"];

    if (!allowedTypes.includes(file.type)) {
      Swal.fire({
        title: "Error!",
        text: "Only JPEG,JPG and PNG images are allowed",
        icon: "error",
      });
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      Swal.fire({
        title: "Warining!",
        text: "File size must be under 5MB",
        icon: "warning",
      });
      return;
    }

    setFile(file);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    if (!file) {
      Swal.fire({
        title: "Error!",
        text: "No Image Attached",
        icon: "error",
        // confirmButtonText: "Cool",
      });
      setIsLoading(false);
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
                {
                  text: "First identify if this is a plant or not, if not reply 'Not A Plant' else, Tell me about this plant, in three separate paragraphs give me this Plant Info – (e.g. species, name, type, growth facts), Health Status – (e.g. issues detected, level of health, symptoms) and lastly Care Instructions – (e.g. how to treat, water, sunlight, recovery steps)",
                },
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

      const apiResponseText = data.candidates[0].content.parts[0].text;

      if (apiResponseText.includes("Not A Plant")) {
        Swal.fire({
          title: "Not a Plant",
          text: "The Image you have attached is not a plant",
          icon: "question",
          // confirmButtonText: "Cool",
        });
      }
      const sections = apiResponseText
        .split(/\n\s*\*\*.*?\*\*\s*\n/)
        .map((s) => s.trim())
        .filter((s) => s.length > 0);
      const plant = sections[1];
      const health = sections[2];
      const care = sections[3];

      setPlantInfo(plant);
      setHealthStatus(health);
      setCareInstructures(care);

      console.log("API RESPONSE", apiResponseText);
    } catch (error) {
      console.error("Error:", error.message);
      setError(error.message);
      setPlantInfo("");
      setHealthStatus("");
      setCareInstructures("");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      {/* Navbar */}
      <NavBar />
      {/* HERO */}
      <Hero />
      {/* UPLOAD */}
      <section className='py-5' id='upload'>
        <Container className='text-center '>
          <h2 className='mb-4'>📷 Upload Your Plant</h2>
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

      {/* SHOW DATA */}
      {isLoading && (
        <section className='py-5'>
          <Container className='text-center'>
            <div className='spinner-border text-success' role='status'>
              <span className='visually-hidden'>Loading...</span>
            </div>
          </Container>
        </section>
      )}

      {error && (
        <section className='py-5'>
          <Container className='text-center'>
            <div className='alert alert-danger' role='alert'>
              {error}
            </div>
          </Container>
        </section>
      )}

      {!isLoading &&
        !error &&
        plantInfo &&
        healthStatus &&
        careInstructions && (
          <section>
            <Container>
              <Row className='g-4 py-5'>
                <Col md={4}>
                  <div className='plant-card h-100'>
                    <div className='card-icon-wrapper'>
                      <div className='card-icon plant-info-icon'>🌱</div>
                    </div>
                    <div className='card-body'>
                      <h5 className='card-title'>Plant Info</h5>
                      <div className='card-divider'></div>
                      <p className='card-text'>
                        <TypeAnimation
                          sequence={[plantInfo]}
                          speed={75}
                          cursor={false}
                        />
                      </p>
                    </div>
                  </div>
                </Col>
                <Col md={4}>
                  <div className='plant-card h-100'>
                    <div className='card-icon-wrapper'>
                      <div className='card-icon health-status-icon'>💚</div>
                    </div>
                    <div className='card-body'>
                      <h5 className='card-title'>Health Status</h5>
                      <div className='card-divider'></div>
                      <p className='card-text'>
                        <TypeAnimation
                          sequence={[healthStatus]}
                          speed={75}
                          cursor={false}
                        />
                      </p>
                    </div>
                  </div>
                </Col>
                <Col md={4}>
                  <div className='plant-card h-100'>
                    <div className='card-icon-wrapper'>
                      <div className='card-icon care-instructions-icon'>🌿</div>
                    </div>
                    <div className='card-body'>
                      <h5 className='card-title'>Care Instructions</h5>
                      <div className='card-divider'></div>
                      <p className='card-text'>
                        <TypeAnimation
                          sequence={[careInstructions]}
                          speed={75}
                          cursor={false}
                        />
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
        )}
      {/* How it Works */}
      <HowIt />
      {/* Why use Plant Doctor */}
      <WhyUse />
      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
