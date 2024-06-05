import React from 'react'
import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'

const HeaderSocial = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.facebook.com/hasibulhasan.mahi.3' target='_blank'><BsFacebook /></a>
        <a href='https://instagram.com/hasibulhasanmahi03' target='_blank'><BsInstagram /></a>
        <a href='https://github.com/MrMaHi03' target='_blank'><BsGithub /></a>
        <a href='https://www.linkedin.com' target='_blank'><BsLinkedin /></a>
    </div>
  )
}

export default HeaderSocial