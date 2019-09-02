import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import cartSvg from '../assets/cart.svg'
import { openCart } from '../actions'
import { getTotalItems } from '../reducers'
import '../scss/components/_header.scss'

const Header = ({ openCart, totalItems }) => (
  <header className="header">
    <h1 className="title">Acme Store</h1>
    <button className="cart-cta" onClick={openCart}>
      <img src={cartSvg} className="cart-svg" />
      { totalItems > 0 ? <span>{totalItems}</span> : null }
    </button>
  </header>
)

Header.propTypes = {
  openCart: PropTypes.func.isRequired,
  totalItems: PropTypes.number
}

const mapStateToProps = (state) => ({
  totalItems: getTotalItems(state)
})

export default connect(
  mapStateToProps,
  { openCart }
)(Header)