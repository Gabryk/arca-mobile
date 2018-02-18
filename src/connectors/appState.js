import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  openDrawer,
  closeDrawer,
  toggleDrawer,
}  from 'Actions/appState'

export const withAppStateActions = WrappedComponent => connect( null, dispatch => ({
  openDrawer: bindActionCreators(openDrawer, dispatch),
  closeDrawer: bindActionCreators(closeDrawer, dispatch),
  toggleDrawer: bindActionCreators(toggleDrawer, dispatch),
}))(WrappedComponent)

export const withAppState = WrappedComponent => connect( state => ({
  appState: state.appState,
}), null)(WrappedComponent)