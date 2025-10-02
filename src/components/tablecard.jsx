import React from 'react'
import { ITEMS } from "../utils/items.js"
import { BARS } from '../utils/bars.js'
import { ARBORS } from '../utils/arbors.js'
import ShimsCard from './shimscard.jsx'

// This is a component works together with setuptablemult.jsx
// This component is the template for one single setup sheete

export default function TableCard(props) {

  ////logic for linking the labeledbars to what was in the setup sheet for a specific bar
  // grabbing specific setup info from one part number
  const { partnum, broachbar, arbor, shims, extra } = props

  // making an array for the labeled bars in the shop from the BARS object
  const labeledBars = Object.keys(BARS).filter(item => item.includes("BAR#"))

  // making an array for the extra language listed on each labeled bar from the BARS object.
  const language = labeledBars.map((item) => BARS[item].extra_language)

  // storing in a variable a labeled bar if the current specific part number's broach bar is within the extra language of an existing labeled bar.
  const confirmed = language.filter((item) => broachbar === item).map((item) => labeledBars[language.indexOf(item)])

  // console.log(confirmed)

  ////logic for recommending a bar type group if there is not any linkage between old setup sheet and labeled bars
  //obtaining the keyway width from the part number
  const key_width = ITEMS[partnum].part_info.keyway_width
  // console.log(key_width)

  //defining the tiers of letters from BARS.js
  const tier_list = BARS.tiers

  //taking this key_width and using it to grab the letter associated from it within the tier_list
  const rec_letter = Object.keys(tier_list).filter((key) => tier_list[key] === key_width)


  ////logic for getting the current day
  const today = new Date();

  const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are 0-based
  const day = String(today.getDate()).padStart(2, '0');
  const year = today.getFullYear();

  const formattedDate = `${month}-${day}-${year}`;
  // console.log(formattedDate); // Example: "08-29-2025"


  //logic for getting the adapter plate per specific arbor
  let plate = ""
  let output = ARBORS[arbor]?.dia_mesh_w_output ? (ARBORS[arbor].dia_mesh_w_output) : ("none")
  if (output) {
    if (output > 3.80 && output < 4.1) {
      plate = "No plate needed"
    } else if (output > 3.30 && output < 3.7) {
      plate = "AD 3.5-1"
    } else if (output > 2.85 && output < 3.2) {
      plate = "AD 3.0-2 or AD 3.0-3"
    } else if (output > 2.63 && output < 2.84) {
      plate = "AD 2.75-1"
    } else if (output > 2.3 && output < 2.62) {
      plate = "AD 2.5-1"
    } else if (output > 1.8 && output < 2.2) {
      plate = "AD 2.0-1"
    } else if (output > 1.69 && output < 1.8) {
      plate = "AD 1.75-1"
    } else if (output > 0 && output < 1.69) {
      plate = "AD 1.6-1"
    }
  } else {
    plate = "none"
  }



  return (
    <div id='height maker' class="h-[917px]">

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
            {broachbar} {confirmed.length === 0 ? (<div>{"->"} recommended bar type is {rec_letter}</div>) : (<div>{"->"} also known as {confirmed}</div>)}
          </div>
        </div>
        <div id="arbor container" class="flex justify-between p-2 border-l-4 border-r-4 border-b-4">
          <div>Arbor:</div>
          <div>{arbor === '' ? <div>---</div> : arbor}</div>
        </div>
        <div id='plate container' class="flex justify-between p-2 border-l-4 border-r-4 border-b-4">
          <div>Adapter Plate:</div>
          <div>{plate}{console.log(plate)}</div>
        </div>
        <div id='puller container' class="flex text-[12px] items-center justify-between p-2 border-l-4 border-r-4 border-b-4">
          <div class='text-[16px]'>Puller:</div>
          <div>Match the color dot on bar end to a similiar color puller.</div>
        </div>
        <div id='shims container' class="flex justify-between p-2 border-l-4 border-r-4 border-b-4">
          <div>Shims used in previous setups:</div>
          <div id='shim situation container' class='flex'>
          {shims.shims_used.length === 0 ? <div>---</div> : <ShimsCard shim_array={shims.shims_used} />}
          {/* {console.log(shims.shims_used)} */}
          </div>
        </div>
        <div id='extra container' class="flex justify-between h-[140px] p-2 border-l-4 border-r-4 border-b-4">
          <div>Extra Info + Shims Calcs:</div>
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
              <div>{formattedDate}</div>
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