import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const HowIt = () => {
  return (
    <section className='py-5' style={{ backgroundColor: "#e9fce7" }}>
      <Container className='text-center'>
        <h2 className='mb-5'>🌿 How It Works</h2>
        <Row className='g-4'>
          <Col md={4}>
            <div className='fs-1 mb-2'>📤</div>
            <h5>1. Upload Image</h5>
            <p>Snap a picture or upload from your gallery.</p>
          </Col>
          <Col md={4}>
            <div className='fs-1 mb-2'>🧠</div>
            <h5>2. AI Diagnosis</h5>
            <p>Our AI identifies the problem instantly.</p>
          </Col>
          <Col md={4}>
            <div className='fs-1 mb-2'>💡</div>
            <h5>3. Get Treatment</h5>
            <p>Get tips to restore plant health.</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HowIt;
