import React from 'react'
import { Link } from 'react-router-dom'
import home from '../../assets/home.png'
import './BottomNav.css'

function BottomNav() {
  return (
    <div className='navLink_wrapper'>
      <Link to="/" className="navLink">
        <img src={home} height={25} />
      </Link>
    </div>
  )
}

export default BottomNav