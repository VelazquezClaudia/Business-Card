import React from 'react'
import Info from './components/info'
import About from './components/about'
import Interests from './components/interests'
import Footer from './components/footer'
import './App.css'

function App() {
  
  return (
    <>
      <div className='layout'>
      <Info />
      <About />
      <Interests />
      <Footer />
      </div>
    </>
  )
}

export default App
