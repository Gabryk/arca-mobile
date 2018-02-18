import React from 'react'
import {
  View,
} from 'react-native'

import { Text } from 'react-native-elements'
import ListProducts from 'Components/ListProducts'
import AppBar from 'Components/AppBar'

//import styles from './styles'
import theme from 'Theme/styles'

export default () => (
  <View style={theme.item}>
    <AppBar action='goback' title='Lista de productos'/>
    <ListProducts/>
  </View>
)