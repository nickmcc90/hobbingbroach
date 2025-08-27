import React from 'react'

export default function TypeBarCard(props) {

  const { item, width, height, length, typebar } = props


  return (
    <div id='height maker' class=''>
      <div id='table holder' class='flex flex-col items-center w-[83px]'>
        <div id='number and type of bar listed' class='flex justify-center w-full p-2 border-r-4 border-b-4 font-bold'>{item}</div>
        <div id='bar width derived' class='flex justify-center w-full p-2 border-r-4 border-b-4'>{width}"</div>
        <div id='bar height derived' class='flex justify-center w-full p-2 border-r-4 border-b-4'>{height}"</div>
        <div id='bar length derived' class='flex justify-center w-full p-2 border-r-4 border-b-4'>{length}"</div>
      </div>

    </div>
  )
}
