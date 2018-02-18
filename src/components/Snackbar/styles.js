import { StyleSheet } from 'react-native'
import Colors  from 'Theme/colors'

export default StyleSheet.create({
  SnackContainer: {
    height: 48,
    backgroundColor: 'rgba(0, 0, 0, .78)',
    paddingLeft: 24,
    paddingRight: 24,

    paddingBottom: 14,
    paddingTop: 14,
  },
  SnackContainerML: {
    paddingBottom: 24,
    paddingTop: 24,
  },

  TextMessage: {
    color: Colors.text,
    fontSize: 14,
  },
})