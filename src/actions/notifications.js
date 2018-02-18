import { trigger, triggerError } from 'Actions'
import mockData from '../mock-data'

export const _NOTIFICATION_FETCH = '_NOTIFICATION_FETCH'
export const _NOTIFICATION_FETCH_SUCCEED = '_NOTIFICATION_FETCH_SUCCEED'
export const _NOTIFICATION_ADD = '_NOTIFICATION_ADD'
export const _NOTIFICATION_ADD_SUCCEED = '_NOTIFICATION_ADD_SUCCEED'
export const _NOTIFICATION_REMOVE = '_NOTIFICATION_REMOVE'
export const _NOTIFICATION_REMOVE_SUCCEED = '_NOTIFICATION_REMOVE_SUCCEED'

export const fetch = () => {
  return dispatch => {
    dispatch( trigger(_NOTIFICATION_FETCH)() )
    setTimeout( () => {
      dispatch( trigger(_NOTIFICATION_FETCH_SUCCEED)(mockData.notifications))
    }, 2000)
  }
}

export const add = (data) => {
  return dispatch => {
    dispatch( trigger(_NOTIFICATION_ADD_SUCCEED)(data))
  }
}

export const remove = () => {
  return dispatch => {
    dispatch( trigger(_NOTIFICATION_REMOVE)() )
    dispatch( trigger(_NOTIFICATION_REMOVE_SUCCEED)())
  }
}