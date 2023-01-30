import React from 'react'
import "./components.css"
import loader from "../assets/images/loader.svg"

export default function Loader() {
  return (
    <div className='Loader'>
        <img src={loader} alt="loader"/>
    </div>
  )
}
