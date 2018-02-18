import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  add,
  reset,
  updateName,
  updateLastName,
  updatePhone,
  update,
} from 'Actions/user'
import {  user } from 'Selectors/user'

export const withUser = WrappedComponent => connect( state => ({
  user: user(state)
}))(WrappedComponent)

export const withUserActions = WrappedComponent => connect( null, dispatch => ({
  add: bindActionCreators(add, dispatch),
  update: bindActionCreators(update, dispatch),
  updateName: bindActionCreators(updateName, dispatch),
  updateLastName: bindActionCreators(updateLastName, dispatch),
  updatePhone: bindActionCreators(updatePhone, dispatch),
  reset: bindActionCreators(reset, dispatch),
}))(WrappedComponent)

export const withUserForm = WrappedComponent => connect( state => ({
  initialValues: user(state)
}))(WrappedComponent)