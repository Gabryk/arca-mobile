import { trigger, triggerError } from 'Actions'
import Query from 'Apis/query'

export const _USER_ADD = '_USER_ADD'
export const _USER_UPDATE_NAME = '_USER_UPDATE_NAME'
export const _USER_UPDATE_LAST_NAME = '_USER_UPDATE_LAST_NAME'
export const _USER_UPDATE_PHONE = '_USER_UPDATE_PHONE'
export const _USER_UPDATE = '_USER_UPDATE'
export const _USER_RESET = '_USER_RESET'


export const add = user => dispatch => {
  dispatch(trigger(_USER_ADD)(user))
}

export const reset = () => dispatch => {
  dispatch(trigger(_USER_RESET)())
}

export const updateName = name => dispatch => {
  dispatch(trigger(_USER_UPDATE_NAME)(name))
}

export const updateLastName = last_name => dispatch => {
  dispatch(trigger(_USER_UPDATE_LAST_NAME)(last_name))
}

export const updatePhone = phone => dispatch => {
  dispatch(trigger(_USER_UPDATE_PHONE)(phone))
}

export const update = values => dispatch => {
  const [name, last_name] = values.full_name.split(' ')
  return Query(values)
  .then(v => {
    dispatch(trigger(_USER_UPDATE)({...values, name, last_name}))
    return v
  })
}