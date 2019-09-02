import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'
import '../scss/components/_product-item.scss'

const ProductItem = ({ product, onAddToCartClicked }) => (
  <div className="product-item">
    <div className="image-container">
      <div className="aspect-ratio-container">
        <img className="image" src="https://via.placeholder.com/400" />
      </div>
    </div>

    <div className="details-container">
      <Product
        title={product.productTitle}
        price={product.price.value}
        inventory={product.inventory} />

      <button className="button"
        onClick={onAddToCartClicked}
        disabled={product.inventory > 0 ? '' : 'disabled'}>
        {product.inventory > 0 ? 'Add to cart' : 'Sold Out'}
      </button>
    </div>
  
  </div>
)

ProductItem.propTypes = {
  product: PropTypes.shape({
    productTitle: PropTypes.string.isRequired,
    price: PropTypes.object.isRequired,
    inventory: PropTypes.number.isRequired
  }).isRequired,
  onAddToCartClicked: PropTypes.func.isRequired
}

export default ProductItem
