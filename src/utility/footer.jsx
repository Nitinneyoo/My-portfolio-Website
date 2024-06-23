import React from 'react';
import './footer.css'
import user_icon from '../../src/images/user_icon.svg'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-top'>
                <div className='footer-top-left'>
                    <p>I'm Nitin Singh,a Frontend Developer.</p>
                </div>
                <div className='footer-top-right'>
                    <div className='footer-email-input'>
                        <img src={user_icon} alt=''></img>
                        <input type='email' placeholder='Enter Your Email' />
                    </div>
                    <div className="footer-subscribe">Subscribe</div>
                </div>
            </div>
            <hr />
            <div className='footer-bottom'>
                <p className="footer-bottom-left">
                    Ⓒ  2024 Nitin Singh. All Rights Reserved.
                </p>
                <div className="footer-bottom-right">
                    <p>Term Of Services</p>
                    <p>Privacy Policy</p>
                    <p>Connect With Me </p>
                </div>
            </div>
        </div>
    );
}

export default Footer;