import React from 'react'
import team from '../data/team.json'

const Team = () => {
  return (
    <div className="teamContainer">
      <h1 className="title">Our Team</h1>
      <div className="headWrapper">
        {team.heads.map(({ image, name, title }) => {
          return (
            <div className="teamWrapper">
              <div className="imageHolder">
                <img src={image} alt="" />
              </div>
              <div className="text">
                <h2>{name}</h2>
                <p>{title}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Team