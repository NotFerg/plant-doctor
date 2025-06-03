import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import NavBar from "../components/NavBar/NavBar";
import Pic from "../../src/assets/Pic.jpg";
import WhyUse from "../components/WhyUse/WhyUse";

const About = () => {
  return (
    <>
      <NavBar />
      <section>
        <Container className='text-center py-5'>
          <h1>About me</h1>
          <p>
            Full Stack Developer with a strong foundation in backend
            development, <br />
            passionate about building efficient systems and seamless digital
            experience
          </p>
        </Container>
      </section>
      <section style={{ backgroundColor: "#e9fce7" }}>
        <Container>
          <Row className='py-5'>
            <Col md={6}>
              <img
                src={Pic}
                alt='Profile'
                style={{
                  borderRadius: "50%",
                  width: "450px",
                  height: "450px",
                  objectFit: "cover",
                }}
              />
            </Col>
            <Col md={6}>
              <h1 className='pb-2'>
                Building robust systems with a user-centered mindset
              </h1>
              <p>
                As a Full Stack Developer with a strength and focus on backend
                development, I specialize in crafting APIs, managing databases,
                and optimizing performance behind the scenes. I enjoy designing
                systems that are not only functional and scalable, but also easy
                to maintain. While my core expertise lies in backend
                technologies like Laravel, MySQL, and Node.js, I’m also
                comfortable working on the frontend when needed — turning logic
                into interactive, user-friendly interfaces. I aim to bridge
                technical precision with real-world needs, delivering solutions
                that serve both users and businesses effectively.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col md={4} style={{ backgroundColor: "red" }}>
              <h1>Contact Information</h1>
              <p>Email</p>
              <p>test@gmail.com</p>
            </Col>
            <Col md={8} style={{ backgroundColor: "blue" }}>
              aa
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <WhyUse />
      </section>
    </>
  );
};

export default About;
