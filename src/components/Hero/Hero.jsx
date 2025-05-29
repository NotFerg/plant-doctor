import React from "react";
import { Container } from "react-bootstrap";
import styles from "../Hero/Hero.module.css";

const Hero = () => {
  return (
    <section className={`px-3 ${styles.hero}`} id='home'>
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
  );
};

export default Hero;
