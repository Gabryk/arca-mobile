import React, { Component } from 'react'
import _ from 'lodash'
import { crcFormat } from 'Utils'
import { withRouter } from 'react-router-native'
import products from 'Connectors/products'
import { orderActions } from 'Connectors/orders'

import List from 'Components/common/List'
import Spinner from 'react-native-spinkit'
import { View, Image} from 'react-native'
import { Text } from 'react-native-elements'
import { ListItem, Avatar, IconToggle } from 'react-native-material-ui'

import styles from './styles'
import theme from 'Theme/styles'
import fonts from 'Theme/fonts'
import Colors  from 'Theme/colors'

const ButtonOrder = ({icon, ...props}) => (
  <IconToggle
    name={icon}
    //color={colors.textSecondary}
    //backgroundColor='white'
    {...props}
  />
)
const OrderProccess = ({
  product,
  Orders: {addProduct, removeProduct},
  ...props
}) => {
  const orderQuantity = product.order ? product.order.quantity : 0
  const totalAmount = orderQuantity > 0 ? crcFormat(product.order.totalAmount) : crcFormat(product.price)
  const price = orderQuantity > 1 ? crcFormat(product.price) : ''
  return (
    <View style={[theme.column, theme.hCenter, theme.vCenter]}>
      <ButtonOrder
        icon='add'
        onPress={() => addProduct(product.id)}
        />
      <Text style={[styles.orderQuantity, fonts.title]}>{orderQuantity}</Text>
      <ButtonOrder
        icon='remove'
        onPress={() => removeProduct(product.id)}
        />
    </View>
  )
}
const CentralText = ({item}) => (
  <View style={[theme.item, theme.column, theme.spaceBetween]}>
    <Text style={styles.titleText}>{`${item.name}, ${item.brand}`}</Text>
    <Text numberOfLines={2} style={styles.descriptionText}>{item.description}</Text>
    <Text style={styles.priceText}>{crcFormat(item.price)}</Text>
  </View>
)

@products
@orderActions
@withRouter
class ProductsList extends Component {
  componentDidMount(){
    const {
      products,
      Products,
    } = this.props
    if (!products.items.length)
      Products.fetch()
  }
  render(){
    const {products, ...props} = this.props
    return (
      <List
        loading={products.loading}
        data={products ? products.items : []}
        renderItem={ this._renderItem }
        {...props}
      />
    )
  }
  _renderItem = ({item}) => {
    const image = <Image
      source={{uri:item.avatar_url}}
      style={styles.avatar}
      //resizeMode='stretch'
    />
    return (
      <ListItem
        divider={true}
        leftElement={image}
        centerElement={ <CentralText item={item}/>}
        rightElement={<OrderProccess {...this.props} product={item}/>}
        style={{
          container: styles.itemContainer,
          contentViewContainer: styles.itemContainer,
          leftElementContainer: styles.leftElementContainer,
          leftElement: styles.avatar,
          centerElementContainer: styles.centerElementContainer,
        }}
        numberOfLines={3}
        onPress={ () => this.onItemPress(item) }
      />
    )
  }
  onItemPress = item => {
    const { history } = this.props
    history.push(`/product/${item.id}`)
  }
}
export default ProductsList