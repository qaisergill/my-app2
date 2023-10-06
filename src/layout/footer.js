import React from 'react'
import { BsFillTelephoneFill } from "react-icons/bs"
import logoimg from "../images/logo/logonav.svg"

const Footer = () => {
  return (
    <>
      <section className='quick_service_section'>
        <div className='page-width'>
          <div className='quick_service_section_inner' >
            <h2>Quick Service on Emergency</h2>
            <a href="tel:+923334519926"><BsFillTelephoneFill /><span>+923334519926</span></a>
          </div>
        </div>
      </section>
      <footer>
        <div className='page-width'>
          <div className='footer_inner_grid'>
            <div className='footer_about'>
              <div className='logo'><img src={logoimg} alt='' /></div>
              <p>We make sure that your safety is never compromised. This is why we hire all the staff under the roof of Home Comfort, just for your satisfaction.</p>
            </div>
            <nav >
              <ul>
                <li><a href="">Home</a></li>
                <li><a href="">Services</a></li>
                <li><a href="">Contact us</a></li>
              </ul>
            </nav>
            <nav>
              <ul>
                <li><a href="">Facebook</a></li>
                <li><a href="">Linkdin</a></li>
                <li><a href="">Twitter</a></li>
                <li><a href="">Instagram</a></li>
              </ul></nav>
            <div className='contact-us'>
              <ul>
              <a href="tel:+923334519926"><BsFillTelephoneFill />+923334519926</a>
                <li><a href="mailto:qaisernadeem042@gmail.com">qaisernadeem042@gmail.com</a></li>
                <form className='form_footer' action=''>
                  <input type='text'/>
                  <input type='submit' value="submit"/>
                </form>
              </ul>

            </div>
          </div>

        </div>
        <hr></hr>
        <p className='copyright'>
          @ 2023 All Rights Reserved
        </p>

      </footer>


    </>
  )
}

export default Footer
