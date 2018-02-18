import {
  _REGISTER_ADD_LOCATION,
  _REGISTER_ADD_DELIVERY_DATE,
} from 'Actions/register'

const initial_state = {
  location: null
}
export default (state = initial_state, action) => {
  switch(action.type){
    case _REGISTER_ADD_LOCATION:
      return {
        ...state,
        location: action.payload
      }
    case _REGISTER_ADD_DELIVERY_DATE:
      return {
        ...state,
        delivery_date: action.payload,
      }
    default:
      return state
  }
}