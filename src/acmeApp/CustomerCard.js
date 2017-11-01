import React from 'react'
import PropTypes from 'prop-types'

const CustomerCard = ({name, email, img}) => {
  return (
    <div className='customer-card'>
      <h4> {name} </h4>
      <h4> {email} </h4>
      <img src={img} />
    </div>
  )
}

CustomerCard.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired
}

export default CustomerCard
