import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
const Header = () => {
  return (
    <header className='p-header'>
        <h1 className='p-head-h1'><Link to="/" className='c-nlink'>Film scene viewer</Link></h1>
        <ul className='p-head-ul'>
            <li className='p-head-li'><Link to="/" className='c-nlink'>Home</Link></li>
        </ul>
    </header>
  )
}

export default Header