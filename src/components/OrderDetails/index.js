import React from 'react'
import { withRouter } from 'react-router-native'
import { crcFormat } from 'Utils'

import {
  FlatList,
  Text
} from 'react-native'
import { ListItem } from 'react-native-material-ui'

const renderOrderItem = (onPress=()=>{}) => {
  return ({item:{product, total, quantity}}) => (
    <ListItem
      divider={true}
      centerElement={<Text>{`${product.name}, ${product.brand} x ${quantity}`}</Text>}
      rightElement={<Text>{crcFormat(total)}</Text>}
      onPress={() => onPress(product)}
    />
  )
}
export default ({order, onPressItem, ...props}) => (
  <FlatList
    data={order.items}
    renderItem={renderOrderItem(onPressItem)}
    keyExtractor={ ({product}) => product.id }
    {...props}
  />
)