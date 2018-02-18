import React, { Component } from 'react'
import {
  View,
  Image,
} from 'react-native'

import {
  withActions,
} from 'Connectors/register'

import { Button, Divider } from 'react-native-material-ui'
import { Text } from 'react-native-elements'
import Agenda from './agenda'

import styles from './styles'
import theme from 'Theme/styles'
import colors from 'Theme/colors'
import home_location from 'Images/home-location.png'

@withActions
export default class DeliveryDate extends Component {
  state = {
    runTime: null
  }
  
  render(){
    const { runTime } = this.state
    return(
      <View style={theme.item}>
        <View style={styles.header}>
          <Image
            style={styles.headerImage}
            source={home_location}
          />
          <View style={[theme.column, theme.vCenter, styles.headerText]}>
            <Text
              h1
              style={[styles.title, styles.titleL1]}
            >
              Cuándo te
            </Text>
            <Text
              h1
              style={[styles.title, styles.titleL2]}
            >
              Entregamos?
            </Text>
          </View>
        </View>
        <Divider
          style={{container:styles.headerDivider}}
        />

        <View style={theme.item}>
          <Agenda
            onSelectRunTime={this.setRunTime}
            runTime={runTime}
          />
        </View>
        <Divider/>

        <View
          style={[
            theme.row,
            theme.spaceBetween,
            theme.space,
            styles.bottom
          ]}
        >
          <Button
            default
            text='Saltar'
          />
          <Button
            primary
            text='Continuar'
            onPress={this.submit}
          />
        </View>
      </View>
    )
  }
  setRunTime = runTime => this.setState({runTime})
  submit = () => {
    const { runTime } = this.state
    const { addDeliveryDate } = this.props

    addDeliveryDate(runTime)
  }
}