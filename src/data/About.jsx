import React from 'react';
import './About.css';
import Photo_Nitin from '../../src/images/Photo_Nitin.jpg';


const About = () => {
    return (
        <div className='about'>
            <div className='about-title'>
                <h1>About Me</h1>
            </div>
            <div className='about-section'>
                <div className="about-left">
                    <img src={Photo_Nitin} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi ipsa labore modi inventore natus? Vitae blanditiis explicabo corrupti eos ipsa hic magnam itaque rerum nobis. Ducimus magni eum odio dolorem.</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt facilis consequuntur aliquid alias adipisci ea repellat ipsam animi saepe cum.</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill">
                            <p>HTML & CSS</p> <hr style={{ width: "80%" }} />
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