import { actionTypes } from '../constants/actionTypes'


const initState = {
  products: []
}

export const productReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_PRODUCTS:
      return { ...state, products: payload }
    default:
      return state
  }
}

export const selectedProductReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case actionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload }
    default:
      return state
  }
}