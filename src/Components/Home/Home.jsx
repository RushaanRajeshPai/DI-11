import React from 'react'
import './Home.css'
import home from '../Assets/home.png'

const Home = () => {
  return (
    <div id='home' className='section'>
        <div className='homeleft'>
            <h2 id='homeh2'>Home Lefly Digital Agency</h2>
            <h1 id='homeh1'>Welcome to Lefly Your <br />Gateway to Digital <br /> Excellence</h1>
            <p>We're dedicated to transforming your digital dreams into reality. Whether you're looking to elevate your online presence, engage your audience with captivating content, or drive through strategic digital marketing, we've got you covered.</p>
            <button id='start-btn'><strong>Let's Get Started</strong></button>
        </div>
        <div className='homeright'>
            <img src={home} alt="" />
        </div>
    </div>
  )
}

export default Home