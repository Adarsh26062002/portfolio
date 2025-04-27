import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am a passionate Full Stack Developer with 2+ years of experience
              in building scalable web applications.
              <br />
              <br />I am proficient in
              <i>
                <b className="purple">
                  {" "}
                  JavaScript, TypeScript, Python, and C++.{" "}
                </b>
              </i>
              <br />
              <br />
              My expertise lies in building&nbsp;
              <i>
                <b className="purple">Web Applications and Products </b> using
                modern technologies like{" "}
                <b className="purple">React.js, Next.js, Node.js, and Flask.</b>
              </i>
              <br />
              <br />I have experience working with various technologies
              including
              <b className="purple"> Redux, MongoDB, PostgreSQL, AWS,</b> and
              <i>
                <b className="purple">
                  {" "}
                  other modern development tools and frameworks.
                </b>
              </i>
              <br />
              <br />
              I'm also passionate about competitive programming and have
              achieved
              <i>
                <b className="purple"> Top 10% on LeetCode</b> with over 800
                problems solved.
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Adarsh26062002"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://leetcode.com/adarsh"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/adarsh-singh-parihar-3341aa293/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://codechef.com/adarsh"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
