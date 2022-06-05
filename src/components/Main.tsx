import React from 'react'
import logo from "../assets/hack_black.png"

const Main = () => {
  return (
    <div id="main">
      <img src={logo} alt="" />
      <button onClick={() => window.open("https://csi.campuslabs.com/engage/organization/hack_a_project")}>Join Club</button>
    </div>
  )
}

export default Main