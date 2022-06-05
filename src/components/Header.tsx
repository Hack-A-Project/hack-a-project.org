import React from 'react'
import logo from "../assets/hap.png"

const header = () => {
  return (
    <div>
      <nav>
        <img src={logo} alt="Hack-A-Project Logo" />
        <ul>
          <li><a href="#events">Events</a></li>
          <li><a href="#faq">FAQ</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default header