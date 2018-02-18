import React, { Component } from 'react'
import { withRouter } from 'react-router-native'
import { crcFormat } from 'Utils'
import { current, orderActions }  from 'Connectors/orders'

import {
  View,
  Image,
  FlatList,
  Text
} from 'react-native'
import { Subheader, Button, ListItem, Divider, ActionButton } from 'react-native-material-ui'
import AppBar from 'Components/AppBar'
import OrderDetails from 'Components/OrderDetails'

import styles from './styles'
import theme from 'Theme/styles'
import fonts from 'Theme/fonts'

@current
@orderActions
@withRouter
export default class ShoppingCart extends Component{
  componentDidMount(){
    const { order, Orders } = this.props
    if (!order)
      Orders.fetch()
  }
  render(){
    const { order, history } = this.props
    if (!order)
      return(
        <View style={[theme.item, styles.container]}>
         <AppBar action='goback' title=''/>
          <View style={[theme.item, theme.vCenter, theme.hCenter]}>
            <Text style={fonts.display1}>Esta orden ya no existe</Text>
            <Text style={fonts.headline}>:O</Text>
          </View>
        </View>
      )

    return (
      <View style={[theme.item, styles.container]}>
       <AppBar action='goback' title='Tu orden'/>

        <View
          style={[theme.row, theme.hCenter, theme.divider]}
        >
          <Button
            primary
            text='Ordenar'
            onPress={() => history.push(`/purchase/${order.id}`)}
          />
        </View>

        <View style={[theme.column, theme.space]}>
          <View>
            <Subheader text='Detalles'/>
            <OrderDetails
              order={order}
              onPressItem={ product => 
                history.push(`/product/${product.id}`)
              }
            />
          </View>
          <Divider/>

          <View style={[theme.row, theme.vCenter]}>
            <Subheader text='Sub total: '/>
            <Text>{crcFormat(order.sub_total)}</Text>
          </View>
          <View style={[theme.row, theme.vCenter]}>
            <Subheader text='Total: '/>
            <Text>{crcFormat(order.total)}</Text>
          </View>
        </View>
        <ActionButton
          onPress={ () => history.push(`/products`)}
        />
      </View>
    )
  }
}