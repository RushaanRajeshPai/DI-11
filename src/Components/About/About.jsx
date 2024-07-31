import React from 'react'
import './About.css'
import ab from '../Assets/ab.png'

const About = () => {
    return (
        <div id='about' className='section'>
            <div className='aboutleft'>
                <img src={ab} alt="" />
            </div>
            <div className='aboutright'>
                <h2 id='homeh2'>Home Lefly Digital Agency</h2>
                <h1>Crafting Seamles Experience <br />Elevate Your Digital Products </h1>
                <p>Learn how our talented designers combine creativity and functionality to captivate <br /> user experiences for your audience.Learn how our talented designers combine</p>
                <p>Learn how our talented designers combine creativity and functionality to captivate <br /> user experiences for your audience.Learn how our talented designers combine creativity and functionality to deliver captivating user experiences for your audience</p>
                <div className='abnos'>
                    <div className='ab1'>
                        <h2><span>456+</span></h2>
                        <h3 id='abh3'>Final Project</h3>
                        <p>Learn how our talented <br />designers combine </p>
                    </div>
                    <div className='ab1'>
                        <h2><span>978+</span></h2>
                        <h3 id='abh3'>Process Project</h3>
                        <p>Learn how our talented <br />designers combine </p>
                    </div>
                    <div className='ab1'>
                        <h2><span>567+</span></h2>
                        <h3 id='abh3'>Complete Project</h3>
                        <p>Learn how our talented <br />designers combine </p>
                    </div>
                </div>
                <button id='learnbtn1'><strong>Learn More</strong></button>
            </div>
        </div>
    )
}

export default About