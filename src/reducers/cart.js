import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CHECKOUT_REQUEST,
  CHECKOUT_FAILURE,
  OPEN_CART,
  REDUCE_ITEM_QUANTITY
} from '../constants/ActionTypes'

const initialState = {
  addedIds: [],
  quantityById: {},
  isOpen: false
}

const isOpen = (state = initialState.isOpen, action) => {
  switch (action.type) {
    case OPEN_CART:
      return action.isOpen
    default:
      return state
  }
}

const addedIds = (state = initialState.addedIds, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      if (state.indexOf(action.productId) !== -1) {
        return state
      }
      return [ ...state, action.productId ]
    case REMOVE_FROM_CART:
      if (state.indexOf(action.productId) === -1) {
        return state
      }
      return state.filter((productId)=> productId !== action.productId)
    default:
      return state
  }
}

const quantityById = (state = initialState.quantityById, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return { ...state,
        [action.productId]: (state[action.productId] || 0) + 1
      }
      case REDUCE_ITEM_QUANTITY:
      return { ...state,
        [action.productId]: (state[action.productId]) - 1
      }
    default:
      return state
  }
}

export const getQuantity = (state, productId) =>
  state.quantityById[productId] || 0

export const getAddedIds = state => state.addedIds

const cart = (state = initialState, action) => {
  switch (action.type) {
    case CHECKOUT_REQUEST:
      return initialState
    case CHECKOUT_FAILURE:
      return action.cart
    default:
      return {
        isOpen: isOpen(state.isOpen, action),
        addedIds: addedIds(state.addedIds, action),
        quantityById: quantityById(state.quantityById, action)
      }
  }
}

export default cart
