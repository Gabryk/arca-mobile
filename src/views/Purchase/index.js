import React, { Component } from 'react'
import { Redirect } from 'Utils/redirect'
import { crcFormat } from 'Utils'

import { withRegister } from 'Connectors/register'
import { current } from 'Connectors/orders'

import {
  View,
  ScrollView,
} from 'react-native'
import { Divider, Subheader } from 'react-native-material-ui'
import { Text } from 'react-native-elements'
import AppBar from 'Components/AppBar'
import ItemStatus  from './ItemStatus'
import OrderDetails from 'Components/OrderDetails'

import styles from './styles'
import theme from 'Theme/styles'
import moment from 'moment'


const ItemSub = ({children}) => (
  <View style={[theme.row, theme.hRight]}>
    <View style={[styles.ItemSub, theme.row, theme.vCenter, theme.spaceBetween]}>
      {children}
    </View>
  </View>
)

@withRegister
@current
export default class Purchase extends Component{
  componentWillReceiveProps(nextProps){

  }
  componentDidMount(){

  }
  render(){
    const {
      register:{ completed },
      order,
      location,
    } = this.props
    if (!completed)
      return <Redirect to='/register'/>

    return (
      <View style={theme.item}>
        <AppBar action='menu' title='Estado de Orden'/>
        <ScrollView>
          <View>
            <ItemStatus
              title='Orden recibida'
              description={moment().format('h:mA, MMM D, YYYY')}
              first checked
            />
            <ItemStatus
              title='Preparando tu orden'
              progress
            />
            <ItemStatus
              title='Entregamos en 2 días'
              description={moment().add(2, 'days').format('h:mA, MMM D, YYYY')}
              last
            />
          </View>
          <View style={[theme.space,theme.divider]}>
            <Divider/>
          </View>

          <View style={theme.space}>
            <Subheader 
              text='Detalles de tu pedido'
              style={{text:theme.textCenter}}
            />
            <OrderDetails
              order={order}
            />
            <ItemSub>
                <Subheader text='Sub total: '/>
                <Text>{crcFormat(order.sub_total)}</Text>
            </ItemSub>
            <ItemSub>
              <Divider style={{container:styles.ItemSub}}/>
            </ItemSub>
            <ItemSub>
                <Subheader text='Total: '/>
                <Text>{crcFormat(order.total)}</Text>
            </ItemSub>
          </View>
        </ScrollView>
      </View>
    )
  }
}