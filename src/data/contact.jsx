import React from 'react';
import './contact.css';
import mail_icon from '../../src/images/mail_icon.svg';
import location_icon from '../../src/images/location_icon.svg';
import call_icon from '../../src/images/call_icon.svg';
const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "c401df6c-7324-41a0-98ab-9ab89e11051b");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            alert(res.message);
        }
    };

    return (
        <div id='contact' className='contact'>
            <div className='contact-title'>
                <h1>Contact Me</h1>
            </div>
            <div className='contact-section'>
                <div className="contact-left">
                    <h1>
                        Let's Talk
                    </h1>
                    <p>
                        I'm Currently available to take projects and works, So Free to contact about anything that you want me to work on.
                        You can contact me anytime.
                    </p>
                    <div className='contact-details'>
                        <div className="contact-detail">
                            <img src={mail_icon} alt='' />
                            <p>nitinsinghji12@gmail.com</p>

                        </div>
                        <div className="contact-detail">
                            <img src={call_icon} alt='' />
                            <p>+91 7000080870</p>

                        </div>
                        <div className="contact-detail">
                            <img src={location_icon} alt='' />
                            <p>Bangluru, Karnatka (560029)</p>
                        </div>
                    </div>
                </div>
                <form onSubmit={onSubmit} className='contact-right'>
                    <label htmlFor=''>Your Name</label>
                    <input type='text' placeholder='Enter Your Name' name='name' />
                    <label htmlFor=''>Your Email</label>
                    <input type='email' placeholder='Enter Your Email' name='email' />
                    <label htmlFor='' >Write Your Message Here</label>
                    <textarea name='message' rows={10} placeholder='Enter Your  Message' />
                    <button type='submit' className='contact-submit'>Submit Now</button>
                </form>
            </div>

        </div>
    );
}

export default Contact;