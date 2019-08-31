import React from 'react'
import PropTypes from 'prop-types'
import '../scss/components/_checkout.scss'

const Checkout  = ({ total, products, onCheckoutClicked }) => {
  const isEmpty = products.length <= 0;

  return (
    <div className="checkout">
      <div className="upper-row">
        <p>Total:</p> <p>&#36;{total}</p>
      </div>
      <div className="lower-row">
        <button className="button" onClick={onCheckoutClicked}
          disabled={!isEmpty ? '' : 'disabled'}>
          Checkout
        </button>
      </div>
    </div>
  )
}

Checkout.propTypes = {
  total: PropTypes.string,
  onCheckoutClicked: PropTypes.func
}

export default Checkout