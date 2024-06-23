import React from 'react';
import './info.css';
import Photo_Nitin from '../../src/images/Photo_Nitin.jpg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
const Info = () => {
    return (
        <div id='home' className='info'>
            <img src={Photo_Nitin} alt="Profile_Photo" />
            <h1><span>I'm Nitin Singh,</span> Frontend Developer.</h1>
            <p>I am a Frontend developer from Rewa, India. This is My Project to develope good Knowledge.</p>
            <div className='info-action'>
                <div className='info-connect'><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
                <div className='info-resume'>My Resume</div>
            </div>
        </div>
    );
}

export default Info;
