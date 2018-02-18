import React, { Component } from 'react'
import { withRouter } from 'react-router-native'
import {
  withAppStateActions
} from 'Connectors/appState'

import { View } from 'react-native'
import { Toolbar, IconToggle, Icon } from 'react-native-material-ui'

//import styles from './styles'
import theme  from 'Theme/styles'
import colors from 'Theme/colors'

const generateProps = ({action, color, history, openDrawer, ...props}) => {
  switch((action?action:'').toLowerCase()){
    case 'goback':
      return {
        ...props,
        leftElement: (<IconToggle
          name='arrow-back'
          color={color}
          onPress={history.goBack}
          />),
      }
    case 'menu':
      return {
        ...props,
        leftElement: 'menu',
        onLeftElementPress: openDrawer
      }
    default:
      return props
  }
}

const RightButton = ({history, notifications, cart, color, ...props}) => (
  <View style={[theme.row]}>
    {notifications && 
      <IconToggle
        name='notifications-none'
        onPress={ () => history.push('/notifications')}
        color={color}
      />
    }
    {cart && 
      <IconToggle
        name='shopping-cart'
        onPress={ () => history.push('/shopping-cart')}
        color={color}
      />
    }
  </View>
)
const AppBar = ({title, transparent, ...props}) => {
  const container = {
    backgroundColor: transparent ? 'transparent' : colors.primary,
    position: transparent ? 'absolute' : undefined,
    top: 0,
  }
  const color = transparent ? colors.primary : colors.text
  return (
    <Toolbar
      {...generateProps({...props, color})}
      centerElement={title}
      rightElement={<RightButton {...props} color={color}/>}
      style={{
        container
      }}
      iconProps={{color:color, size:24}}
    />
  )
}
export default withRouter(withAppStateActions(AppBar))