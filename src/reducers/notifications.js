import {
  _NOTIFICATION_FETCH,
  _NOTIFICATION_FETCH_SUCCEED,
  _NOTIFICATION_ADD,
  _NOTIFICATION_ADD_SUCCEED,
  _NOTIFICATION_REMOVE,
  _NOTIFICATION_REMOVE_SUCCEED,
} from 'Actions/notifications'

const initial_state = {
  items: [],
  loading: false,
}
export default (state = initial_state, action) => {
  switch(action.type){
    case _NOTIFICATION_FETCH:
      return {
        ...state,
        loading: true,
      }
    case _NOTIFICATION_FETCH_SUCCEED:
      return {
        ...state,
        loading: false,
        items: action.payload || [],
      }
    case _NOTIFICATION_ADD:
      return {
        ...state,
        loading: true,
      }
    case _NOTIFICATION_ADD_SUCCEED:
      return {
        ...state,
        loading: false,
        items: [...state.items, action.payload],
      }
    case _NOTIFICATION_REMOVE:
      return {
        ...state,
        loading: true,
      }
    case _NOTIFICATION_REMOVE_SUCCEED:
      return {
        ...state,
        loading: false,
        items: state.items.filter(i => i!==action.payload),
      }
    default:
      return state
  }
}