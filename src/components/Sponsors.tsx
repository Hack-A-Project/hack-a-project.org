import React from 'react'
import github from "../assets/github.png"

const Sponsors = () => {
  return (
    <div className="sponsors">
      <h1 className="title">Our Sponsors</h1>
      <div>
        <img src={github} alt="github logo" />
      </div>
    </div>
  )
}

export default Sponsors