import React from 'react'
import { BARS } from "../utils/bars.js"

export default function BarCard() {

  const { tiers, colors } = BARS;
  //console.log(Object.values(tiers).filter((_, i) => i % 2 === 0 ))

  return (
    <div id="This is the main container" class="h-screen w-full items-center p-10 bg-blue-300">

      <div class='w-350px flex flex-col items-center'>
        <div id="This is the title of the table" class="text-4xl font-extrabold flex justify-center bg-black text-white h-100% w-[450px] py-4">
          All Bars
        </div>
        <div id="This is the column headers" class="flex justify-center gap-[50px] py-4 font-medium bg-gray-500 text-white w-[450px] border-black border-4">
          <div class="">Bar Type</div>
          <div class="">Bar Keyway Width</div>
          <div class="">Spray Color</div>
        </div>
        <div id="This is the table of data" class="flex justify-center gap-[110px] border-l-4 border-r-4 border-b-4 px-[58px]">
          <div class='flex flex-col py-2 items-center'>
            {Object.keys(tiers).filter((_, i) => i % 2 === 0 ).map((key) => (
              <div key={key}>
                {key}
              </div>
            ))}
          </div>
          <div class='flex flex-col py-2 items-center'>
            {Object.keys(tiers).filter((_, i) => i % 2 === 0 ).map((key) => (
              <div key={key}>
                {tiers[key]}{'"'}
              </div>
            ))}
          </div>
          <div class='flex flex-col py-2 items-center'>
            <div>
              {Object.keys(colors).map((key) => (
                <div key={key}>
                  {colors[key]}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}