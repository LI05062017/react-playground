import React from 'react'
import {
  Link
} from 'react-router-dom'

const NavigationBar = () => {
  return (
    <nav className='myNav'>
      <Link to='/'> Name </Link>
    </nav>
  )
}

export default NavigationBar
