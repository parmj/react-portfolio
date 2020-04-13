import React from "react";
import ScrollAnimation from 'react-animate-on-scroll';
import {Col, ButtonGroup, ToggleButton} from 'react-bootstrap'

const ProjectTile = props => (
    <ScrollAnimation animateIn="fadeIn">

    <div className="projects">
        <Col>
            <div className="projects-item">
                <h3>Quizz Bizz</h3>
                <div className="d-flex project-item-desc">
                    <div>
                        <p>QuizBizz is an interactive app where users can join rooms to answer a host's questions in realtime. This application was built on the MERN stack.</p>
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
                            <li><i class="fa fa-github purple-bg icon"></i></li>
                        </ul>
                    </div>
                    <img src="./quizbizz.png"></img>
                </div>
                
            </div>
        </Col>

        <Col>
            <div className="projects-item">
                <h3>Movie Data Aalysis</h3>
                <div className="d-flex project-item-desc">
                    <div className="pl-4">
                        <p>What makes a movie succsseful? I took a look into rotten tomoates and IMDB data to find the answers! Using statistical tests and analysis on our data, we were able to determine that genre had the biggest impact on box office revenues. </p>
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
                            <li><i class="fa fa-github purple-bg icon"></i></li>
                        </ul>
                    </div>
                    <img src="./time_genre.png"></img>

                </div>
                
            </div>
        </Col>
    </div>
    </ScrollAnimation>

);

export default ProjectTile;