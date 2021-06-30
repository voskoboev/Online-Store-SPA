import { actionTypes } from '../constants/actionTypes'


const initState = {
  products: [{
    id: 1,
    title: 'One',
    category: 'Prog'
  }]
}

export const productReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_PRODUCTS:
      return state
    default:
      return state
  }
}