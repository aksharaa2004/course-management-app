import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import InsertCourse from './Components/InsertCourse'
import View from './Components/View'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <InsertCourse/>
      <View/>
    </>
  )
}

export default App
