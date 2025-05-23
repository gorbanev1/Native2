import { useState } from 'react'
import {User} from "./l1/06-callbacks";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <User></User>
    </>
  )
}

export default App
