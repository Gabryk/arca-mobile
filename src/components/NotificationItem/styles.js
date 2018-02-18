import { StyleSheet } from 'react-native'
import Colors from 'Theme/colors'

export default StyleSheet.create({
  Container: {
    backgroundColor: 'white',
    height: 'auto',
    justifyContent: 'flex-start'
  },
  centerElementContainer: {
    alignItems: 'flex-start',
  },
  itemContainer: {
    width: '100%'
  },
  Header: {
    borderLeftWidth: 2,
    borderLeftColor: Colors.primary,
  },
  HeaderReaded: {
    borderLeftColor: Colors.lightPrimary,
  },
  HeaderText:{
    marginLeft: 8,
    fontWeight: 'bold',
    color: Colors.textPrimary,
  },
  HeaderTextReaded: {
    fontWeight: 'normal',
  },
  Message: {

  },
  Bottom: {
    justifyContent: 'flex-end'
  },
})