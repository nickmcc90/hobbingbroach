import React from 'react'
import { LU45BARS } from '../utils/LU45bars'

export default function TypeBarCardLU45(props) {

  const { value, number, length, width, height, goes_with, language } = props

  const { colors } = LU45BARS

  console.log(goes_with)

  return (
    <div class='flex flex-col items-center gap-3'>
      <div class='h-[24px] flex items-center justify-center border-b-2'>
        <div class={`${colors[`${value}`+`color`]} h-[18px] px-2 flex items-center text-white font-semibold`}>{number}</div>
      </div>
      <div>{length}"</div>
      <div>{width}"</div>
      <div>{height}"</div>
      <div class='h-[300px] flex flex-col items-center'>
        {goes_with.map(item => (
          <div class='mb-[-8px]'>{item}</div>
        ))}
      </div>
      <div class='h-[300px] flex flex-col items-center'>
        {language.map(key => (
          <div class='mb-[-8px]'>{key}</div>
        ))}
      </div>
    </div>
  )
}
