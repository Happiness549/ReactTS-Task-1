
import { useState } from 'react';
import './App.css'
import { Navbar } from './components/Navbar/Navbar'
import { Hero } from './components/Hero/Hero'
import {Text} from './components/Text/Text'
import { Content } from './components/Content/Content'
import {Footer} from './components/Footer/Footer'
import Button from './components/Button/Button'



function App() {
  

  return (
    <div className='app'>
      <Navbar />
      <Hero />
      <Content/>
      <Text />
      <Button text={'submit'}/>
      <Footer />
    </div>
  )
}

export default App
