import { trigger, triggerError } from 'Actions'
import mockData from '../mock-data'

export const _ADDRESS_BOOK_FETCH = '_ADDRESS_BOOK_FETCH'
export const _ADDRESS_BOOK_FETCH_SUCCEED = '_ADDRESS_BOOK_FETCH_SUCCEED'
export const _ADDRESS_ADD = '_ADDRESS_ADD'
export const _ADDRESS_ADD_SUCCEED = '_ADDRESS_ADD_SUCCEED'
export const _ADDRESS_UPDATE = '_ADDRESS_UPDATE'
export const _ADDRESS_UPDATE_SUCCEED = '_ADDRESS_UPDATE_SUCCEED'
export const _ADDRESS_REMOVE = '_ADDRESS_REMOVE'
export const _ADDRESS_REMOVE_SUCCEED = '_ADDRESS_REMOVE_SUCCEED'

export const fetch = () => {
  return dispatch => {
    dispatch( trigger(_ADDRESS_BOOK_FETCH)() )
    setTimeout( () => {
      dispatch( trigger(_ADDRESS_BOOK_FETCH_SUCCEED)(mockData.address_book))
    }, 2000)
  }
}

export const add = address => {
  return dispatch => {
    dispatch( trigger(_ADDRESS_ADD)())
    return new Promise(function(resolve, reject) {
      dispatch( trigger(_ADDRESS_ADD_SUCCEED)(address))
      resolve(address)
    })
  }
}

export const remove = addressId => {
  return dispatch => {
    dispatch( trigger(_ADDRESS_REMOVE)())
    return new Promise(function(resolve, reject) {
      dispatch( trigger(_ADDRESS_REMOVE_SUCCEED)(addressId))
      resolve(addressId)
    })
  }
}

export const update = (id, address) => {
  return dispatch => {
    dispatch( trigger(_ADDRESS_UPDATE)())
    return new Promise(function(resolve, reject) {
      dispatch( trigger(_ADDRESS_UPDATE_SUCCEED)({id, ...address}))
      resolve(address)
    })
  }
}