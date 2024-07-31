import React from 'react'
import './Service.css'
import line from '../Assets/line.png'
import img from '../Assets/img.png'

const Service = () => {
    return (
        <div id='service' className='section'>
            <div className='servtop'>
                <div className='servtop1'>
                    <h2><span>Service Digital Agency</span></h2>
                    <h1 id='sh1'>Harnessing the Potential of Data Drive <br />Decisions Optimize Performance</h1>
                    <p>Certainly! A digital agency operates in the realm of digital marketing, encompassing various services such as web design, development, search engine optimization (SEO), content <br />creation, social media management, online advertising, and more. Its primary focus is to help businesses establish a strong online presence, engage with their target audience, and <br />drive growth and revenue through digital channels. Certainly! A digital agency operates in the realm of digital marketing, encompassing various services</p>
                </div>
                <div className='servtop2'>
                    <div className='servtop2left'>
                        <div id='servtop2left'>.</div>
                        <p id='sp'>Flied Agency</p>
                        <h3 id='sh3'>Digital Strategy</h3>
                        <p>Learn how our talented designers combine creativity and functionality to deliver captivating user experiences for your audience.Learn how our tale designers combine creativity and functionality to deliver captivating</p>
                        <div className='buttons'>
                            <h3><span>Learn More</span></h3>
                            <div><img src={line} alt="" id='line' /></div>
                        </div>
                    </div>
                    <div className='servtop2left'>
                        <div id='servtop2left'>.</div>
                        <p id='sp'>Flied Agency</p>
                        <h3 id='sh3'> Mobile App Development</h3>
                        <p>Learn how our talented designers combine creativity and functionality to deliver  captivating user experiences for your audience.Learn how our tale designers combine creativity and functionality to deliver captivating</p>
                        <div className='buttons'>
                            <h3><span>Learn More</span></h3>
                            <div><img src={line} alt="" id='line' /></div>
                        </div>
                    </div>
                </div>
                <div className='servtop2'>
                    <div className='servtop2left'>
                        <div id='servtop2left'>.</div>
                        <p id='sp'>Flied Agency</p>
                        <h3 id='sh3'>Content Creation</h3>
                        <p>Learn how our talented designers combine creativity and functionality to deliver captivating user experiences for your audience.Learn how our tale designers combine creativity and functionality to deliver captivating</p>
                        <div className='buttons'>
                            <h3><span>Learn More</span></h3>
                            <div><img src={line} alt="" id='line' /></div>
                        </div>
                    </div>
                    <div className='servtop2left'>
                        <div id='servtop2left'>.</div>
                        <p id='sp'>Flied Agency</p>
                        <h3 id='sh3'>E-commerce Solutions </h3>
                        <p>Learn how our talented designers combine creativity and functionality to deliver captivating user experiences for your audience.Learn how our tale designers combine creativity and functionality to deliver captivating</p>
                        <div className='buttons'>
                            <h3><span>Learn More</span></h3>
                            <div><img src={line} alt="" id='line' /></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='servbottom'>
                <div className='servbleft'>
                    <h2><span>Why Us Lefly Digital Agency</span></h2>
                    <h1>Maximize Your Online Dominate <br />Search Engines and Amplify <br />Your Visibility</h1>
                    <p>Certainly! A digital agency operates in the realm of digital marketing,  <br />encompassing various services such as web design, development, <br />search engine optimization (SEO),  content creation</p>
                    <p><strong>Transform Your Brand's Online Presence with Solutions from Digital Innovators</strong></p>
                    <div className='buttons'>
                        <h3><span>Learn More</span></h3>
                        <div><img src={line} alt="" id='line' /></div>
                    </div>
                </div>
                <div className='servbright'>
                    <img src={img} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Service