import React from 'react'
import { ITEMS } from "../utils/items.js"
import TableCard from "./tablecard.jsx"

// This component works together with tablecard.jsx
// This component generates the setup sheets for broaching data

export default function SetupTableMult() {

  const partNumbers = Object.keys(ITEMS)

  // console.log(Object.keys(ITEMS).length);

  // console.log(partNumbers)

  // Below counts how many more setup infos I need to record the drawing data for
  const count = Object.values(ITEMS)
  .filter(item => item.part_info?.bore_dia === "int")
  .length;

  // console.log(count + " left to go");

  return (
    <div id="This is the main container" class="w-full p-5 bg-blue-200">
      
      <div id='Whole data container' class="flex flex-col items-center">
        <div id='Whole data container' class="flex flex-col w-[600px] items-center">
          {partNumbers.map((part) => (
              <TableCard 
                partnum={part} broachbar={ITEMS[part].bar}
                arbor={ITEMS[part].arbor}
                shims={ITEMS[part].shim_data}
                extra={ITEMS[part].extra_info}
              />
            ))
          }
        </div>
      </div>

    </div>
  )
}

/* 

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

*/