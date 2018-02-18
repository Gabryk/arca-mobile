import React, { Component } from 'react'
import { GoBack } from 'Utils/redirect'
import { withRegister } from 'Connectors/register'

import {
  View,
} from 'react-native'
import { Text } from 'react-native-elements'

import DeliveryPlace from './deliveryPlace'
import DeliveryDate from './DeliveryDate'

import theme from 'Theme/styles'


@withRegister
export default class Register extends Component{
  render(){
    const { register } = this.props
    if (register.completed)
      return <GoBack/>

    return (
      <View style={theme.item}>
      { !register.location ?
        <DeliveryPlace/> : 
        !register.delivery_date ?
            <DeliveryDate/> :
            <Text>Register completed</Text>
      }
      </View>
    )
  }
}