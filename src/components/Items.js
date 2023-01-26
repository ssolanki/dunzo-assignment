import React from 'react'
import Item from "./Item"

export default function Items({data}) {
    console.log(data)

    // return <h1>Santhosh</h1>
  return (
    data.map(function (item) {
        return (
            <Item data={item}/>
        )
    })
  )
}
