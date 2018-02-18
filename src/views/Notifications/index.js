import React, { Component } from 'react'
import {
  withNotifications,
  withNotificationsActions
} from 'Connectors/notifications'
import {
  View,
} from 'react-native'

import { Text } from 'react-native-elements'
import List from 'Components/common/List'
import NotificationItem from 'Components/NotificationItem'
import AppBar from 'Components/AppBar'

import theme from 'Theme/styles'

@withNotifications
@withNotificationsActions
export default class NotificationsView extends Component {
  componentDidMount(){
    const { Notifications } = this.props
    Notifications.fetch()
  }
  render(){
    const {
      notifications: { items, loading }
    } = this.props

    return (
      <View style={theme.item}>
        <AppBar action='goback' title='Notificationes'/>
        <List
          loading={loading}
          data={items}
          renderItem={ ({item}) => 
            (<NotificationItem {...item}/>)
          }
        />
      </View>
    )
  }
}