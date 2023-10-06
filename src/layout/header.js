import React from 'react'
import {BsFillTelephoneFill} from "react-icons/bs"
import logoimg from "../images/logo/logonav.svg"
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <header>

        <div className='page-width'>
          <div className='nav-desktop'>
            <div className='logo'><img src={logoimg} alt='' /></div>
            <nav>
              <ul>
                <li><Link  to="/">Home</Link></li>
                <li><Link  to="/services">Services</Link></li>
                <li><Link  to="/contact-content">Contact us</Link></li>
                 <li><Link to="tel:+923334519926"><BsFillTelephoneFill /><span>+92-3334519926</span></Link></li>

              </ul>
            </nav>

          </div>
        </div>

      </header>
    </>
  )
}

export default Header
