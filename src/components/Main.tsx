import React from 'react'
import logo from "../assets/hack_white.png"
import linkedin from '../assets/linkedin.png'
import discord from '../assets/discord_logo.png'

const Main = () => {
  return (
    <div id="main" className="main">
      <img src={logo} alt="" />
      <div className="socials">
        <img className="linkedin_logo" src={linkedin} onClick={() => window.open('https://www.linkedin.com/in/hack-a-project/')} alt="linkedin logo" />
        <img className="discord_logo" src={discord} onClick={() => window.open('https://discord.gg/WAWdWchbHz')} alt="discord logo" />
      </div>
      <button onClick={() => window.open("https://csi.campuslabs.com/engage/organization/hack_a_project")}>Join Club</button>
    </div>
  )
}

export default Main