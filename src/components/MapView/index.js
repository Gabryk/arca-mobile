import React from 'react'
import { StyleSheet } from 'react-native'
import MapView from 'react-native-maps'

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
})
export default props => (
  <MapView
    style={styles.map}
    {...props}
  />
)