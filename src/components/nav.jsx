import React from 'react'
import { Link } from 'react-router-dom';

function nav() {
  return (
    <nav>
        <div>
        <p>logo</p>
        {/* <img src="" alt="" /> */}
        </div>
        <ul>
        <li>
            <Link to="/dashboard">Dashboard </Link>
        </li>
        <li>
            <Link to="/markdown">markdown </Link>
        </li>
        {/* <li>
            <Link to="creer">Ajouter</Link>
        </li> */}
        </ul>
    </nav>
  )
}

export default nav