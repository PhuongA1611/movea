import React from 'react'
import { Link } from 'react-router-dom'

import './Footer.scss'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer__content'>
        <div className='footer__content__logo'>
          <Link to="/">MOVEA</Link>
        </div>
        <div className='footer__content__menu'>
          <Link>Home</Link>
          <Link>Contact us</Link>
          <Link>Term of services</Link>
          <Link>About us</Link>
        </div>
      </div>
    </div>
  )
}

export default Footer
