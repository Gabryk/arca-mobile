import { createSelector } from 'reselect'

const findAddress = (addressBook, id) => 
  Array.isArray(addressBook.items)
  && addressBook.items.find(address => address.id === id)

const Address = address => ({
  ...address
})

export const prepareAddressBook = createSelector(
  state => state.addressBook,
  (state, addressId) => addressId,
  (addressBook, addressId) => {
    return {
      ...addressBook,
      finded: addressId && findAddress(addressBook, addressId),
    }
  }
)