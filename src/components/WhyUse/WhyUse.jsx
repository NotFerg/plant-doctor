import React from "react";
import styles from "../WhyUse/WhyUse.module.css";
import { Container, Row, Col } from "react-bootstrap";

const WhyUse = () => {
  return (
    <section className='py-5 bg-white'>
      <Container className='text-center'>
        <h2 className='mb-5'>✨ Why Use Plant Doctor?</h2>
        <Row className='g-4'>
          <Col md={4}>
            <div className='card border-0 shadow-sm h-100'>
              <div className={`card-body ${styles["plant-card"]}`}>
                <h5 className='card-title'>Instant Results</h5>
                <p className='card-text text-muted'>
                  No waiting, no sign-up. Just snap and diagnose.
                </p>
              </div>
            </div>
          </Col>
          <Col md={4}>
            <div className='card border-0 shadow-sm h-100'>
              <div className={`card-body ${styles["plant-card"]}`}>
                <h5 className='card-title'>Free to Use</h5>
                <p className='card-text text-muted'>
                  Built with AWS free-tier and Gemini API.
                </p>
              </div>
            </div>
          </Col>
          <Col md={4}>
            <div className='card border-0 shadow-sm h-100'>
              <div className={`card-body ${styles["plant-card"]}`}>
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
  );
};

export default WhyUse;
