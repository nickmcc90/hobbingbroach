import React from 'react'
import { ITEMS } from "../utils/items.js"
import TableCard from "./tablecard.jsx"

export default function SetupTableMult() {

  const partNumbers = Object.keys(ITEMS)

  return (
    <div id="This is the main container" class="w-full items-center p-5 bg-blue-200">
      
      <div id='Whole data container' class="flex flex-col">
        {partNumbers.map((part) => {
          <TableCard 
            partnum={part} broachbar={ITEMS[part].bar}
            arbor={ITEMS[part].arbor} plate={ITEMS[part].adapter}
            puller={ITEMS[part].puller} shims={ITEMS[part].shim_data}
            extra={ITEMS[part].extra_info}
          />
        })

        }
      </div>

    </div>
  )
}