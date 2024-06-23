import React from 'react';
import './About.css';
import Photo_Nitin from '../../src/images/Photo_Nitin.jpg';


const About = () => {
    return (
        <div id='about' className='about'>
            <div className='about-title'>
                <h1>About Me</h1>
            </div>
            <div className='about-section'>
                <div className="about-left">
                    <img src={Photo_Nitin} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>Recent computer science graduate eager to apply my front-end development skills to create engaging user experiences.  Passionate about clean code, responsive design, and staying up-to-date with the latest web technologies. Looking for opportunities to learn and grow in a collaborative team environment.</p>
                        <p> Excited to contribute my skills to a team that values innovation and collaboration.</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill">
                            <p>HTML & CSS</p> <hr style={{ width: "88%" }} />
                        </div>
                        <div className="about-skill">
                            <p>JavaScript</p> <hr style={{ width: "70%" }} />
                        </div>
                        <div className="about-skill">
                            <p>React Js</p> <hr style={{ width: "80%" }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;