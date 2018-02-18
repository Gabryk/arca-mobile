import React, { Component } from 'react'
import { crcFormat } from 'Utils'
import { find }  from 'Connectors/products'
import { orderActions } from 'Connectors/orders'

import {
  View,
  Image
} from 'react-native'
import { Text, Tile, Button } from 'react-native-elements'
import AppBar from 'Components/AppBar'

import styles from './styles'
import theme from 'Theme/styles'
import fonts from 'Theme/fonts'
import defaultTileImg from 'Images/store-online.jpeg'


const ButtonOrder = ({icon, ...props}) => <Button
  iconRight={{name: icon, color:'black', size: 24}}
  backgroundColor='white'
  {...props}
  />
const Information = ({product , addProduct, ...props}) => {
  return (
    <View style={theme.space}>
      <Text style={styles.description}>{product.description}</Text>
    </View>
  )
}
const OrderProccess = ({
  product,
  Orders: {addProduct, removeProduct},
  ...props
}) => {
  const orderQuantity = product.order ? product.order.quantity : 0
  const totalAmount = orderQuantity > 0 ? crcFormat(product.order.totalAmount) : crcFormat(product.price)
  const price = orderQuantity > 1 ? crcFormat(product.price) : ''
  return (
    <View style={theme.row}>
      <View style={[theme.item, theme.column, theme.hCenter, theme.vCenter]}>
        <Text style={fonts.headline}>Precio</Text>
        <Text style={fonts.title}>{totalAmount}</Text>
        <Text style={fonts.subheadline}>{price}</Text>
      </View>
      <View style={[theme.item, theme.column, theme.hCenter, theme.vCenter]}>
        <ButtonOrder
          icon='add-circle-outline'
          onPress={() => addProduct(product.id)}
          />
        <Text style={[styles.orderQuantity, fonts.title]}>{orderQuantity}</Text>
        <ButtonOrder
          icon='remove-circle-outline'
          onPress={() => removeProduct(product.id)}
          />
      </View>
    </View>
  )
}
const Promo = ({product ,...props}) => {
  return (
    <View>
      
    </View>
  )
}


@find
@orderActions
export default class ProductView extends Component{
  render(){
    const { product } = this.props
    return (
      <View style={styles.container}>
        <Image source={{uri:product.avatar_url}} style={styles.image}/>
        <Text h3 style={styles.title}>{product.name}</Text>

        <Information product={product}/>
        <OrderProccess {...this.props}/>

        <AppBar action='goback' transparent/>
      </View>
    )
  }
}