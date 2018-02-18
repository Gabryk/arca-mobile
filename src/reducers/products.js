import {
  _PRODUCTS_FETCH,
  _PRODUCTS_FETCH_SUCCEED,
  _PRODUCT_CREATE,
} from 'Actions/products'

const initial_state = {
  items: [],
  loading: false,
}
export default (state = initial_state, action) => {
  switch(action.type){
    case _PRODUCT_CREATE:
      return {
        ...state,
        items: [...state.items, action.payload]
      }

    case _PRODUCTS_FETCH:
      return{
        ...state,
        loading: true,
      }

    case _PRODUCTS_FETCH_SUCCEED:
      return{
        ...state,
        items: action.payload,
        loading: false,
      }
    default:
      return state
  }
}