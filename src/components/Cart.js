import React from 'react'
import PropTypes from 'prop-types'
import CartItem from '../containers/CartItem'
import Checkout from './Checkout'
import cartSvg from '../assets/cart.svg'
import closeBtn from '../assets/close-btn.svg'
import '../scss/components/_cart.scss'

const Cart  = ({ products, total, onCheckoutClicked, isOpen, closeCart }) => {
  const hasProducts = products.length > 0

  const nodes = hasProducts ? (
    products.map(product =>
      <CartItem
        title={product.productTitle}
        price={product.price.value}
        key={product.id}
        productId={product.id}
        inventory={product.inventory}
      />
    )
  ) : (
    <div className="empty-cart-content">
      <img src={cartSvg} className="cart-svg" />
      Please add some products to your cart.
    </div>
  )
  const checkoutIsShowing = hasProducts ? 
    <Checkout total={total} onCheckoutClicked={onCheckoutClicked} products={products} /> 
  : null

  return (
    <div className={`cart-overlay ${isOpen ? 'is-open' : ''}`}>
      <div className="cart-container">
        <header className="cart-header">
          <h3 className="title">Your Cart</h3>
          <img onClick={closeCart} src={closeBtn} className="close-svg" />
        </header>
        
        <div className="wrapper">
          {nodes}

        </div>
        {checkoutIsShowing}
        
      </div>
    </div>
  )
}

Cart.propTypes = {
  products: PropTypes.array,
  total: PropTypes.string,
  isOpen: PropTypes.bool,
  onCheckoutClicked: PropTypes.func
}

export default Cart

