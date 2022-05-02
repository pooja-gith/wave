import React from 'react'

import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>

<header id="header" class="d-flex align-items-center">
    <div class="container d-flex justify-content-between">

      <div class="logo">
        <h1 class="text-light"><a href="index.html">Indian Electronics</a></h1>
         <a href="index.html"><img src="assets/img/logo.png" alt="" class="img-fluid"/></a>
      </div>

      <nav id="navbar" class="navbar">
        <ul>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>          
          <Link to='/products'>Products</Link>
          <Link to='/services'>Services</Link>
          <Link to='/pricing'>Pricing</Link>
          <Link to='/team'>Team</Link>
          <Link to='/contact'>Contact</Link>
          
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav>

    </div>
  </header>
    </div>
  )
}

export default Header