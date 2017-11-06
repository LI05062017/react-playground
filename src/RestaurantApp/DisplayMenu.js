import React from 'react'
import PropTypes from 'prop-types'

const DisplayMenu = ({items}) => {
  const mappedItems = items.map((item) => {
    return (
      <div className='allItems'>
        <p className='itemName'>{item.name}</p>
        <p className='itemPrice'>Price ${item.price}</p>
        <p className='itemCatagory'>Catagory: {item.category}</p>
        <p className='itemSpiceLevel'>Spice Level: {item.spiceLevel}</p>
        <img src={item.img} />
      </div>
    )
  })
  return (
    <div>
      {
        mappedItems
      }
    </div>
  )
}

export default DisplayMenu