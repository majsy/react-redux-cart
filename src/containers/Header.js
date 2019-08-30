import React from 'react'
import cartSvg from '../assets/cart.svg'
import '../scss/components/_header.scss'

const Header = () => (
  <header className="header">
    <h1 className="title">Acme Store</h1>
    <button className="cart-cta">
      <img src={cartSvg} className="cart-svg" />
        Your cart is empty
    </button>
  </header>
)

export default Header