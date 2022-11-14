import React from 'react';
import './Contact.css';
import Banner from '../UsefullCommonComponents/Banner/Banner';
import CallRoundedIcon from '@mui/icons-material/CallRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import FmdGoodRoundedIcon from '@mui/icons-material/FmdGoodRounded';

function Contact() {
  return (
    <>
     <Banner title = "Contact Us"/>
    {/* <div>Contact</div> */}
    <div className="contact_Div">
        <div className="contactForm">
        <h2>Send us your request!</h2>
        <input type="text" placeholder='Your Full Name'/>
        <input type="text" placeholder='Your Email ID'/>
        <textarea placeholder='Your Message'/>
        {/* <button>Send</button> */}
        <button className="border-gradient py-2 px-3 d-none d-lg-block" >Send</button>
        </div>
        <div className="contactSec">
            <h1>IIT Roorkee</h1>
            <div className='contactSec_line'>
                <CallRoundedIcon/>
                <span>
                    +91 123456789
                </span>
            </div>
            <div className='contactSec_line'>
                <EmailRoundedIcon/>
                <span>
                    iisc.iitd.ac.in
                </span>
            </div>
            <div className='contactSec_line'>
                <FmdGoodRoundedIcon/>
                <span>
                    Institute Sport Council IIT Roorkee
                </span>
            </div>
        </div>
        <div className="contactSec">
        <h1>IIT Roorkee</h1>
            <div className='contactSec_line'>
                <CallRoundedIcon/>
                <span>
                    +91 123456789
                </span>
            </div>
            <div className='contactSec_line'>
                <EmailRoundedIcon/>
                <span>
                    iisc.iitd.ac.in
                </span>
            </div>
            <div className='contactSec_line'>
                <FmdGoodRoundedIcon/>
                <span>
                    Institute Sport Council IIT Roorkee
                </span>
            </div>
        </div>
    </div>
    </>
  )
}

export default Contact