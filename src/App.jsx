import { useState } from 'react'
import BarCard from './components/barcard.jsx'
import SetupTableMult from './components/setuptablemult.jsx'
import './App.css'
import TypeBarGenerator from './components/typebargenerator.jsx'
import ArborSorting from './components/arborsorting.jsx'
import TypeBarGeneratorLU45 from './components/typebargeneratorLU45.jsx'
import BarsOutForServiceLU45 from './components/barsoutforserviceLU45.jsx'
import ColorArborSheet from './components/colorarborsheet.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div class='flex flex-col items-center w-full'>

        {/* This was a preliminary loading page */}
        {/* <div class='text-5xl p-7'>
          Hobbing cell data underway...
        </div>
        <div class='text-green-600 p-7'>
          Just gotta put the data into a js file
        </div> */}

        {/* This lists the bar types in hobbing and what cutting width they have. Very basic overview */}
        {/* <BarCard /> */}
        
        {/* This is the bars.js data within tables that fit nicely on a normal landscape paper*/}
        {/* <div class='w-[901px]'>
          <div class='w-full text-5xl font-black bg-emerald-400 h-[58px] flex justify-center items-center py-2'>
            Cutting Bars In Brown Wooden Area
          </div>
          <TypeBarGenerator />
        </div> */}

        {/* Page for me to organize arbors based on keyway and mass */}
        {/* {<ArborSorting />} */}

        {/* This sheet was to help operators understand the color system for the arbors while I was setting tables up */}
        <ColorArborSheet />

        {/* Setup sheets that bring all of the data together for the operators */}
        <SetupTableMult />

        {/* Get the 602079-03 part done */}

        {/* LU45bars.js data within tables that fit nicely on a normal landscape paper */}
        {/* Paper length: 901px | Paper height: 691px */}
        {/* <TypeBarGeneratorLU45 /> */}

        {/* Curated page for to tell when bars are out for service */}
        {/* <BarsOutForServiceLU45 /> */}
      </div>
    </>
  )
}

export default App

// 0. Grab the data of the adapters and pullers
// Tasks left to do after all data collection is done.
// 1. Make setup sheets for the arbors relating to their colors.
// 2. Maybe include stats about the parts they go with
// 3. We are now in a position to assemble the setup sheets.