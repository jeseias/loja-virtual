import CART_ACTIONS_TYPES  from './cart.types'


export const toggleCartHidden = () => ({
  type: CART_ACTIONS_TYPES.TOGGLE_CART_HIDDEN
})

export const addItems = item => ({
  type: CART_ACTIONS_TYPES.ADD_ITEM,
  payload: item
})

export const clearItemFromCart = item => ({
  type: CART_ACTIONS_TYPES.CLEAR_ITEM_FROM_CART,
  payload: item
})

export const removeItem = item => ({
  type: CART_ACTIONS_TYPES.REMOVE_ITEM,
  payload: item
})