import React from 'react'
import PropTypes from 'prop-types'

const ProductCard = ({product, price, img}) => {
  return (
    <div className='product-card'>
      <h4>{product}</h4>
      <h4>{price}</h4>
      <img src={img} />
    </div>
  )
}

ProductCard.propTypes = {
  product: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired

}

export default ProductCard
