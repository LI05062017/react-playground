import React from 'react'
import PropTypes from 'prop-types'

const MenuItemsStyle = {
  container: {
    border: '3px solid black',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  header: {
    fontSize: '25px',
    fontDecoration: 'unerline'
  },
  subHeader: {

  },
  image: {
    paddingBottom: '15px',
    borderRadius: '15%', 
    maxWidth: '70%',
    maxHieght: '70%'
  }
}

const MenuItemDisplay = ({name, price, category, spiceLevel, img}) => {
  return (
    <div style={MenuItemsStyle.container}>
      <h4 style={MenuItemsStyle.header}> {name} </h4>
      <h4 style={MenuItemsStyle.subHeader}> {price} </h4>
      <h4 style={MenuItemsStyle.subHeader}> {category} </h4>
      <h4 style={MenuItemsStyle.subHeader}> {spiceLevel} </h4>
      <img style={MenuItemsStyle.image} src={img} />
    </div>
  )
}

MenuItemDisplay.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
  spiceLevel: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired
}

export default MenuItemDisplay
