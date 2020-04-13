import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css/animate.min.css";

import { Container, Row } from "react-bootstrap";

import NavBar from "./components/NavBar.js";
import AboutmeTile from "./components/AboutmeTile.js";
import WorkGraph from "./components/WorkGraph.js";
import ParallaxTitle from"./components/ParallaxTitle.js"
import ProjectTile from"./components/ProjectTile.js"
import TimelineLine from "./components/TimelineLine.js"
import FutureGraph from "./components/FutureGraph.js"
import Particles from "react-particles-js";

function App() {
  return [
    <Particles
      params={{

        particles: {
          line_linked: {
            enable: false,
          },
          color: {
            value: "#fff"
          },
          size:{
            value: 2
          },
          move: {
            direction: "none",
            speed: "0.2"
          }
        },
      }}
      width="100%"
      height="270%"
      // canvasClassName="example"
      id="particle-canvas"
    />,
    <NavBar key="navbar" />,
    <Container>
      <Row className="h-100-imp">
        <AboutmeTile></AboutmeTile>
      </Row>
      <Row className="d-flex justify-content-center">
          <ParallaxTitle title="Experience"></ParallaxTitle>
      </Row>
      
      <WorkGraph></WorkGraph>
      <TimelineLine></TimelineLine>
      <FutureGraph></FutureGraph>

      <Row className="d-flex justify-content-center">
          <ParallaxTitle title="Projects"></ParallaxTitle>
      </Row>
      <Row className="d-flex justify-content-center">
        <ProjectTile></ProjectTile>
      </Row>
    </Container>,
    // <div className="footer-copyright text-center py-2 footer">
    //     <h2 className="d-flex justify-content-center p-2">Resume</h2>
    //     <i class="fa fa-file icon"></i>
    // </div>,
    //     <div className="contact-me d-flex flex-column">
    //     <h2 className="d-flex justify-content-center p-4">Contact Me</h2>
    //     <ul className="d-flex justify-content-center align-items-center">
    //       <li><i class="fa fa-github icon hover-dark-purple"></i></li>
    //       <li><i class="fa fa-linkedin icon hover-dark-purple"></i></li>
    //       <li><i class="fa fa-envelope icon hover-dark-purple"></i></li>
    //     </ul>
    //   </div>,


      <div className="contact-me d-flex justify-content-center">
        <div className="d-flex flex-column align-items-center pt-3">
            <h2 className="p-2">Resume</h2>
            <i class="fa fa-file icon"></i>
        </div>
        <h2 className="d-flex align-items-center p-3"></h2>
        <div className="d-flex flex-column align-items-center pt-3">
          <h2 className="p-2">Contact Me</h2>
          <ul className="d-flex justify-content-center align-items-center">
            <li><i class="fa fa-github icon "></i></li>
            <li><i class="fa fa-linkedin icon"></i></li>
            <li><i class="fa fa-envelope icon"></i></li>
          </ul>
        </div>
      </div>
  ];
}

export default App;
