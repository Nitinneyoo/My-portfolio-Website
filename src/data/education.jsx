import React from 'react';
import './education.css';
import Education_Data from '../assets/education_data';
import arrow_icon from '../../src/images/arrow_icon.svg'

const Education = () => {
    return (
        <div id='education' className='education'>
            <div className='education-title'>
                <h1>My Education</h1>
            </div>
            <div className='education-container'>
                {Education_Data.map((education, index) => {
                    return <div key={index} className='education-formate'>
                        <h3>{education.s_no}</h3>
                        <h2>{education.s_name}</h2>
                        <h2>{education.s_desc}</h2>
                        <p>{education.s_marks}</p>
                        <div className='education-readmore'>
                            <p>Read More</p>
                            <img src={arrow_icon} alt='' />
                        </div>
                    </div>
                })}
            </div>

        </div>
    );
}

export default Education;