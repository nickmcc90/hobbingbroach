import React from 'react'
import TypeBarCardLU45 from './typebarcardLU45'
import { LU45BARS } from '../utils/LU45bars.js'

export default function TypeBarGeneratorLU45() {

  const { tiers, colors } = LU45BARS


  return (
    <div>
      <div id='table separator' class='bg-indigo-100 w-[901px] flex flex-col text-2xl'>
        {Object.keys(tiers).filter((n, i) => i % 2 === 0).map((value) => (
          <div id='title and data separator' class='flex flex-col items-center border-2 h-[692px]'>
            <div id='color card and cutting width' class='flex font-extrabold gap-2 h-[58px] items-center text-3xl border-b-2'>
              <div class='flex items-center gap-2'>
                <div>color:</div>
                <div class={`${colors[`${value}`+`color`]} w-[20px] h-[20px] mt-1`}></div>
              </div>
              <div>|</div>
              <div>{tiers[value]}" Cutting Width</div>
            </div>
            <div id='data' class='flex w-[901px] justify-between p-2'>
              <div id='constant data' class='flex flex-col gap-3'>
                <div class='font-semibold border-b-2'>Attribs</div>
                <div>Length:</div>
                <div>Bar Width:</div>
                <div>Height:</div>
                <div class='h-[300px]'>Goes With:</div>
                <div>Engraved:</div>
              </div>
              <div id='generated data' class='flex gap-5'>
                {Object.keys(LU45BARS).filter((n, i) => tiers[value] === LU45BARS[n].cutting_width ).map((key) => (
                  <TypeBarCardLU45 value={value}
                  number={LU45BARS[key].number} 
                  length={LU45BARS[key].bar_length} 
                  width={LU45BARS[key].bar_width} height={LU45BARS[key].bar_height} 
                  goes_with ={LU45BARS[key].goes_with} language={LU45BARS[key].extra_language} />
                ))}
              </div>
            </div>
          </div>
        ))
        }
      </div>
    </div>
  )
}

