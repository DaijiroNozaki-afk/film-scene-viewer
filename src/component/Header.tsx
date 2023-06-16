import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <h1>Film scene viewer</h1>
        <ul>
            <li><Link to="/">Home</Link></li>
        </ul>
    </header>
  )
}

export default Header