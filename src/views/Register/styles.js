import { StyleSheet } from 'react-native'
import colors from 'Theme/colors'

export default StyleSheet.create({
  header: {
    minHeight: 220,
  },
  headerText: {
    position: 'absolute',
    top: 40,
    left: 0,
    width: '100%',
  },
  headerImage: {
    width: '100%',
    height: 220,
    resizeMode: 'stretch',
  },
  title: {
    color: colors.darkPrimary,
    width: 244,
    //paddingLeft: 24,
    //paddingRight: 24,
  },
  titleL1: {
    textAlign: 'left',
  },
  titleL2: {
    textAlign: 'right',
  },
  headerDivider: {
    backgroundColor: colors.primary,
    height: 8,
  },

  map: {
    ...StyleSheet.absoluteFillObject,
  },
  mapContainer: {
    maxHeight: 200
  },
  iconLocation: {
    marginTop: -70
  },


  bottom: {
    paddingTop: 8,
    paddingBottom: 8
  }
})