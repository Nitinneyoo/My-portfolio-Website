import React from 'react';
import './experience.css';
import MyExperience_Data from '../assets/myexperience_data';
import arrow_icon from '../../src/images/arrow_icon.svg'

const Experience = () => {
    return (
        <div id='experience' className='experience'>
            <div className='experience-title'>
                <h1> My Experience </h1>
            </div>
            <div className='experience-container'>
                {MyExperience_Data.map((Experience, index) => {
                    return <div key={index} className={'experience-formate'}>
                        <h3>{Experience.s_no}</h3>
                        <h2>{Experience.s_name}</h2>
                        <p>{Experience.s_desc}</p>
                        <div className='experience-readmore'>
                            <p>Read More</p>
                            <img src={arrow_icon} alt='' />
                        </div>

                    </div>
                })}
            </div>
            <div className='showmore'>
                <p>Show More</p>
                <img src={arrow_icon} alt='' />
            </div>
        </div>
    );
}

export default Experience;