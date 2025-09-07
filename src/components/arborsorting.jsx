import React from 'react'
import { ARBORS } from '../utils/arbors.js'
import { BARS } from '../utils/bars.js'

export default function ArborSorting() {

  // console.log(BARS.tiers)
  const { tiers } = BARS
  const tier_letters = Object.keys(tiers).filter((n, i) => i % 2 === 0)
  console.log(tier_letters)


  //organizing arbors based on mass variables
  let light = 0;
  let medium = 0;
  let heavy = 0;

  console.log(ARBORS)

  // what is 009% and what is 030% ? M08FRG seems to be both. maybe just 030%


  return (
    <div class='bg-amber-400'>
      <div id='table container' class='flex flex-col gap-2 border-4 items-center'>
        <div id='title' class="text-4xl font-extrabold flex justify-center bg-black text-white h-100% w-[1300px] py-4">
          Arbor Organization
        </div>
        <div class='flex gap-2'>
          <div>Light purple: Under 10 in^3</div>
          <div>|</div>
          <div>Medium purple: Betweem 10 and 20 in^3</div>
          <div>|</div>
          <div>Dark purple: Above 20 in^3</div>
        </div>
        <div id='column titles' class='flex justify-between items-center w-[650px]'>
          <div>Keyway</div>
          <div>Arbor % grouped by mass</div>
        </div>
        <div id='generated columns' class='flex flex-col gap-8'>
          {tier_letters.map((key) => (
            <div id='keyway and data grouping' class='flex gap-2'>
              <div id='keyway width grouping' class=''>
                {tiers[key]}
              </div>
              <div id='arbor grouping' class='flex flex-col w-[600px]'>
                <div id='light mass' class='bg-purple-200 flex flex-wrap'>
                  {Object.keys(ARBORS).filter((item) => (tiers[key] === ARBORS[item].most_likely_built_for)).map((value) => (
                    <div class='break-words'>{ARBORS[value].dia_mesh_w_part * ARBORS[value].dia_mesh_w_part_length > 0 && ARBORS[value].dia_mesh_w_part * ARBORS[value].dia_mesh_w_part_length < 10 ? ARBORS[value].extra_info : ""}</div>
                  ))}
                </div>
                <div id='medium mass' class='bg-purple-400 flex text-wrap'>
                  {Object.keys(ARBORS).filter((item) => (tiers[key] === ARBORS[item].most_likely_built_for)).map((value) => (
                    <div class='break-words'>{ARBORS[value].dia_mesh_w_part * ARBORS[value].dia_mesh_w_part_length >= 10 && ARBORS[value].dia_mesh_w_part * ARBORS[value].dia_mesh_w_part_length < 20 ? ARBORS[value].extra_info : ""}</div>
                  ))}
                </div>
                <div id='heavy mass' class='bg-purple-600 flex text-wrap'>
                  {Object.keys(ARBORS).filter((item) => (tiers[key] === ARBORS[item].most_likely_built_for)).map((value) => (
                    <div class='break-words'>{ARBORS[value].dia_mesh_w_part * ARBORS[value].dia_mesh_w_part_length >= 20 ? ARBORS[value].extra_info : ""}</div>
                  ))}
                </div>
              </div>
            </div>
          ))
          }
        </div>
      </div>
    </div>
  )
}

/* 

              {Object.keys(ARBORS).filter((item) => (tiers[key] === ARBORS[item].most_likely_built_for)).map((value) => (
                <div class='flex flex-col'>
                  <div class='bg-purple-200 flex text-wrap'>{ARBORS[value].dia_mesh_w_part * ARBORS[value].dia_mesh_w_part_length > 0 && ARBORS[value].dia_mesh_w_part * ARBORS[value].dia_mesh_w_part_length < 10 ? <div class=''>{ARBORS[value].extra_info}</div> : ""}</div>
                  <div class='bg-purple-400 flex text-wrap'>{ARBORS[value].dia_mesh_w_part * ARBORS[value].dia_mesh_w_part_length >= 10 && ARBORS[value].dia_mesh_w_part * ARBORS[value].dia_mesh_w_part_length < 20 ? <div class=''>{ARBORS[value].extra_info}</div> : ""}</div>
                  <div class='bg-purple-600 flex text-wrap'>{ARBORS[value].dia_mesh_w_part * ARBORS[value].dia_mesh_w_part_length >= 20 ? <div class=''>{ARBORS[value].extra_info}</div> : ""}</div>
                </div>
              ))}


               <div class='bg-purple-200 flex text-wrap'>{ARBORS[value].dia_mesh_w_part * ARBORS[value].dia_mesh_w_part_length > 0 && ARBORS[value].dia_mesh_w_part * ARBORS[value].dia_mesh_w_part_length < 10 ? <div class=''>{ARBORS[value].extra_info}</div> : ""}</div>
                <div class='bg-purple-400 flex text-wrap'>{ARBORS[value].dia_mesh_w_part * ARBORS[value].dia_mesh_w_part_length >= 10 && ARBORS[value].dia_mesh_w_part * ARBORS[value].dia_mesh_w_part_length < 20 ? <div class=''>{ARBORS[value].extra_info}</div> : ""}</div>
                <div class='bg-purple-600 flex text-wrap'>{ARBORS[value].dia_mesh_w_part * ARBORS[value].dia_mesh_w_part_length >= 20 ? <div class=''>{ARBORS[value].extra_info}</div> : ""}</div>
              

*/
