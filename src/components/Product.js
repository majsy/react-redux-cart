import React from 'react'
import PropTypes from 'prop-types'
import '../scss/components/_product.scss'

const Product = ({ price, inventory, title }) => (
  <div className="product">

    <div className="title-container">
      <h2 className="title">{title}</h2>
      <h3 className="price">&#36;{price}</h3>
    </div>

    <div className="quantity-container">
      {inventory ? <p>{inventory} remaining</p> : null}
    </div>
  </div>
)

Product.propTypes = {
  price: PropTypes.number,
  inventory: PropTypes.number,
  title: PropTypes.string
}

export default Product
