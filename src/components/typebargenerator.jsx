import React from 'react'
import TypeBarCard from './typebarcard'
import { BARS } from '../utils/bars.js'

export default function TypeBarGenerator() {

  const { tiers } = BARS

  // console.log(Object.keys(tiers))

  return (
    <div class='w-[900px] bg-green-300 p-6 flex flex-col items-center gap-8'>
              {/* We need a table for each letter type. For each letter type that spawns, we need the bars of that type to spawn underneath.
              That's why everything is inside this "Object.keys" jsx term, because everything happens after each instance of a type table spawning. */}
      {Object.keys(tiers).filter((_, i) => i % 2 === 0).map((key) => (
            <div id='each table generated based on bartype' class='flex flex-col'>
              <div id="vertical title half" class="text-4xl font-extrabold flex justify-center bg-black text-white h-100% w-[900px] py-4">
                Type "{key}" Bar - (Cutting Width of {tiers[key]}")
              </div>
              <div id='vertical data half' class='flex'>
                <div id='always generated i.e. the info column'>
                  <div id='vertical container' class='flex flex-col'>
                    <div class='p-2 border-l-4 border-r-4 border-b-4 font-bold'>Stats</div>
                    <div class='p-2 border-l-4 border-r-4 border-b-4'>Width:</div>
                    <div class='p-2 border-l-4 border-r-4 border-b-4'>Height:</div>
                    <div class='p-2 border-l-4 border-r-4 border-b-4'>Length:</div>
                  </div>
                </div>
                {/* Below here -> These need to be class: flex. This jsx bracket term should output a number of 
                columns based on the number of each type of broach bar data. It needs to be flex because the columns
                that are produced from this line need to be packed together in a flex box horizontally.*/}
                <div id='conditionally generated vertical data column by columns w variable size' class='flex'>
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