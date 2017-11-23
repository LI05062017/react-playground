import React from 'react'
import DrinkItem from './DrinkItem'
import PropTypes from 'prop-types'

const DrinkList = ({data}) =>
  <div>
    {
      data.map((item, index) => {
        return (
          <DrinkItem
            item={item}
            key={index}
          />
        )
      })
    }
  </div>

DrinkList.propTypes = {
  data: PropTypes.array.isRequired
}

export default DrinkList
