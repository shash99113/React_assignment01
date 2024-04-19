import { useState } from 'react'
import './App.css'
import { Card,Card2,Card3 } from './components/Card/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Card/>
      <Card2/>
      <Card3/>
      
    </div>
  )
}

export default App
