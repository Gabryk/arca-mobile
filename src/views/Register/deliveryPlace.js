import React, { Component } from 'react'
import {
  View,
  Image,
} from 'react-native'
import requestGPS from 'Utils/requestGPS'
import { getCurrentPosition, coordsToAddress } from 'Apis/Geocoding'
import { withActions } from 'Connectors/register'
import { reduxForm } from 'redux-form'

import * as Animatable from 'react-native-animatable'
import Spinner from 'react-native-spinkit'
import { Button, Subheader, Divider } from 'react-native-material-ui'
import { Text, Icon } from 'react-native-elements'
import BottomButtons from 'Components/BottomButtons'
import MapLocation from 'Components/MapLocation'
import { ReduxField } from 'Components/FieldInput'

import styles from './styles'
import theme from 'Theme/styles'
import colors from 'Theme/colors'
import home_location from 'Images/home-location.png'

@withActions
@reduxForm({form:'DeliveryPlace'})
export default class DeliveryPlace extends Component {
  state = {
    address: '1600 Amphitheatre Parkway, Mountain View, CA 94043, USA',
    loading_location: false,
  }
  componentDidMount(){
    requestGPS().then(this.fetchCurrentPosition)
  }
  render(){
    const { loading_location } = this.state
    //const loading_location = true
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
              style={[styles.title, styles.titleL1]}>
              Dónde te
            </Text>
            <Text
              h1
              style={[styles.title, styles.titleL2]}>
              Entregamos?
            </Text>
          </View>
        </View>
        <Divider
          style={{container:styles.headerDivider}}
        />
        <View style={theme.item}>
          <MapLocation
            onChange={this.handleLocationChange}
            onLoading={this.mapLoading}/>
          <View style={theme.divider}>
            <Subheader text={this.state.address}/>
          </View>
        </View>

        <BottomButtons
          leftButton={{
            'default': true,
            text: 'Saltar',
            onPress: this.submit
          }}
          loading={loading_location}
          rightButton={{
            primary: true,
            text: 'Entregar aquí',
            onPress: this.submit
          }}
        />
      </View>
    )
  }

  handleLocationChange = location => {
    const { change } = this.props
    if (location && location.address) {
      this.setState({...location})
    }
  }
  mapLoading = loading_location => {
    this.setState({loading_location})
  }

  submit = () => {
    const { addLocation } = this.props
    const {latitude, longitude, address } = this.state

    addLocation({
      latitude,
      longitude,
      address: address,
    })
  }
}