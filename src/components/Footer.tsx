import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
      <p>© Copyright 2020-{new Date().getFullYear()} <a href="https://github.com/Hack-A-Project" target="_blank" rel="noreferrer">Hack-A-Project</a></p>
    </div>
  )
}

export default Footer