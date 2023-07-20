import React from 'react'
import "./NavBar.css"
function NavBar() {
  return (
    <div class="navbar">
    <div class="nav-left">
      <img class="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Netflix Logo"/>
    </div>
    <div class="nav-right">
      <button class="btn">Home</button>
      <button class="btn">Movies</button>
      <button class="btn">TV Shows</button>
      <button class="btn">Recently Added</button>
    </div>
  </div>
  )
}

export default NavBar