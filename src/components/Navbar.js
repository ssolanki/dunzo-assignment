// Note: make every components name starting with capital letter like ... Navbar -> 'N' 

import React from 'react';

export default function Navbar() {
  return (
    <>

     <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <img src="logo.png" alt="Dunzo" style={{width: '200px', height: '50px'}} />
      </div>
    </nav> 

    </>
  )
}