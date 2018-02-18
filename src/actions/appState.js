import { trigger, triggerError } from 'Actions'

export const _APP_OPEN_DRAWER = '_APP_OPEN_DRAWER'
export const _APP_CLOSE_DRAWER = '_APP_CLOSE_DRAWER'
export const _APP_TOGGLE_DRAWER = '_APP_TOGGLE_DRAWER'

export const openDrawer = () => {
  return dispatch => {
    dispatch( trigger(_APP_OPEN_DRAWER)())
  }
}
export const closeDrawer = () => {
  return dispatch => {
    dispatch( trigger(_APP_CLOSE_DRAWER)())
  }
}
export const toggleDrawer = () => {
  return dispatch => {
    dispatch( trigger(_APP_TOGGLE_DRAWER)())
  }
}