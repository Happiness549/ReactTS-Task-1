import { useState } from 'react'
import './App.css'
import { Navbar } from './components/Navbar/Navbar'
import {Text} from './components/Text/Text'
import { Content } from './components/Content/Content'

function App() {
  

  return (
    <>
      <Navbar />
      <Content/>
      <Text />
    </>
  )
}

export default App
