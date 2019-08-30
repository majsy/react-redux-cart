import React from 'react'
import PropTypes from 'prop-types'
import '../scss/components/_checkout.scss'

const Checkout  = ({ total, products, onCheckoutClicked }) => {
  const isEmpty = products.length <= 0;

  return (
    <div className="checkout">
      <p>Total: &#36;{total}</p>
      <button onClick={onCheckoutClicked}
        disabled={!isEmpty ? '' : 'disabled'}>
        Checkout
      </button>
    </div>
  )
}

Checkout.propTypes = {
  total: PropTypes.string,
  onCheckoutClicked: PropTypes.func
}

export default Checkout