import React from 'react'
import { ARBORS } from '../utils/arbors.js'
import { BARS } from '../utils/bars.js'

export default function ArborSorting() {

  // console.log(BARS.tiers)
  const { tiers } = BARS
  const tier_letters = Object.keys(tiers).filter((n, i) => i % 2 === 0)
  // console.log(tier_letters)


  //organizing arbors based on mass variables
  let light = 0;
  let medium = 0;
  let heavy = 0;

  // console.log(ARBORS)

  // what is 009% and what is 030% ? M08FRG seems to be both. maybe just 030%


  return (
    <div class='bg-slate-500'>
      <div id='table container' class='flex flex-col gap-2 border-4 items-center'>
        <div id='title' class="text-4xl font-extrabold flex justify-center bg-black text-white h-100% w-[1300px] py-4">
          Arbor Organization
        </div>
        <div class='flex gap-2'>
          <div class='bg-purple-200'>Light purple: Bores within 0-1 inches</div>
          <div>|</div>
          <div class='bg-purple-400'>Medium purple: Bores within 1-2 inches</div>
          <div>|</div>
          <div class='bg-purple-600'>Dark purple: Bores within 2-3 inches</div>
          <div>|</div>
          <div class='bg-purple-800'>Darkest purple: Bores within 3+ inches</div>
        </div>
        <div id='column titles' class='flex justify-between items-center w-[650px]'>
          <div>Keyway</div>
          <div>Arbor % grouped by mass</div>
        </div>
        <div id='generated columns' class='flex flex-col ml-[90px] gap-8'>
          {tier_letters.map((key) => (
            <div id='keyway and data grouping' class='flex gap-2'>
              <div id='keyway width grouping' class=''>
                {tiers[key]}
              </div>
              <div id='arbor grouping' class='flex flex-col w-[700px]'>
                <div id='0-1 bores' class='bg-purple-200 flex flex-wrap'>
                  {Object.keys(ARBORS).filter((item) => (tiers[key] === ARBORS[item].most_likely_built_for)).map((value) => (
                    <div class='break-words'>{ARBORS[value].dia_mesh_w_part < 1 ? ARBORS[value].extra_info : ""}</div>
                  ))}
                </div>
                <div id='1-2 bores' class='bg-purple-400 flex flex-wrap'>
                  {Object.keys(ARBORS).filter((item) => (tiers[key] === ARBORS[item].most_likely_built_for)).map((value) => (
                    <div class='break-words'>{ARBORS[value].dia_mesh_w_part >= 1 && ARBORS[value].dia_mesh_w_part < 2 ? ARBORS[value].extra_info : ""}</div>
                  ))}
                </div>
                <div id='2-3 bores' class='bg-purple-600 flex flex-wrap'>
                  {Object.keys(ARBORS).filter((item) => (tiers[key] === ARBORS[item].most_likely_built_for)).map((value) => (
                    <div class='break-words'>{ARBORS[value].dia_mesh_w_part >= 2 && ARBORS[value].dia_mesh_w_part < 3 ? ARBORS[value].extra_info : ""}</div>
                  ))}
                </div>
                <div id='3 and beyond' class='bg-purple-800 flex flex-wrap'>
                  {Object.keys(ARBORS).filter((item) => (tiers[key] === ARBORS[item].most_likely_built_for)).map((value) => (
                    <div class='break-words'>{ARBORS[value].dia_mesh_w_part >= 3 ? ARBORS[value].extra_info : ""}</div>
                  ))}
                </div>
              </div>
            </div>
          ))
          }
        </div>
      </div>
      <div id='absolute positioned color identifiers' class='absolute top-[265px] left-[195px] 
      flex flex-col gap-[45px]'>
        <div class='bg-amber-500 h-[10px] w-[10px] text-[20px] relative'><div class='absolute right-[40px] bottom-[-10px]'>Amber</div></div>
        <div class='bg-purple-300 h-[10px] w-[10px] mt-[25px] text-[20px] relative'><div class='absolute right-[40px] bottom-[-25px]'>Light purple</div></div>
        <div class='bg-[#F08080] h-[10px] w-[10px] mt-[2px] text-[20px] relative'><div class='absolute right-[40px] bottom-[-37px]'>Biege/tan "Rose"</div></div>
        <div class='bg-green-300 h-[10px] w-[10px] mt-[105px] text-[20px] relative'><div class='absolute right-[40px] bottom-[-25px]'>Light green</div></div>
        <div class='bg-sky-200 h-[10px] w-[10px] mt-[99px] text-[20px] relative'><div class='absolute right-[40px] bottom-[-40px]'>Light blue "Sage"</div></div>
        <div class='bg-pink-500 h-[10px] w-[10px] mt-[47px] text-[20px] relative'><div class='absolute right-[40px] bottom-[-25px]'>Pink "Violet"</div></div>
        <div class='bg-red-400 h-[10px] w-[10px] mt-[47px] text-[20px] relative'><div class='absolute right-[40px] bottom-[-25px]'>Bright Red</div></div>
        <div class='bg-teal-400 h-[10px] w-[10px] mt-[27px] text-[20px] relative'><div class='absolute right-[40px] bottom-[-10px]'>Turquiose</div></div>
        <div class='bg-yellow-300 h-[10px] w-[10px] mt-[27px] text-[20px] relative'><div class='absolute right-[40px] bottom-[-10px]'>Yellow</div></div>
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
