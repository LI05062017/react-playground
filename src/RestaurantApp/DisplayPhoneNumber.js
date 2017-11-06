import React from 'react'
import PropTypes from 'prop-types'

const DisplayPhoneNumber = ({phone}) => {
  return (
    <div className='PhoneNumber'>
      <p> For Reservations </p>
      <p>({phone})</p>
    </div>
  )
}

export default DisplayPhoneNumber
