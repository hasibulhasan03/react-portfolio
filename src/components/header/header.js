import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocial from './HeaderSocial'
import ME from '../../assets/mahiBGR.png'
import Typed from 'react-typed'

const Header = () => {
  return (
    <header>
        <div className='container header__container'>
            <div className='left_section'>
                <h5>Hello, I am</h5>
                <h1>Hasibul Hasan Mahi</h1>
                <div className='h2container'>
                    <h2>a</h2>
                    <div className='animated-typing'>
                        <h2>
                            
                            <Typed 
                            
                                strings={[
                                    "Designer",
                                    "Developer",
                                    "Programmer",
                                ]}
                                typeSpeed={150}
                                backSpeed={100}
                                loop
                            />
                        </h2>

                    </div>
                </div>

                <CTA />

                <HeaderSocial />
            </div>

            <div className='right_section'>
                <div className='me'>
                    <img src={ME} alt='' />
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header