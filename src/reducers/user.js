import {
  _USER_ADD,
  _USER_RESET,
  _USER_UPDATE,
  _USER_UPDATE_NAME,
  _USER_UPDATE_LAST_NAME,
  _USER_UPDATE_PHONE,
} from 'Actions/user'

const initial_state = {
  id: null,
  name: 'Gabriel',
  last_name: 'Segura',
  email: '',
  phone:'',
}
export default (state = initial_state, action) => {
  switch(action.type){
    case _USER_ADD:
      return {
        ...state,
        ...action.payload,
      }
    case _USER_UPDATE:
      return {
        ...state,
        ...action.payload,
      }
    case _USER_UPDATE_NAME:
      return {
        ...state,
        name: action.payload,
      }
    case _USER_UPDATE_LAST_NAME:
      return {
        ...state,
        last_name: action.payload,
      }
    case _USER_UPDATE_PHONE:
      return {
        ...state,
        phone: action.payload,
      }
    case _USER_RESET:
      return initial_state
    default:
      return state
  }
}