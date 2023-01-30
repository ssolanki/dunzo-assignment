import React from 'react'
import "../App.css"
import logo from "../assets/images/logo.png";

export default function Header() {
  return (
    <header className="App-header">
        <div className="Container">
            <img src={logo} className="App-logo" alt="logo" />
        </div>
    </header>
  )
}
