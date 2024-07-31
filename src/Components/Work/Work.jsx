import React from 'react'
import './Work.css'
import arrow from '../Assets/arrow.png'
import web from '../Assets/web.png'
import seo from '../Assets/seo.png'
import content from '../Assets/content.png'
import ana from '../Assets/ana.png'

const Work = () => {
    return (
        <div className='section' id='work'>
            <div className='worktop'>
                <div className='worktop1'>
                    <h2 id='homeh2'>Home Lefly Digital Agency</h2>
                    <h1>Unlock the Power of Digital Marketing <br />Drive Growth and Tailored Strategies</h1>
                    <p>Explore our comprehensive suite of digital marketing services designed to help you busine thrive <br />in the online landscape. Explore our comprehensive suite of digital marketing services designed <br />to help your business thrive in the online landscape.</p>
                </div>
                <div className='worktop2'><img src={arrow} alt="" /></div>
                <div className='worktop3'>
                    <button id='learnbtn'><strong>Learn More</strong></button>
                </div>
            </div>
            <div className='workdown'>
                <div className='workdown1'>
                    <img src={web} alt="" />
                    <h3>Web Design Development</h3>
                    <p>Rafting visually appealing and <br />unfriendly websites tailored <br />to clients' needs</p>
                </div>
                <div className='workdown2'>
                    <img src={arrow} alt="" />
                </div>
                <div className='workdown1'>
                    <img src={seo} alt="" />
                    <h3>Search Engine Optimization</h3>
                    <p>Rafting visually appealing and <br />unfriendly websites tailored <br />to clients' needs</p>
                </div>
                <div className='workdown2'>
                    <img src={arrow} alt="" />
                </div>
                <div className='workdown1'>
                    <img src={content} alt="" />
                    <h3>Content Creation Marketing</h3>
                    <p>Rafting visually appealing and <br />unfriendly websites tailored <br />to clients' needs</p>
                </div>
                <div className='workdown2'>
                    <img src={arrow} alt="" />
                </div>
                <div className='workdown1'>
                    <img src={ana} alt="" />
                    <h3>Analytics and Reporting</h3>
                    <p>Rafting visually appealing <br />unfriendly websites tailored <br />to clients' needs</p>
                </div>
            </div>
        </div>
    )
}

export default Work