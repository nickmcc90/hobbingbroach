import React from 'react'
import { ITEMS } from "../utils/items.js"


export default function TableCard(props) {

  const { partnum, broachbar, arbor, plate, puller, shims, extra } = props

  return (
    <div>

      <div id="table holder" class='flex flex-col'>
        <div id="title"></div>
        <div id="part container"></div>
        <div id="broach container"></div>
        <div id="arbor container"></div>
        <div id='plate container'></div>
        <div id='puller container'></div>
        <div id='shims container'></div>
        <div id='extra container'></div>
      </div>

    </div>
  )
}