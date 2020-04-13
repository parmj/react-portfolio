import React from "react";
import {Col} from 'react-bootstrap'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const WorkGraph = props => (
    <Col>
            <VerticalTimeline>

                <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                date="2016"
                iconStyle={{ background: '#6600ff', color: '#fff' }}
                // icon={<WorkIcon />}
            >
                <div className="d-flex align-items-center dp-flex">
                    <img className="p-3" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/SFU-block-logo.svg/1280px-SFU-block-logo.svg.png" width="20%"></img>
                    <div>
                        <h3 className="vertical-timeline-element-title">Simon Fraser University</h3>
                        <h4 className="vertical-timeline-element-subtitle">Burnaby, BC</h4>
                        <p>
                        Computer Science
                        </p>
                    </div>
                </div>

            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="Sept - Jan 2017"
                iconStyle={{ background: '#6600ff', color: '#fff' }}
                // icon={<WorkIcon />}
            >

                <div className="d-flex align-items-center dp-flex">
                    <img className="p-3" src="https://cdn.shopify.com/s/files/1/0036/4806/1509/files/logo-english_300x@2x.png?v=889044203346216212" width="30%"></img>
                    <div>
                        <h3 className="vertical-timeline-element-title">QA Developer</h3>
                        <h4 className="vertical-timeline-element-subtitle">Staples - PNI Media</h4>
                        <h5 className="vertical-timeline-element-subtitle">Vancouver, BC</h5>
                        <p>
                        Internship at a shitty place
                        </p>
                    </div>
                </div>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work pl-4"
                date="May 2019 - April 2020"
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                iconStyle={{ background: '#6600ff', color: '#fff' }}
                // icon={<WorkIcon />}
            >
                <div className="d-flex align-items-center dp-flex">
                    <img className="p-3" src="https://static.rdc.moveaws.com/favicon.ico" width="20%"></img>
                    <div>
                        <h3 className="vertical-timeline-element-title">Software Engineer</h3>
                        <h4 className="vertical-timeline-element-subtitle">Realtor.com</h4>
                        <h5 className="vertical-timeline-element-subtitle">Vancouver, BC</h5>
                    </div>
                </div>

                <p className="pl-80">
                Intership - Search backend dev
                </p>
            </VerticalTimelineElement>


        </VerticalTimeline>
    </Col>
);

export default WorkGraph;