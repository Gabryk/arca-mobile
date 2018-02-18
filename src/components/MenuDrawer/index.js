import React from 'react'
import { NativeRouter, Route, withRouter } from 'react-router-native'
import { connect } from 'react-redux'
import {
  withAppState,
  withAppStateActions
} from 'Connectors/appState'

import { View } from 'react-native'
import { Drawer, Avatar } from 'react-native-material-ui'
import DrawerAnimation from 'react-native-drawer'


const MenuDrawer = withRouter(({toggleDrawer, history}) => (
  <Drawer>
    <Drawer.Header>
      <Drawer.Header.Account
        avatar={<Avatar text="A"/>}
        footer={{
            dense: true,
            centerElement: {
                primaryText: 'Reservio',
                secondaryText: 'business@email.com',
            },
            rightElement: 'arrow-drop-down',
        }}
      />
    </Drawer.Header>
    <Drawer.Section
        divider
        items={[
            {
              icon: 'store',
              value: 'Mercado',
              onPress:() => {toggleDrawer(), history.push('/home')},
              active: true,
              key: 'store'
            },
            {
              icon: 'shop-two',
              value: 'Historial de compras',
              key: 'shop'
            },
        ]}
    />
    <Drawer.Section
        items={[
            {
              icon: 'person',
              value: 'Tus datos',
              onPress: () => {toggleDrawer(), history.push('/profile')}
            }
        ]}
    />
  </Drawer>
))
const Control = ({children, appState, closeDrawer, ...props}) => (
  <NativeRouter>
    <DrawerAnimation
        content={<MenuDrawer {...props}/>}
        open={appState.drawer_open}
        type="overlay"
        openDrawerOffset={0.2}
        onClose={ () => setTimeout(closeDrawer, 200) }
      >
        {children}
    </DrawerAnimation>
  </NativeRouter>
)

export default withAppState(withAppStateActions(Control))