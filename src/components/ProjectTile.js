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
                            Active
                            </ToggleButton>
                            <ToggleButton type="radio" name="radio" value="2" size="sm" className="project-tag">
                            Radio
                            </ToggleButton>
                            <ToggleButton type="radio" name="radio" value="3" size="sm" className="project-tag">
                            Radio
                            </ToggleButton>
                        </ButtonGroup>
                        <ul className="pt-3">
                            <li><i class="fa fa-github purple icon"></i></li>
                        </ul>
                    </div>
                    <img src="./quizbizz.png"></img>
                </div>
                
            </div>
        </Col>

        <Col>
            <div className="projects-item">
                <h2>Movie Data Aalysis</h2>
                <div className="d-flex project-item-desc">
                    <img src="./time_genre.png"></img>
                    <div className="pl-4">
                        <p>What makes a movie succsseful? I took a look into rotten tomoates and IMDB data to find the answers!</p>
                        <ButtonGroup toggle className="pt-3">
                            <ToggleButton type="radio" name="radio" defaultChecked value="1" size="sm" className="project-tag">
                            Active
                            </ToggleButton>
                            <ToggleButton type="radio" name="radio" value="2" size="sm" className="project-tag">
                            Radio
                            </ToggleButton>
                            <ToggleButton type="radio" name="radio" value="3" size="sm" className="project-tag">
                            Radio
                            </ToggleButton>
                        </ButtonGroup>
                        <ul className="pt-3">
                            <li><i class="fa fa-github purple icon"></i></li>
                        </ul>
                    </div>
                </div>
                
            </div>
        </Col>
        <Col>
            <div className="projects-item">
                <h3>Reeplay</h3>
                <div className="d-flex project-item-desc">
                    <div>
                        <p>What makes a movie succsseful? I took a look into rotten tomoates and IMDB data to find the answers!</p>
                        <ButtonGroup toggle className="pt-3">
                            <ToggleButton type="radio" name="radio" defaultChecked value="1" size="sm" className="project-tag">
                            Active
                            </ToggleButton>
                            <ToggleButton type="radio" name="radio" value="2" size="sm" className="project-tag">
                            Radio
                            </ToggleButton>
                            <ToggleButton type="radio" name="radio" value="3" size="sm" className="project-tag">
                            Radio
                            </ToggleButton>
                        </ButtonGroup>
                        <ul className="pt-3">
                            <li><i class="fa fa-github purple icon"></i></li>
                        </ul>
                    </div>
                    <img src="./reeplay.png"></img>
                </div>
                
            </div>
        </Col>

    </div>
    </ScrollAnimation>

);

export default ProjectTile;