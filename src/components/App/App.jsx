import { useState } from 'react'
import './App.css'
import Board from '../Board'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Header/> */}
      <Board/>
      {/* <Footer/> */}
    </>
  )
}

