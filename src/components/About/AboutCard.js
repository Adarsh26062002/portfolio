import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Adarsh Singh Parihar </span>
            from <span className="purple"> Satna, India.</span>
            <br /> I am a pre-final year student pursuing
            <span className="purple"> Computer Science and Engineering </span> 

            at 
            <span className="purple"> IIIT Kottayam</span>.
            <br />
            Additionally, I have previously worked as Full Stack Intern at Kudosware.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Adarsh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
