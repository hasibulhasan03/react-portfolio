import React from 'react'
import './projects.css'

import IMG1 from '../../assets/edit1.jpg'
import IMG2 from '../../assets/edit2.jpg'
import IMG3 from '../../assets/edit3.jpg'

const Projects = () => {
  return (
    <section id='projects'>
        <h5>My Recent Work</h5>
        <h2>Projects</h2>

        <div className='container portfolio__container'>

            <article className='portfolio__item'>
                <div className='portfolio__item-image'>
                    <img src={IMG1} alt=' '/>
                </div>
                <h3>Responsive Portfolio Website</h3>
                
                <div className='portfolio__item-cta'>
                    <a href='https://github.com/MrMaHi03' target="_blank" className='btn'>GitHub</a>
                    <a href='#' className='btn btn-primary'>Live Demo</a>
                </div>
            </article>

            <article className='portfolio__item'>
                <div className='portfolio__item-image'>
                    <img src={IMG2} alt=' '/>
                </div>
                <h3>Responsive School Website</h3>
                
                <div className='portfolio__item-cta'>
                    <a href='https://github.com/MrMaHi03' target="_blank" className='btn'>GitHub</a>
                    <a href='https://mrmahi03.github.io/reazuddin/' target="_blank" className='btn btn-primary'>Live Demo</a>
                </div>
            </article>

            <article className='portfolio__item'>
                <div className='portfolio__item-image'>
                    <img src={IMG3} alt=' '/>
                </div>
                <h3>Responsive React Game</h3>
                
                <div className='portfolio__item-cta'>
                    <a href='https://github.com/MrMaHi03' target="_blank" className='btn'>GitHub</a>
                    <a href='#games' className='btn btn-primary'>Live Demo</a>
                </div>
            </article>

        </div>
    </section>
  )
}

export default Projects