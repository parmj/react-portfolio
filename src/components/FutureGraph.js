import React from "react";
import {Col} from 'react-bootstrap'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const FutureGraph = props => (
    <Col>
            <VerticalTimeline>

                <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                date="Dec 2020"
                iconStyle={{ background: '#359dff', color: '#fff' }}
            >
                <div className="d-flex align-items-center dp-flex">
                    <img className="p-3" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/SFU-block-logo.svg/1280px-SFU-block-logo.svg.png" width="20%"></img>
                    <div>
                        <h3 className="vertical-timeline-element-title">Graduation</h3>
                        <h4 className="vertical-timeline-element-subtitle">Simon Fraser University</h4>
                        <p>
                        Burnaby, BC
                        </p>
                    </div>
                </div>

            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="Jan 2021"
                iconStyle={{ background: '#359dff', color: '#fff' }}
            >

                <div className="d-flex align-items-center dp-flex">
                    <i className="fa fa-question-circle"></i>
                    <div>
                        <h3 className="vertical-timeline-element-title">Software Engineer</h3>
                        <h4 className="vertical-timeline-element-subtitle">*Your Company*</h4>
                        <h5 className="vertical-timeline-element-subtitle">Unknown</h5>
                    </div>
                </div>
            </VerticalTimelineElement>
        </VerticalTimeline>
    </Col>
);

export default FutureGraph;