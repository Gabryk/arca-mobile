import {
  _APP_OPEN_DRAWER,
  _APP_CLOSE_DRAWER,
  _APP_TOGGLE_DRAWER,
} from 'Actions/appState'

const initial_state = {
  drawer_open: false,
}
export default (state = initial_state, action) => {
  switch(action.type){
    case _APP_OPEN_DRAWER:
      return {
        ...state,
        drawer_open: true,
      }
    case _APP_CLOSE_DRAWER:
      return {
        ...state,
        drawer_open: false,
      }
    case _APP_TOGGLE_DRAWER:
      return {
        ...state,
        drawer_open: !state.drawer_open,
      }
    default:
      return state
  }
}