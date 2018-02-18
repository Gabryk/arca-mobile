import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Notifications } from 'Selectors/notifications'
import * as actions from 'Actions/notifications'


export const withNotificationsActions = WrappedComponent => connect( null, dispatch => ({
  Notifications: bindActionCreators(actions, dispatch),
}))(WrappedComponent)

export const withNotifications = WrappedComponent => connect( state => ({
  notifications: Notifications(state),
}))(WrappedComponent)
