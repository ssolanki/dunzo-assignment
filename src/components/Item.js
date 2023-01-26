import React from 'react'

import "./components.css";

export default function Item({data}) {
    console.log(data)
  return (
    <div className='item' key={data.id}>
        <div className='image-holder'>
            <img src={data.image} />
        </div>
        <div className='item-details'>
            <h3>{data.title}</h3>
        </div>
    </div>
  )
}
