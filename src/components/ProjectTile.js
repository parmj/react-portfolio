import React from "react";
import ScrollAnimation from 'react-animate-on-scroll';
import {Col, Row, ButtonGroup, ToggleButton, Container} from 'react-bootstrap'

const ProjectTile = props => (
    <ScrollAnimation animateIn="fadeIn">
        <Container className="projects">
            <Row className="justify-content-center">
                <h3 className="project-title">Quizz Bizz</h3>
            </Row>
            <Row className=" justify-content-md-center pl-5">
                <Col lg={4}>
                    <p className=" project-item-desc" >QuizBizz is an interactive app where users can join rooms to answer a host's questions in realtime. This application was built on the MERN stack.</p>
                    <ButtonGroup toggle className="pt-3">
                        <ToggleButton type="radio" name="radio" defaultChecked value="1" size="sm" className="project-tag">
                        Node
                        </ToggleButton>
                        <ToggleButton type="radio" name="radio" value="2" size="sm" className="project-tag">
                        React
                        </ToggleButton>
                        <ToggleButton type="radio" name="radio" value="3" size="sm" className="project-tag">
                        MongoDB
                        </ToggleButton>
                        <ToggleButton type="radio" name="radio" value="3" size="sm" className="project-tag">
                        Socket.io
                        </ToggleButton>
                    </ButtonGroup>
                    <ul className="pt-3">
                        <li><i className="fa fa-github purple-bg icon"></i></li>
                    </ul>
                </Col>
                <Col lg={8}>
                    <img src={process.env.PUBLIC_URL + '/quizbizz.png'} alt="image"></img>
                </Col>
            </Row>

            <Row className="justify-content-center pt-5">
                <h3 className="project-title">Movie Data Analysis</h3>
            </Row>
            <Row className=" justify-content-md-center pl-5 pb-5">
                <Col lg={4}>
                    <p className=" project-item-desc" >What makes a movie succsseful? I took a look into rotten tomoates and IMDB data to find the answers! Using statistical tests and analysis on our data, we were able to determine that genre had the biggest impact on box office revenues.</p>
                    <ButtonGroup toggle className="pt-3">
                        <ToggleButton type="radio" name="radio" defaultChecked value="1" size="sm" className="project-tag">
                            Python
                        </ToggleButton>
                        <ToggleButton type="radio" name="radio" value="2" size="sm" className="project-tag">
                            Numpy
                        </ToggleButton>
                        <ToggleButton type="radio" name="radio" value="3" size="sm" className="project-tag">
                            Pandas
                        </ToggleButton>
                    </ButtonGroup>
                    <ul className="pt-3">
                        <li><i className="fa fa-github purple-bg icon"></i></li>
                    </ul>
                </Col>
                <Col lg={8}>
                    <img src={process.env.PUBLIC_URL + '/time_genre.png'} alt="image"></img>
                </Col>
            </Row>
        </Container>
    </ScrollAnimation>

);

export default ProjectTile;