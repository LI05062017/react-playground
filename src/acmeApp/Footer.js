import React from 'react'
import PropTypes from 'prop-types'

const Footer = ({street, city, state, zip, phoneNumber}) => {
  return (
    <div className='footer'>
      <a>Contact Information</a>
      <h5>{street}</h5>
      <h5>{city}</h5>
      <h5>{state}</h5>
      <h5>{zip}</h5>
      <h5>{phoneNumber}</h5>
    </div>
  )
}

Footer.propTypes = {
  street: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  zip: PropTypes.string.isRequired,
  phoneNumber: PropTypes.string.isRequired
}

export default Footer
