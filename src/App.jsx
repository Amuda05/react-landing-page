import { useState } from 'react'
import './App.css'
import  Nav from './component/Nav'
import Header from './Header'
import Section from './section'
import Footer from './Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Nav/>
  <Header/>
  <Section/>
  <Footer/>
       </>
  )
}

export default App