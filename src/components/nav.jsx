import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';

function nav() {
  return (
    <nav>
        <div>
          <Link to="/">
            <img src={logo} alt="logo"  /> 
          </Link>
        </div>
        <ul>
        <li>
          <Link to="/">Dashboard </Link>
        </li>
        <li>
          <Link to="/markdown">Markdown </Link>
        </li>
        </ul>
    </nav>
  )
}

export default nav