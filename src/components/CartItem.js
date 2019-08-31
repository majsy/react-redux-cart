import React from 'react'
import PropTypes from 'prop-types'
import '../scss/components/_cart-item.scss'

const CartItem = ({ title, price, quantity, inventory, onAddToCartClicked }) => (
  <div className="cart-item">
  <div className="item-details">
    <div className="image-container">
      <div className="aspect-ratio-container">
        <img className="image" src="https://via.placeholder.com/400" />
      </div>
    </div>
    <div className="title-container">
      <h2 className="title">{title}</h2>
      <h3 className="price">&#36;{price}</h3>

      <button>Remove</button>
    </div>
  </div>

  <div className="quantity-cta"></div>
    <button
      disabled={quantity <= 0 ? '' : 'disabled'}>-
    </button>
    <div className="quantity">{quantity}</div>
    <button className="button-half"
      onClick={onAddToCartClicked} 
      disabled={inventory > 0 ? '' : 'disabled'}>+
    </button>
  </div>
)

CartItem.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  inventory: PropTypes.number.isRequired,
  onAddToCartClicked: PropTypes.func.isRequired
}

export default CartItem