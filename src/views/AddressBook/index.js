import React from 'react'
import { withRouter } from 'react-router-native'
import {
  View,
} from 'react-native'

import { Text } from 'react-native-elements'
import { ActionButton } from 'react-native-material-ui'
import ListAddresses from 'Components/ListAddresses'
import AppBar from 'Components/AppBar'

//import styles from './styles'
import theme from 'Theme/styles'

export default withRouter(({
  history
}) => (
  <View style={theme.item}>
    <AppBar action='goback' title='Tus direcciones'/>
    <ListAddresses/>

    <ActionButton
      onPress={ () => history.push(`/address_create`)}
    />
  </View>
))