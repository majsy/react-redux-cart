import shop from '../api/shop'
import * as types from '../constants/ActionTypes'

export const openCart = () => dispatch => dispatch({
  type: types.OPEN_CART,
  isOpen: true
})

export const closeCart = () => dispatch => dispatch({
  type: types.OPEN_CART,
  isOpen: false
})

const receiveProducts = products => ({
  type: types.RECEIVE_PRODUCTS,
  products: products
})

export const getAllProducts = () => dispatch => {
  shop.getProducts(products => {
    dispatch(receiveProducts(products))
  })
}

const addToCartUnsafe = productId => ({
  type: types.ADD_TO_CART,
  productId
})

export const addToCart = productId => (dispatch, getState) => {
  if (getState().products.byId[productId].inventory > 0) {
    dispatch(addToCartUnsafe(productId))
  }
}

export const removeFromCart = productId => dispatch => dispatch({
  type: types.REMOVE_FROM_CART,
  productId
})

export const checkout = products => (dispatch, getState) => {
  const { cart } = getState()

  dispatch({
    type: types.CHECKOUT_REQUEST
  })
  shop.buyProducts(products, () => {
    dispatch({
      type: types.CHECKOUT_SUCCESS,
      cart
    })
  })
}
