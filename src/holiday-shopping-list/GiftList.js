import React from 'react'
import PropTypes from 'prop-types'

const GiftList = ({ gifts }) =>
  <div>
    <h4> Display List of Gifts! </h4>
    {
      gifts.map((item) => {
        return (
          <div>
            <h4> {item.name} </h4>
            <h4> {item.price} </h4>
          </div>
        )
      })
    }
  </div>
GiftList.propType = {
  gifts: PropTypes.array.isRequired
}

export default GiftList
