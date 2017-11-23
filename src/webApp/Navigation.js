import React from 'react'
import {
  Link
} from 'react-router-dom'

const NavigationBar = () => {
  return (
    <nav className='myNav'>
      <Link to='/'> Home </Link>
      <Link to='/'> About </Link>
      <Link to='/'> Portfolio </Link>
      <Link to='/'> Contact Me </Link>
    </nav>
  )
}

export default NavigationBar
