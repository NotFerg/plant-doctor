import { React, useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { TypeAnimation } from "react-type-animation";
import SwalModal from "../SwalModal/SwalModal.jsx";
import PlantCard from "../PlantCard/PlantCard.jsx";

const Upload = () => {
  const [file, setFile] = useState(null);
  const [plantInfo, setPlantInfo] = useState("");
  const [healthStatus, setHealthStatus] = useState("");
  const [careInstructions, setCareInstructions] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const allowedTypes = ["image/jpeg", "image/jpg", "image/png"];

    if (!allowedTypes.includes(file.type)) {
      SwalModal("Error!", "Only JPEG,JPG and PNG images are allowed", "error");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      SwalModal("Warning!", "File size must be under 5M", "error");
      return;
    }

    setFile(file);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    if (!file) {
      SwalModal("Error!", "No Image Attached", "error");
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
        SwalModal(
          "Not a Plant!",
          "The Image you have attached is not a plant",
          "error"
        );
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
      setCareInstructions(care);

      console.log("API RESPONSE", apiResponseText);
    } catch (error) {
      console.error("Error:", error.message);
      setError(error.message);
      setPlantInfo("");
      setHealthStatus("");
      setCareInstructions("");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (error) {
      SwalModal("Error!", error, "error");
    }
  }, [error]);
  return (
    <>
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

      {!isLoading &&
        !error &&
        plantInfo &&
        healthStatus &&
        careInstructions && (
          <section>
            <Container>
              <Row className='g-4 py-5'>
                <Col md={4}>
                  <PlantCard icon='🌱' title='Plant Info' text={plantInfo} />
                </Col>
                <Col md={4}>
                  <PlantCard
                    icon='💚'
                    title='Health Status'
                    text={healthStatus}
                  />
                </Col>
                <Col md={4}>
                  <PlantCard
                    icon='🌿'
                    title='Care Instructions'
                    text={careInstructions}
                  />
                </Col>
              </Row>
            </Container>
          </section>
        )}
    </>
  );
};

export default Upload;
