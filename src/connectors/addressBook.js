import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from 'Actions/addressBook'
import { prepareAddressBook } from 'Selectors/addressBook'


const getFilter = ownProps => {
  if (ownProps.addressId)
    return ownProps.addressId
  else if (ownProps.match && ownProps.match.params.addressId)
    return ownProps.match.params.addressId
  else
    return
}

export const withAddressBook = WrappedComponent => connect(
  (state, ownProps) => {
    const addressBook = prepareAddressBook(state, getFilter(ownProps))
    return {
      addressBook,
      initialValues: addressBook.finded ? addressBook.finded : {},
    }
  },
  dispatch => ({
    AddressBook: bindActionCreators(actions, dispatch),
  })
  )(WrappedComponent)

export const withAddressBookActions = WrappedComponent => connect(
  null,
  dispatch => ({
    AddressBook: bindActionCreators(actions, dispatch),
  })
  )(WrappedComponent)