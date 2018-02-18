import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  addLocation,
  addDeliveryDate
} from 'Actions/register'
import { register } from 'Selectors/register'

export const withActions = WrappedComponent => connect( null, dispatch => ({
  addLocation: bindActionCreators(addLocation, dispatch),
  addDeliveryDate: bindActionCreators(addDeliveryDate, dispatch),
}))(WrappedComponent)

export const withRegister = WrappedComponent => connect( state => ({
  register: register(state),
}), null)(WrappedComponent)