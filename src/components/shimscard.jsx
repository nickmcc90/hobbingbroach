import React from 'react'

export default function ShimsCard(props) {

  const { shim_array } = props
  console.log(shim_array)

  return (
  <div class='flex gap-2 justify-center'>
    {
      shim_array.map(key => (
        <div key={key}>
          {key}
        </div>
      ))
    }
  </div>
  )
}
