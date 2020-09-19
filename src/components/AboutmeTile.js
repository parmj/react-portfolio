import React from "react";
import {Col} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

const AboutmeTile = props => (
    <Col className="tile aboutme">
        <img src='https://i.kym-cdn.com/photos/images/newsfeed/001/053/045/2db.png' className='portrait'></img>
        <div className="aboutme-text">
            <h3>Parm Johal</h3>
            <p>4th Year CompSci Student</p>
        </div>
        <div className="arrow bounce">
            <FontAwesomeIcon icon={faChevronDown} />
        </div>
    </Col>
);

export default AboutmeTile;