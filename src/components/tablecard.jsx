import React from 'react'
import { ITEMS } from "../utils/items.js"
import { BARS } from '../utils/bars.js'

// This is a component works together with setuptablemult.jsx
// This component is the template for one single setup sheete

export default function TableCard(props) {

  // grabbing specific setup info from one part number
  const { partnum, broachbar, arbor, plate, puller, shims, extra } = props

  // making an array for the labeled bars in the shop from the BARS object
  const labeledBars = Object.keys(BARS).filter(item => item.includes("BAR#"))

  // making an array for the extra language listed on each labeled bar from the BARS object.
  const language = labeledBars.map((item) => BARS[item].extra_language)

  // storing in a variable a labeled bar if the current specific part number's broach bar is within the extra language of an existing labeled bar.
  const confirmed = language.filter((item) => broachbar === item).map((item) => labeledBars[language.indexOf(item)])

  console.log(confirmed)

  return (
    <div id='height maker' class="h-[850px]">

      <div id="table holder" class='flex flex-col'>
        <div id="title" class="text-4xl font-extrabold flex justify-center bg-black text-white h-100% w-[450px] py-4">
          HORIZONTAL BROACH
        </div>
        <div id="part container" class="flex justify-between p-2 border-l-4 border-r-4 border-b-4">
          <div>Part Number:</div>
          <div>{partnum}</div>
        </div>
        <div id="broach container" class="flex justify-between p-2 border-l-4 border-r-4 border-b-4">
          <div>Broaching bar:</div>
          <div class='flex gap-1'>
            {broachbar} {confirmed.length === 0 ? ("-") : (<div>{"->"} also known as {confirmed}</div>)}
          </div>
        </div>
        <div id="arbor container" class="flex justify-between p-2 border-l-4 border-r-4 border-b-4">
          <div>Arbor:</div>
          <div>Item derived arbor</div>
        </div>
        <div id='plate container' class="flex justify-between p-2 border-l-4 border-r-4 border-b-4">
          <div>Adapter Plate:</div>
          <div>Item derived adapter</div>
        </div>
        <div id='puller container' class="flex justify-between p-2 border-l-4 border-r-4 border-b-4">
          <div>Puller:</div>
          <div>Item derived puller</div>
        </div>
        <div id='shims container' class="flex justify-between p-2 border-l-4 border-r-4 border-b-4">
          <div>Shim situation:</div>
          <div id='shim situation container' class='flex'>

          </div>
        </div>
        <div id='extra container' class="flex justify-between p-2 border-l-4 border-r-4 border-b-4">
          <div>Extra Info:</div>
          <div id='extra info details container'>
            
          </div>
        </div>
        <div id='approval container to make bottom corner of table' class='flex justify-end w-[450px]'>
          <div class='flex flex-col w-[300px]'>
            <div id='form container' class='flex justify-between px-2 border-l-4 border-r-4 border-b-4'>
              <div>Form Number:</div>
              <div id='num container' class='flex justify-between w-[100px]'>
                <div id='num sign moved to left'>#</div>
                <div id='invisible div'></div>
              </div>
            </div>
            <div id='date container' class='flex justify-between px-2 border-l-4 border-r-4 border-b-4'>
              <div>Date Last Modified:</div>
              <div>{/* put a date function in here for today's date */}</div>
            </div>
            <div id='checker container' class='flex justify-between px-2 border-l-4 border-r-4 border-b-4'>
              <div>Approved By:</div>
            </div>
          </div>
        </div>
      </div>

      {/* key placement and greasing the chuck for chris's chuck */}

    </div>
  )
}