import { trigger, triggerError } from 'Actions'
import mockData from '../mock-data'

export const _PRODUCTS_FETCH = '_PRODUCTS_FETCH'
export const _PRODUCTS_FETCH_SUCCEED = '_PRODUCTS_FETCH_SUCCEED'
export const _PRODUCT_CREATE = '_PRODUCT_CREATE'

export const fetch = () => {
  return dispatch => {
    dispatch( trigger(_PRODUCTS_FETCH)() )
    setTimeout( () => {
      dispatch( trigger(_PRODUCTS_FETCH_SUCCEED)(mockData.products))
    }, 2000)
  }
}