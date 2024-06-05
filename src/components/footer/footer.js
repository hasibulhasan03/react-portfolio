import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'

const Footer = () => {
  return (
    <footer>
        <a href='#' className='footer__logo'>Mr.MaHi03</a>

        <ul className='permalinks'>
            <li><a href='#'>Home</a></li>
            <li><a href='#about'>About</a></li>
            <li><a href='#experience'>Experience</a></li>
            <li><a href='#games'>Games</a></li>
            <li><a href='#projects'>Projects</a></li>
            <li><a href='#contact'>Contact</a></li>
        </ul>

        <div className='footer__socials'>
            <a href="https://www.facebook.com/hasibulhasan.mahi.3" target="_blank"><FaFacebookF /></a>
            <a href="https://instagram.com/hasibulhasanmahi03" target="_blank"><FiInstagram /></a>
            <a href="https://twitter.com" target="_blank"><IoLogoTwitter /></a>
        </div>

        <div className='footer__copyright'>
            <small>&copy; Hasibul Hasan Mahi. All rights reserved.</small>
        </div>
    </footer>
  )
}

export default Footer