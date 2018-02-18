import { StyleSheet } from 'react-native'
import colors from 'Theme/colors'
import Color from 'color'

export default StyleSheet.create({
  header: {
    minHeight: 160,
  },
  headerText: {
    position: 'absolute',
    top: 40,
    left: 0,
    width: '100%',
  },
  headerImage: {
    width: '100%',
    height: 160,
    resizeMode: 'cover',
  },
  title: {
    color: colors.darkPrimary,
    width: 244,
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
  agendaContainer: {
    backgroundColor: 'white',
  },
  agendaItem:{
    height: 80,
    borderBottomWidth: 0.4,
    borderBottomColor: colors.divider,
  },

  bottom: {
    paddingTop: 8,
    paddingBottom: 8
  }
})