import React from 'react'
import { useMediaQuery } from 'react-responsive';
import logo from "../assets/hap.png"

const Header = () => {
  const isPhone = useMediaQuery({ query: "(max-width: 500px)" })
  return (
    <div>
      {isPhone ? <nav>
        <img onClick={() => window.scrollTo(0, 0)} src={logo} alt="Hack-A-Project Logo" />
      </nav> :
        <nav>
          <img onClick={() => window.scrollTo(0, 0)} src={logo} alt="Hack-A-Project Logo" />
          <ul>
            <li><a href="#events">Events</a></li>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </nav>
      }
    </div>
  )
}

export default Header