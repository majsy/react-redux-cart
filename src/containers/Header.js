import React from 'react'
import cartSvg from '../assets/cart.svg'
import { openCart } from '../actions'
import { connect } from 'react-redux'
import '../scss/components/_header.scss'

const Header = ({ openCart }) => (
  <header className="header">
    <h1 className="title">Acme Store</h1>
    <button className="cart-cta" onClick={openCart}>
      <img src={cartSvg} className="cart-svg" />
        Your cart is empty
    </button>
  </header>
)

export default connect(null, { openCart })(Header)