import { useState } from 'react'
import BarCard from './components/barcard.jsx'
import SetupTableMult from './components/setuptablemult.jsx'
import './App.css'
import TypeBarGenerator from './components/typebargenerator.jsx'
import ArborSorting from './components/arborsorting.jsx'

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
        {/* <div class='w-[901px]'>
          <div class='w-full text-5xl font-black bg-emerald-400 h-[58px] flex justify-center items-center py-2'>
            Cutting Bars In Brown Wooden Area
          </div>
          <TypeBarGenerator />
        </div> */}
        {<ArborSorting />}
        {/* <SetupTableMult /> */}
      </div>
    </>
  )
}

export default App
