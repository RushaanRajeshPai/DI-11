import React from 'react'
import './Footer.css'
// import long from '../Assets/long.png'
import end from '../Assets/end.png'
import icons from '../Assets/icons.png'

const Footer = () => {
    return (
        <div className='fmain'>
            <div className='ftop'>
                <h2>Lefly is a leading provider of digital marketing solutions <br /> helping businesses thrive </h2>
                <button id='sendbtn1'><strong>Sign Up Now</strong></button>
            </div>
{/* 
            <div><img src={long} alt="" /></div> */}

            <div className='fmid'>
                <div className='fmid1'>
                    <div><strong><img src={end} alt="" id='end' /></strong></div>
                    <p>Whether you have questions about our services, <br /> want to discuss a project, or simply ne expert <br /> advice, our team is here to help. Fill out the form </p>
                </div>
                <div className='fmid2'>
                    <p id='fp'>About</p>
                    <p id='fp'>Solutions</p>
                    <p id='fp'>Resources</p>
                    <p id='fp'>Pricing</p>
                </div>
                <div className='fmid2'>
                    <p id='fp'>About</p>
                    <p id='fp'>Solutions</p>
                    <p id='fp'>Resources</p>
                    <p id='fp'>Pricing</p>
                </div>
                <div className='fmid2'>
                    <p id='fp'>About</p>
                    <p id='fp'>Solutions</p>
                    <p id='fp'>Resources</p>
                    <p id='fp'>Pricing</p>
                </div>
                <div className='fmid3'>
                    <p id='fp'>info@yourdigitalagency.com</p>
                    <div><img src={icons} alt="" /></div>
                </div>
            </div>

            {/* <div><img src={long} alt="" /></div> */}

            <div className='fend'>
                <p id='fendp'>Enative - Digital Agency Landing Page 2024. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer