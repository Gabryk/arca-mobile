import React from 'react'

import { Text } from 'react-native-elements'
import styles from './styles'

export default ({children, ...props}) => (
  <Text style={styles.textError}>{children}</Text>
)