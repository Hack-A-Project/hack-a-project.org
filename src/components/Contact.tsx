import React from 'react'
import email from "../assets/email.png"

const Contact = () => {
  return (
    <div className="contact">
      <h1 className="title">Contact Us</h1>
      <div>
        <img src={email} onClick={() => window.open('mailto:hackaprojectcsi@gmail.com')} alt="email" />
      </div>
    </div>
  )
}

export default Contact