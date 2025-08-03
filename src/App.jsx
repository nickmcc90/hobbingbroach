import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div class='flex flex-col items-center p-7 gap-10'>
        <div class='text-5xl'>
          Hobbing cell data underway...
        </div>
        <div class='text-green-600'>
          Just gotta put the data into a js file
        </div>
      </div>
    </>
  )
}

export default App
