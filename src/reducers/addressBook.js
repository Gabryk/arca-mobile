import {
  _ADDRESS_BOOK_FETCH,
  _ADDRESS_BOOK_FETCH_SUCCEED,
  _ADDRESS_ADD,
  _ADDRESS_ADD_SUCCEED,
  _ADDRESS_UPDATE,
  _ADDRESS_UPDATE_SUCCEED,
  _ADDRESS_REMOVE,
  _ADDRESS_REMOVE_SUCCEED,
} from 'Actions/addressBook'

const initial_state = {
  items: [],
  loading: false,
}

export default (state = initial_state, action) => {
  switch(action.type){
    case _ADDRESS_BOOK_FETCH_SUCCEED:
      return {
        ...state,
        items: action.payload,
        loading: false,
      }

    case _ADDRESS_BOOK_FETCH:
      return{
        ...state,
        loading: true,
      }

    case _ADDRESS_ADD:
      return{
        ...state,
        loading: true,
      }
    case _ADDRESS_ADD_SUCCEED:
      return{
        ...state,
        items: [...state.items, action.payload],
        loading: false,
      }

    case _ADDRESS_UPDATE:
      return{
        ...state,
        loading: true,
      }
    case _ADDRESS_UPDATE_SUCCEED:
      return{
        ...state,
        items: state.items.reduce((ac, item) => {
          ac.push( 
            item.id === action.payload.id 
              ? {...item, ...action.payload} 
              : item
          )
          return ac
        }, []),
        loading: false,
      }

    case _ADDRESS_REMOVE:
      return{
        ...state,
        loading: true,
      }
    case _ADDRESS_REMOVE_SUCCEED:
      return{
        ...state,
        items: state.items.filter(address => address.id!==action.payload),
        loading: false,
      }

    default:
      return state
  }
}