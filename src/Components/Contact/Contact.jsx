import React from 'react'
import './Contact.css'
import a from '../Assets/a.png'
import b from '../Assets/b.png'
import c from '../Assets/c.png'
import d from '../Assets/d.png'

const Contact = () => {
  return (
    <div id='contact' className='section'>
        <div className='contl'>
            <h3><span>Contact Us</span></h3>
            <h1>Get In Touch</h1>
            <p>Whether you have questions about our services, want to discuss a project, or simply expert <br /> advice, our team is here to help. Fill out the form below, and we'll get back to you</p>

            <div className='contboxes'>
                <div className='contbox'>
                    <div><img src={a} alt="" /></div>
                    <h4 id='ch4'>Phone Number</h4>
                    <p id='cp'>+123 457 893</p>
                </div>
                <div className='contbox'>
                    <div><img src={b} alt="" /></div>
                    <h4 id='ch4'>Business Hours</h4>
                    <p id='cp'>Monday - Friday, <br />9:00 AM - 6:00 PM (GMT)</p>
                </div>
            </div>

            <div className='contboxes1'>
                <div className='contbox'>
                    <div><img src={c} alt="" /></div>
                    <h4 id='ch4'>Email</h4>
                    <p id='cp'>info@agency.com</p>
                </div>
                <div className='contbox'>
                    <div><img src={d} alt="" /></div>
                    <h4 id='ch4'>Address</h4>
                    <p id='cp'>123 Digital Avenue City, <br />Country, ZIP</p>
                </div>
            </div>
        </div>

        <div className='contr'>
            <div className='cont1'>
                <input type="text" name="" id="ipname" placeholder='Your Name'/>
                <input type="text" name="" id="ipname" placeholder='Your Email'/>
            </div>
            <input type="text" placeholder='Your Address' id='ipaddress' /> <br />
            <input type="text" name="" id="ipmsg" placeholder='Enter Message'/> <br />
            <button id='sendbtn'><strong>Send</strong></button>
        </div>
    </div>
  )
}

export default Contact