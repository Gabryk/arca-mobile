import { trigger, triggerError } from 'Actions'
import mockData from '../mock-data'

export const _ORDERS_FETCH = '_ORDERS_FETCH'
export const _ORDERS_FETCH_SUCCEED = '_ORDERS_FETCH_SUCCEED'
export const ORDER_CREATE = 'ORDER_CREATE'
export const _CURRENT_ORDER_ADD_PRODUCT = '_CURRENT_ORDER_ADD_PRODUCT'
export const _CURRENT_ORDER_REMOVE_PRODUCT = '_CURRENT_ORDER_REMOVE_PRODUCT'

export const fetch = () => {
  return dispatch => {
    dispatch( trigger(_ORDERS_FETCH)() )
    setTimeout( () => {
      dispatch( trigger(_ORDERS_FETCH_SUCCEED)(mockData.orders))
    }, 2000)
  }
}

export const addProduct = productId => {
  return dispatch => {
    dispatch( trigger(_CURRENT_ORDER_ADD_PRODUCT)({productId}))
  }
}

export const removeProduct = productId => {
  return dispatch => {
    dispatch( trigger(_CURRENT_ORDER_REMOVE_PRODUCT)({productId}))
  }
}