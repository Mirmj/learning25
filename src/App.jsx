import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Heder } from './components/Heder'
import Footer from './components/Footer'
import Content from './components/Content'


function App() {
  
 

  return (
    <>
      <div className="app-container">
        <Heder />
        <div className="main-content">
          <Content />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App
