import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import weaobot from "../../Assets/Projects/weaobot.png";
import chatty from "../../Assets/Projects/chatty.png";
import codetyper from "../../Assets/Projects/codetyper.png";
import bites0fcode from "../../Assets/Projects/blog.png";

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
              imgPath={chatty}
              isBlog={false}
              title="Chatty"
              description="Public Anonymous Chat to share resources and hangout with friends build with HTML, JS, CSS and Firebase. Have features which allows user for realtime messaging."
              ghLink="https://github.com/vemorr/chatty"
              demoLink="https://chatty-jet.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bites0fcode}
              isBlog={false}
              title="Bites-0F-c0dE"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/vemorr/Bites-0F-codE"
              demoLink="https://blog-rho-pearl.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={codetyper}
              isBlog={false}
              title="CodeTyper"
              description="This is like a MonkeyType just to test how you can fast type but different, here you can choose between, TensorFlow, Linux Kernel, and React, try to type the strings of code without errors from the repo you choosed."
              ghLink="https://github.com/vemorr/codetyper"
              demoLink="https://codetyper-chi.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weaobot}
              isBlog={false}
              title="WEAO.dev Discord Bot"
              description="Discord Bot that are showing what exploits for roblox are now online, it has really big list of exploits to show, you can see so much info about exploits you can know from discord is exploit paid or no, remember there's only popular exploits in list"
              ghLink="https://github.com/vemorr/whatexploitsare.online-discord-bot"
              demoLink="https://discord.gg/jQVb8SUkAb"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
