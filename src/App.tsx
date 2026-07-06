import { useState } from 'react'
import './App.css'
import { Navbar } from './components/Navbar/Navbar'
import {Text} from './components/Text/Text'
import { Content } from './components/Content/Content'
import {Footer} from './components/Footer/Footer'

function App() {
  

  return (
    <div className='app'>
      <Navbar />
      <Content/>
      <Text />
      <Footer />
    </div>
  )
}

export default App
