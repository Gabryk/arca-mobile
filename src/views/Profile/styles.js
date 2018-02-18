import { StyleSheet } from 'react-native'
import Colors from 'Theme/colors'

export default StyleSheet.create({
  headerContainer: {
    //height: 300,
    backgroundColor: 'yellow'
  },
  headerImage: {
    width: '100%',
    height: 180,
    resizeMode: 'cover',
    position: 'absolute',
  },
  headerAvatar: {
    //paddingTop: 115,
    //backgroundColor: 'blue',
  },
  textLocation: {
    color: Colors.accent,
  },
  text:{
    color: Colors.textPrimary,
  },
  itemTitle: {
    fontWeight: 'bold',
    color: Colors.tertiary,
  },
  itemDesc: {
    color: Colors.textPrimary,
  }
})