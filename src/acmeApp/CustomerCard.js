import React from 'react'
import PropTypes from 'prop-types'

const CustomerCard = ({customer}) => {
  return (
    <div className='customer-card'>
      <h4> {customer.name} </h4>
      <h4> {customer.email} </h4>
      <img src={customer.img} />
    </div>
  )
}

CustomerCard.propTypes = {
  customer: PropTypes.object.isRequired
}

export default CustomerCard
