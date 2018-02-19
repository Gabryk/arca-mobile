import React from 'react'
import { withRouter } from 'react-router-native'

import {
  View,
  Image,
  Text,
} from 'react-native'
import { Subheader, Button } from 'react-native-material-ui'

import styles from './styles'
import theme from 'Theme/styles'
import fonts from 'Theme/fonts'
import cart_empty from 'Images/cart-empty.png'

export default withRouter(({
  history
}) => (
  <View style={[theme.item, theme.column]}>
    <View style={[theme.item, theme.spaceBetween, theme.vCenter, theme.hCenter]}>
      <Text style={fonts.headline}>Tu carrito de compras está vacío</Text>
    </View>
    <View style={[theme.item, theme.spaceBetween, theme.vCenter]}>
      <Image source={cart_empty}/>
    </View>
    <View style={[theme.item, theme.spaceBetween, theme.vCenter, theme.hCenter]}>
      <Button raised primary text="Ir a comprar" onPress={_ => history.push('/products')}/>
    </View>
  </View>
))