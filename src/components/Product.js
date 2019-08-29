import React from 'react'
import PropTypes from 'prop-types'

const Product = ({ price, inventory, title }) => (
  <div className="Product">
    {title} - &#36;{price}{inventory ? ` x ${inventory}` : null}
  </div>
)

Product.propTypes = {
  price: PropTypes.number,
  inventory: PropTypes.number,
  title: PropTypes.string
}

export default Product
