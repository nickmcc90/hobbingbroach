import { useState } from 'react'
import BarCard from './components/barcard.jsx'
import SetupTableMult from './components/setuptablemult.jsx'
import './App.css'
import TypeBarGenerator from './components/typebargenerator.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div class='flex flex-col items-center w-full'>

        {/* <div class='text-5xl p-7'>
          Hobbing cell data underway...
        </div>
        <div class='text-green-600 p-7'>
          Just gotta put the data into a js file
        </div> */}
        {/* <BarCard /> */}
        <TypeBarGenerator />
        {/* <SetupTableMult /> */}
      </div>
    </>
  )
}

export default App
