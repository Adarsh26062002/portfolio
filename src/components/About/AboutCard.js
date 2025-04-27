import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am{" "}
            <span className="purple">Adarsh Singh Parihar </span>
            from <span className="purple"> Pune, Maharashtra, India.</span>
            <br /> A dedicated{" "}
            <span className="purple">Full Stack Developer</span> with{" "}
            <span className="purple">2+</span> years of hands-on experience. I'm
            passionate about staying updated with industry trends and
            technologies.
            <br />I am currently working as a
            <span className="purple"> Software Engineer </span>
            at
            <span className="purple"> Blitzy AI</span>.
            <br />
            Previously, I have worked as a{" "}
            <span className="purple">Software Engineer</span> at{" "}
            <span className="purple">Autron</span>,{" "}
            <span className="purple">SiteStitch LLC</span>, and as a{" "}
            <span className="purple">Frontend Developer</span> at{" "}
            <span className="purple">DefynWeb</span>.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Competitive Programming
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Problem Solving
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
