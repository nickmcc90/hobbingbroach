import React from 'react'
import TypeBarCard from './typebarcard'
import { BARS } from '../utils/bars.js'

export default function TypeBarGenerator() {

  const { tiers } = BARS

  console.log(Object.keys(tiers))

  return (
    <div class='w-full bg-green-300 p-5 flex flex-col items-center gap-5'>
              {/* We need a table for each letter type. For each letter type that spawns, we need the bars of that type to spawn underneath.
              That's why everything is inside this "Object.keys" jsx term, because everything happens after each instance of a type table spawning. */}
      {Object.keys(tiers).filter((_, i) => i % 2 === 0).map((key) => (
            <div id='each table generated based on bartype' class='flex flex-col'>
              <div id="vertical title half" class="text-4xl font-extrabold flex justify-center bg-black text-white h-100% w-[750px] py-4">
                Type "{key}" Bar
              </div>
              <div id='vertical data half' class='flex'>
                <div id='always generate i.e. the info column'>
                  <div id='vertical container' class='flex flex-col'>
                    <div class='p-2 border-l-4 border-r-4 border-b-4 font-bold'>Bar Attributes (inches)</div>
                    <div class='p-2 border-l-4 border-r-4 border-b-4'>Bar total width:</div>
                    <div class='p-2 border-l-4 border-r-4 border-b-4'>Bar cutting height:</div>
                    <div class='p-2 border-l-4 border-r-4 border-b-4'>Bar length:</div>
                  </div>
                </div>
                <div id='conditionally generated data w variable size'>
                  {Object.keys(BARS).filter(item => item.includes("BAR")).filter(item => BARS[item]?.typebar === String(key)).map((item) => (
                      <>
                        <TypeBarCard item={item} width={BARS[item].bar_width} height={BARS[item].bar_height} length={BARS[item].bar_length} typebar={BARS[item].typebar} />
                      </>
                    ))
                  }
                </div>
              </div>
            </div>
          )
        )
      }

    </div>
  )
}



/*

      <div id='actual data container' class='flex flex-col items-center w-[800px]'>
        {Object.keys(BARS).filter(key => key.includes("BAR")).map((key) => (
          <>
            <TypeBarCard key={key} width={BARS[key].bar_width} height={BARS[key].bar_height} length={BARS[key].bar_length} typebar={BARS[key].typebar} />
          </>
        ))}
      </div>

*/