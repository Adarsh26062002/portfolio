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
import luxcartFrontend from "../../Assets/Projects/luxcart-frontend.png"
import luxcartAdmin from "../../Assets/Projects/luxcart-admin.png"

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
              ghLink="https://movix-eta.vercel.app/"
              demoLink="https://github.com/Adarsh26062002/movix"              
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

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={luxcartFrontend}
              isBlog={false}
              title="Luxcart"
              description="Implemented a modern and visually appealing user interface for Luxcart using NextJS, focusing on creating a smooth and interactive shopping experience. Leveraging reusable components and state management with Redux, the project ensured efficient routing and a seamless user experience. Integrated MongoDB for robust data handling and employed Node.js and Express.js for the backend, resulting in a full-stack solution that enhances both the frontend and backend performance."
              ghLink="https://github.com/Adarsh26062002/luxcart-frontend"
              demoLink="https://luxcart-frontend-exhp.vercel.app/" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={luxcartAdmin}
              isBlog={false}
              title="Luxcart Admin Site"
              description="Developed the Luxcart-Admin project to provide comprehensive management capabilities for the Luxcart e-commerce platform. Utilizing the same tech stack—NextJS, MongoDB, Node.js, Express.js, and Redux—the admin interface allows for efficient product management and detailed sales tracking through intuitive dashboards."
              ghLink="https://github.com/Adarsh26062002/luxcart-admin"
              demoLink="https://luxcart-admin-3.vercel.app/"      
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
