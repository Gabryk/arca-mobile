import React from 'react'
import SnackBar from 'react-native-snackbar-dialog'
import {
  View,
  Text,
} from 'react-native'

import styles from './styles.js'

const SnackContainer = (title) => () => (
  <View style={styles.SnackContainer}>
    <Text style={styles.TextMessage}>
      {title}
    </Text>
  </View>
)
export default {
  ...SnackBar,
  show: (title, options) => SnackBar.show(
      title,
      {
        renderContent: SnackContainer(title),
        duration: 3000,
        backgroundColor: 'transparent',
      }
    )
}