import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className='container'>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/digitron'>Digitron</Link>
        </li>
        <li>
          <Link to='/news'>News</Link>
        </li>
        <li>
          <Link to='/search'>Search News</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
