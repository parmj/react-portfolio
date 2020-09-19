import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';


const copy = 'Parallax'.split('');

const ParallaxTitle = props => (
    <ScrollAnimation animateIn="fadeIn"
    duration={3}>
        <div className="title">
            <div className="barTop"></div>
                <h1>{props.title}</h1>
            <div className="barBottom"></div>
        </div>
    </ScrollAnimation>
);

export default ParallaxTitle;