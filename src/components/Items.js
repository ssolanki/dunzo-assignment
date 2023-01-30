import React from 'react'
import Item from "./Item"

export default function Items({data,cartItems,setcartItems,handleAdd,handleRemove,check,get_length}) {
    console.log(data)

    // return <h1>Santhosh</h1>
  return (
    data.map(function (item) {
        return (
            <Item key={item.id} data={item} check={check} get_length={get_length} handleAdd={handleAdd} handleRemove={handleRemove} cartItems={cartItems} setcartItems={setcartItems}/>
        )
    })
  )
}
