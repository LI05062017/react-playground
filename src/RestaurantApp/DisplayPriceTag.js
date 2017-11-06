import React from 'react'
import PropTypes from 'prop-types'

const DisplayPriceTag = ({priceTag}) => {
  return (
    <div className='priceTag'>
      <img src={priceTag} />
    </div>
  )
}

export default DisplayPriceTag