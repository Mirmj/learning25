import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Heder } from './components/Heder'
import Footer from './components/Footer'
import Content from './components/Content'
import { ArrayDemo1 } from './components/ArrayDemo1'
import { ArrayDemo2 } from './components/ArrayDemo2'
import { ArrayDemo3 } from './components/ArrayDemo3'
import { ArrayDemo4 } from './components/ArrayDemo4'
import { ArrayDemo5 } from './components/ArrayDemo5'
import { ArrayDemo6 } from './components/ArrayDemo6'

import { UseStateDemo1 } from './components/UseStateDemo1'
import { ArrayDemo7 } from './components/ArrayDemo7'
import { UseStateDemo2 } from './components/UseStateDemo2'
import { InputDemo1 } from './components/InputDemo1'
import { Navbar } from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import { HotstarHome } from './components/hotstar/HotstarHome'
import { HotstarMovies } from './components/hotstar/HotstarMovies'
import { HotstarWelcome } from './components/hotstar/HotstarWelcome'
import { HotstarError } from './components/hotstar/HotstarError'



function App() {
  
 

  return (
    <>
      <div className="app-container">
        {/* <Heder />
        <div className="main-content">
          <Content />
        </div>
        <Footer /> */}
        {/* <ArrayDemo1></ArrayDemo1>
        <ArrayDemo2></ArrayDemo2> */}
        {/* <ArrayDemo3></ArrayDemo3> */}
        {/* <ArrayDemo4></ArrayDemo4> */}
        {/* <ArrayDemo5></ArrayDemo5> */}
          {/* <ArrayDemo6></ArrayDemo6> */}
          {/* <ArrayDemo7/> */}
          {/* <UseStateDemo1></UseStateDemo1> */}
          {/* <UseStateDemo1></UseStateDemo1> */}
          {/* <UseStateDemo2></UseStateDemo2> */}
          {/* <InputDemo1/> */}

          <Navbar></Navbar>
          <Routes>
              <Route path='/' element= {<HotstarWelcome/>}></Route>
              <Route path='/home' element= {<HotstarHome/>}></Route>
              <Route path='/movies' element= {<HotstarMovies/>}></Route>
              <Route path='/*' element= {<HotstarError/>}></Route>
              
              
              
              </Routes>
      </div>
    </>
  )
}

export default App
