import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import shop_point from "../../Assets/Projects/shop_point.png";
import medico from "../../Assets/Projects/medico.png";
import chatify from "../../Assets/Projects/chatify.png";
import movix from "../../Assets/Projects/movix.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Chatify"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/Adarsh26062002/Chatify"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shop_point}
              isBlog={false}
              title="Shop-Point"
              description="This website aimed to provide an intuitive and seamless online shopping experience for customers.Implemented a modern and visually appealing user interface using React.js, leveraging reusable components, state management, and routing to create a smooth and interactive shopping experience."
              ghLink="https://github.com/Adarsh26062002/e-commerce-website"
              demoLink="https://sleepy-teal-cape.cyclic.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={movix}
              isBlog={false}
              title="Movix"
              description="Movix is an innovative Single Page Web Application built with React and Redux, offering users a seamless and engaging movie exploration experience.With an intuitive and dynamic user interface, Movix allows users to search, discover, and explore a vast collection of movies from various genres, eras, and languages."
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={medico}
              isBlog={false}
              title="Medico"
              description="This robust and user-friendly application is tailored to streamline the process of scheduling appointments with healthcare professionals, enhancing the overall patient experience and optimizing the healthcare facility's operations."
              ghLink="https://github.com/Adarsh26062002/medico"
              demoLink="https://doctorapp-xk2x.onrender.com/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col> */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
