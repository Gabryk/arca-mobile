import React, { Component } from 'react'

import {
  View,
  Image,
  Alert,
} from 'react-native'
import MapView from 'Components/MapView'
import requestGPS from 'Utils/requestGPS'
import { getCurrentPosition, coordsToAddress } from 'Apis/Geocoding'

import * as Animatable from 'react-native-animatable'
import Spinner from 'react-native-spinkit'
import { Icon } from 'react-native-elements'

import styles from './styles'
import theme from 'Theme/styles'
import colors from 'Theme/colors'

class MapLocation extends Component {
  state = {
    loading: false,
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0022,
    longitudeDelta: 0.0021,
  }
  componentDidMount(){
    requestGPS().then(this.fetchCurrentPosition)
  }
  componentWillUnmount(){

  }
  render(){
    const { loading } = this.state
    const { style, mapProps } = this.props
    return(
      <View style={[theme.item, theme.hCenter, theme.vCenter, style]}>
        <MapView
          {...mapProps}
          region={this.state}
          onRegionChangeComplete={this.newCoords}
        />
        {loading && (
          <View style={styles.iconLocation}>
            <Spinner type='Bounce' color={colors.primary} size={64}/>
          </View>
        )}
        {!loading && (
          <Icon
            containerStyle={styles.iconLocation}
            size={92}
            name='marker'
            type='foundation'
            color={colors.primary}
          />
        )}
      </View>
    )
  }
  fetchCurrentPosition = () => {
    if(this.state.loading) return
      
    this.loading(true)
    this.setState({loading: true})
    getCurrentPosition()
      .then(coords => {
        return {loading: false, ...coords }
      })
      .catch(err => {
        this.loading(false)
        Alert.alert('Upps can´t get your position! ', JSON.stringify(err))
        return {loading: false, error: JSON.stringify(err)}
      })
      .then(_ => {
        //this.loading(_.loading)
        this.setState(_)
      })
  }
  newCoords = coords => {
    if(this.state.loading) return
    const { onChange } = this.props
    return coordsToAddress(coords)
      .then( ({address, coords}) => {
        const formattedAddress = address[0] ? address[0].formattedAddress : ''
        onChange && onChange({...coords, address: formattedAddress})
        return {loading: false, ...coords, address }
      })
      .catch(err => {
        Alert.alert('Upps can´t get direction! ', JSON.stringify(err))
        return {loading: false, error: JSON.stringify(err) }
      })
      .then(_ => {
        this.loading(_.loading)
        this.setState(_)
      })
  }
  loading = state => {
    const { onLoading } = this.props
    onLoading && onLoading(state)
  }
}
MapLocation.defaultProps = {
  mapProps: {}
}
export default MapLocation