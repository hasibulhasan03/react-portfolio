import React from 'react'
import Nav from './components/nav/nav'
import Header from './components/header/header'
import About from './components/about/about'
import Experience from './components/experience/experience'
import Games from './components/games/games'
import Projects from './components/projects/projects'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'


const App = () => {
  return (
    <>
    <Header />
    <Nav />
    <About />
    <Experience />
    <Games />
    <Projects />
    <Contact />
    <Footer />
    </>
  )
}

export default App