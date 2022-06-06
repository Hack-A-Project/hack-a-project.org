import React from 'react'
import logo from "../assets/hack_white.png"
import instagram from '../assets/instagram.png'
import facebook from '../assets/facebook.png'
import linkedin from '../assets/linkedin.png'

const Main = () => {
  return (
    <div id="main" className="main">
      <img src={logo} alt="" />
      <div className="socials">
        <img src={instagram} onClick={() => window.open('https://www.instagram.com/hack_a_project/')} alt="instagram logo" />
        <img src={facebook} onClick={() => window.open('https://www.facebook.com/csi.club.18/')} alt="facebook logo" />
        <img src={linkedin} onClick={() => window.open('https://www.linkedin.com/in/hack-a-project/')} alt="linkedin logo" />
      </div>
      <button onClick={() => window.open("https://csi.campuslabs.com/engage/organization/hack_a_project")}>Join Club</button>
    </div>
  )
}

export default Main