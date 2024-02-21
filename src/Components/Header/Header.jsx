import React from 'react'
import logo from "../../logo.png"
import {Link} from "react-router-dom"
import {ImSearch} from "react-icons/im"

const Header = () => {
  return (
    <nav className="header">
        <img src={logo} alt="logo" />
        <div>
        <Link to="/shows"> Shows </Link>
        <Link to="/shows"> Movies </Link>
        <Link to="/shows"> Recently Added </Link>
        <Link to="/shows"> Watch List </Link>
        </div>
        <ImSearch/>

    </nav>
  )
}

export default Header