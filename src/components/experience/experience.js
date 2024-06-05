import React from 'react'
import './experience.css'
import {FaHtml5} from 'react-icons/fa'
import {FaCss3Alt} from 'react-icons/fa'
import {SiJavascript} from 'react-icons/si'
import {FaReact} from 'react-icons/fa'
import {FaBootstrap} from 'react-icons/fa'

import {FaNodeJs} from 'react-icons/fa'
import {BiLogoMongodb} from 'react-icons/bi'
import {FaPhp} from 'react-icons/fa'
import {SiMysql} from 'react-icons/si'
import {FaJava} from 'react-icons/fa'

const Experience = () => {
  return (
    <section id='experience'>
        <h5>What Skills I Have</h5>
        <h2>My Experience</h2>

        <div className='container experience__container'>
            <div className='experience__frontend'>
                <h3>Frontend Development</h3>

                <div className='experience__content'>
                    <article className='experience__details'>
                        <FaReact className='experience__details-icon' />
                        <div>
                            <h4>React</h4>
                            <small className='text-light'>Experienced</small>
                        </div>
                    </article>

                    <article className='experience__details'>
                        <SiJavascript className='experience__details-icon' />
                        <div>
                            <h4>JavaScript</h4>
                            <small className='text-light'>Experienced</small>
                        </div>
                    </article>

                    <article className='experience__details'>
                        <FaHtml5 className='experience__details-icon' />
                        <div>
                            <h4>HTML</h4>
                            <small className='text-light'>Experienced</small>
                        </div>
                    </article>

                    <article className='experience__details'>
                        <FaCss3Alt className='experience__details-icon' />
                        <div>
                            <h4>CSS</h4>
                            <small className='text-light'>Experienced</small>
                        </div>
                    </article>

                    <article className='experience__details'>
                        <FaBootstrap className='experience__details-icon' />
                        <div>
                            <h4>BootStrap</h4>
                            <small className='text-light'>Experienced</small>
                        </div>
                    </article>
                </div>
            </div>

            <div className='experience__backend'>
                <h3>Backend Development</h3>

                <div className='experience__content'>
                    <article className='experience__details'>
                        <FaNodeJs className='experience__details-icon' />
                        <div>
                            <h4>NodeJS</h4>
                            <small className='text-light'>Basic</small>
                        </div>

                    </article>

                    <article className='experience__details'>
                        <BiLogoMongodb className='experience__details-icon' />
                        <div>
                            <h4>MongoDB</h4>
                            <small className='text-light'>Basic</small>
                        </div>
                    </article>

                    <article className='experience__details'>
                        <FaPhp className='experience__details-icon' />
                        <div>
                            <h4>PHP</h4>
                            <small className='text-light'>Basic</small>
                        </div>
                    </article>

                    <article className='experience__details'>
                        <SiMysql className='experience__details-icon' />
                        <div>
                            <h4>MySQL</h4>
                            <small className='text-light'>Experienced</small>
                        </div>
                    </article>

                    <article className='experience__details'>
                        <FaJava className='experience__details-icon' />
                        <div>
                            <h4>JAVA</h4>
                            <small className='text-light'>Experienced</small>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Experience