import React from 'react'
import PropTypes from 'prop-types'
import '../scss/components/_cart-item.scss'
import { removeFromCart, addToCart, reduceItemQuantity } from '../actions'
import { connect } from 'react-redux'

const CartItem = ({ title, price, productId, inventory, addToCart, removeFromCart, reduceItemQuantity, quantityById, children }) => (
  <div className="cart-item">
    <div className="item-details">
      <div className="image-container">
        <div className="aspect-ratio-container">
          <img className="image" src="https://via.placeholder.com/400" />
        </div>
      </div>
      <div className="upper-container">
        <div className="title-container">
          <h2 className="title">{title}</h2>
          <h3 className="price">&#36;{price}</h3>
        </div>

        <button className="remove-btn" onClick={()=> removeFromCart(productId)}>Remove</button>
      </div>
    </div>

    <div className="quantity-cta">
      <button className="button-half"
        onClick={()=> { quantityById[productId] === 1 ? 
          removeFromCart(productId) : 
          reduceItemQuantity(productId)}}
        disabled={quantityById[productId] === 0 ? 'disabled' : ''}>-
      </button>
      <div className="quantity">{quantityById[productId]}</div>
      <button className="button-half"
        onClick={()=> addToCart(productId)} 
        disabled={inventory > 0 ? '' : 'disabled'}>+
      </button>

      {children}
    </div>
  </div>
)

CartItem.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  inventory: PropTypes.number.isRequired,
  addToCart: PropTypes.func,
  removeFromCart: PropTypes.func,
  reduceItemQuantity: PropTypes.func
}

const mapStateToProps = state => ({
  quantityById: state.cart.quantityById
})

export default connect(
  mapStateToProps,
  { removeFromCart, addToCart, reduceItemQuantity }
)(CartItem)