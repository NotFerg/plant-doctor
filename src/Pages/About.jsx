import React, { useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import NavBar from "../components/NavBar/NavBar";
import Pic from "../../src/assets/Pic.jpg";
import email from "../../src/assets/mail.png";
import Location from "../../src/assets/location.png";
import github from "../../src/assets/github.png";
import instagram from "../../src/assets/instagram.png";
import facebook from "../../src/assets/facebook.png";
import linkedin from "../../src/assets/linkedin.png";
import WhyUse from "../components/WhyUse/WhyUse";
import Footer from "../components/Footer/Footer";
import plane from "../../src/assets/paper-plane.png";
import SwalModal from "../components/SwalModal/SwalModal";

const About = () => {
  const API_BASE = import.meta.env.VITE_API_BASE;
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // const res = await fetch(`${API_BASE}/services/send-email`, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(formData),
    // });

    const res = await fetch(`/api/send-email`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    try {
      const result = await res.json();
      if (!res.ok) {
        throw new Error(result.error || "Failed to send message");
      }
      SwalModal("Email Sent Succesfully", result, "success");
    } catch (error) {
      SwalModal("Failed to send message", result, "error");
    }
  };

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
                  objectPosition: "center 25%",
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
      <section className='py-5' style={{ backgroundColor: "#f8f9fa" }}>
        <Container>
          <Row className='g-5 align-items-stretch'>
            <Col md={4}>
              <div className='p-4 bg-white border rounded-4 shadow h-100'>
                <h2 className='pb-2'>Contact Information</h2>

                <Row className='align-items-center mt-3'>
                  <Col xs='auto'>
                    <div
                      className='bg-light d-flex align-items-center justify-content-center rounded-circle'
                      style={{ width: "48px", height: "48px" }}
                    >
                      <img
                        src={email}
                        alt='Email icon'
                        style={{ width: "24px", height: "24px" }}
                      />
                    </div>
                  </Col>
                  <Col>
                    <div className='fw-semibold text-dark'>Email</div>
                    <div className='text-muted'>fergus.ampuan@gmail.com</div>
                  </Col>
                </Row>

                <Row className='mt-3'>
                  <Col xs='auto'>
                    <div
                      className='bg-light d-flex align-items-center justify-content-center rounded-circle'
                      style={{ width: "48px", height: "48px" }}
                    >
                      <img
                        src={Location}
                        alt='Location icon'
                        style={{ width: "24px", height: "24px" }}
                      />
                    </div>
                  </Col>
                  <Col>
                    <div className='fw-semibold text-dark'>Location</div>
                    <div className='text-muted'>Christchurch, New Zealand</div>
                  </Col>
                </Row>

                <h5 className='pt-4'>Connect with me</h5>

                <Row className='my-3'>
                  <Col xs='auto'>
                    <div className='d-flex gap-3'>
                      <a href='https://github.com/NotFerg'>
                        <div
                          className='bg-light rounded-circle d-flex justify-content-center align-items-center'
                          style={{ width: "48px", height: "48px" }}
                        >
                          <img
                            src={github}
                            alt='Github icon'
                            style={{ width: "24px", height: "24px" }}
                          />
                        </div>
                      </a>

                      <a href='https://www.linkedin.com/in/fergus-ampuan/'>
                        <div
                          className='bg-light rounded-circle d-flex justify-content-center align-items-center'
                          style={{ width: "48px", height: "48px" }}
                        >
                          <img
                            src={linkedin}
                            alt='LinkedIn icon'
                            style={{ width: "24px", height: "24px" }}
                          />
                        </div>
                      </a>

                      <a href='https://www.facebook.com/miles.ampuan/'>
                        <div
                          className='bg-light rounded-circle d-flex justify-content-center align-items-center'
                          style={{ width: "48px", height: "48px" }}
                        >
                          <img
                            src={facebook}
                            alt='Facebook icon'
                            style={{ width: "24px", height: "24px" }}
                          />
                        </div>
                      </a>

                      <a href='https://www.instagram.com/not__ferg/'>
                        <div
                          className='bg-light rounded-circle d-flex justify-content-center align-items-center'
                          style={{ width: "48px", height: "48px" }}
                        >
                          <img
                            src={instagram}
                            alt='Instagram icon'
                            style={{ width: "24px", height: "24px" }}
                          />
                        </div>
                      </a>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>

            <Col md={8}>
              <div className='p-4 bg-white border rounded-4 shadow h-100'>
                <h2 className='pb-2'>Send me a message</h2>
                <form onSubmit={handleSubmit}>
                  <Row>
                    <Col xs={6}>
                      <label htmlFor='name' className='form-label'>
                        Name
                      </label>
                      <input
                        type='text'
                        className='form-control'
                        id='name'
                        value={formData.name}
                        onChange={handleChange}
                        aria-describedby='nameHelp'
                        required
                      />
                    </Col>
                    <Col xs={6}>
                      <label htmlFor='email' className='form-label'>
                        Email address
                      </label>
                      <input
                        type='email'
                        className='form-control'
                        id='email'
                        value={formData.email}
                        onChange={handleChange}
                        aria-describedby='emailHelp'
                        required
                      />
                    </Col>
                  </Row>
                  <div className='mb-3'>
                    <label htmlFor='subject' className='form-label'>
                      Subject
                    </label>
                    <input
                      type='text'
                      className='form-control'
                      id='subject'
                      value={formData.subject}
                      onChange={handleChange}
                      aria-describedby='subjectHelp'
                      required
                    />
                  </div>
                  <div className='mb-3'>
                    <label htmlFor='message' className='form-label'>
                      Message
                    </label>
                    <textarea
                      type='text'
                      className='form-control'
                      id='message'
                      aria-describedby='messageHelp'
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <button type='submit' className='btn btn-secondary'>
                    <img src={plane} alt='Send icon' className='me-2' />
                    Send Message
                  </button>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <WhyUse />
      </section>

      <section>
        <Footer />
      </section>
    </>
  );
};

export default About;
