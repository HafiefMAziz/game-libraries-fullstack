import React from 'react'
import './navbar.css'
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
     <nav class="navbar">
        <div class="navbar-container container-nav">
            <input type="checkbox" name="" id=""/>
            <div class="hamburger-lines">
                <span class="line line1"></span>
                <span class="line line2"></span>
                <span class="line line3"></span>
            </div>
            <ul class="menu-items">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><a href="#">Login</a></li>
            </ul>
            <h1 class="logo">JaggerPlay</h1>
        </div>
    </nav>
    </>
  )
}

export default Navbar