import React from 'react'

export default function ColorArborSheet() {


  const used_keys = [0.251, 0.313, 0.376, 0.501, 0.626, 0.751, 0.876, 1.001, 1.125]


  return (
    <div class='bg-slate-400 w-[901px] h-[691px] flex flex-col gap-4 justify-center items-center border-4'>
      <div id='main title' class='text-5xl font-semibold underline'>
        Arbor Keyway-to-Color Organization
      </div>
      <div id='titles' class='flex gap-8 justify-center items-center text-3xl mr-[80px] underline'>
        <div>Keyway of Arbor</div>
        <div>Color</div>
        <div>Color pastel name</div>
        <div>Amount</div>
      </div>
      <div id='data' class='flex gap-[70px] justify-center items-center'>
        <div id='keyway denote' class='flex flex-col gap-4 text-3xl'>
          {used_keys.map((item) => (
            <div>{item}"</div>
          ))}
        </div>
        <div id='actual color' class='flex flex-col gap-[22px]'>
          <div class='bg-amber-500 h-[30px] w-[30px] text-[20px] '></div>
          <div class='bg-purple-300 h-[30px] w-[30px] text-[20px] '></div>
          <div class='bg-[#F08080] h-[30px] w-[30px] text-[20px] '></div>
          <div class='bg-green-300 h-[30px] w-[30px] text-[20px] '></div>
          <div class='bg-sky-200 h-[30px] w-[30px] text-[20px] '></div>
          <div class='bg-pink-500 h-[30px] w-[30px] text-[20px] '></div>
          <div class='bg-red-500 h-[30px] w-[30px] text-[20px] '></div>
          <div class='bg-teal-400 h-[30px] w-[30px] text-[20px] '></div>
          <div class='bg-yellow-300 h-[30px] w-[30px] text-[20px] '></div>
        </div>
        <div id='color name denote container' class='flex flex-col gap-4 text-3xl'>
          <div class=''>Amber</div>
          <div class=''>Light purple</div>
          <div class=''>Biege/tan "Rose"</div>
          <div class=''>Light green</div>
          <div class=''>Light blue "Sage"</div>
          <div class=''>Pink "Violet"</div>
          <div class=''>Bright Red</div>
          <div class=''>Turquiose</div>
          <div class=''>Yellow</div>
        </div>
        <div id='amount of arbors container' class='flex flex-col gap-4 text-3xl'>
          <div class=''>3</div>
          <div class=''>2</div>
          <div class=''>18</div>
          <div class=''>50</div>
          <div class=''>19</div>
          <div class=''>19</div>
          <div class=''>15</div>
          <div class=''>14</div>
          <div class=''>6</div>
        </div>
      </div>
    </div>
  )
}
