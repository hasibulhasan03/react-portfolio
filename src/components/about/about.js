import React from 'react'
import './about.css'
import ME from '../../assets/mahiNew.jpg'
import {FaAward} from 'react-icons/fa'
import {VscFolder} from 'react-icons/vsc'
import {HiOutlineLibrary} from 'react-icons/hi'
import {FiUsers} from 'react-icons/fi'

const About = () => {
  return (
    <section id='about'>
        <h5>Get To Know</h5>
        <h2>About Me</h2>

        <div className='container about__container'>
            <div className='about__me'>
                <div className='about__me-image'>
                    <img src={ME} alt='mahi' />
                </div>
            </div>

            <div className='about__content'>
                <div className='about__cards'>
                    <article className='about__card'>
                        <HiOutlineLibrary className='about__icon' />
                        <h5>Education</h5>
                        <small>BSc in CSE</small>
                    </article>

                    <article className='about__card'>
                        <FaAward className='about__icon' />
                        <h5>Experience</h5>
                        <small>1+ Years</small>
                    </article>

                    <article className='about__card'>
                        <VscFolder className='about__icon' />
                        <h5>Projects</h5>
                        <small>10+ Completed</small>
                    </article>

                    <article className='about__card'>
                        <FiUsers className='about__icon' />
                        <h5>Clients</h5>
                        <small>...</small>
                    </article>
                </div>

                <p>
                    Hey, I am Hasibul Hasan Mahi. I am a Programmer, Developer, and Designer. Currently, I am studying Computer Science and Engineering at Bangladesh Army International University of Science and Technology (BAIUST).
                </p>

                <a href='#contact' className='btn btn-primary'>Let's Talk</a>
            </div>
        </div>
    </section>
  )
}

export default About