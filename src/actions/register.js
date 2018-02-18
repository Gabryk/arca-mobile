import { trigger, triggerError } from 'Actions'

export const _REGISTER_ADD_LOCATION = '_REGISTER_ADD_LOCATION'
export const _REGISTER_ADD_DELIVERY_DATE = '_REGISTER_ADD_DELIVERY_DATE'

export const addLocation = location => {
  return dispatch => {
    dispatch( trigger(_REGISTER_ADD_LOCATION)(location))
  }
}
export const addDeliveryDate = date => {
  return dispatch => {
    dispatch( trigger(_REGISTER_ADD_DELIVERY_DATE)(date))
  }
}