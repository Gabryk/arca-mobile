import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  item: {
    flex: 1
  },
  column: {
    flexDirection: 'column'
  },
  row: {
    flexDirection: 'row'
  },
  vCenter: {
    alignItems: 'center'
  },
  hCenter: {
    justifyContent: 'center'
  },
  hRight: {
    justifyContent: 'flex-end'
  },
  hLeft: {
    justifyContent: 'flex-start'
  },
  spaceBetween:{
    justifyContent: 'space-between'
  },
  bgBase: {
    backgroundColor: 'white',
  },
  space: {
    paddingLeft: 16,
    paddingRight: 16
  },
  spaceText:{
    paddingLeft: 8,
    paddingRight: 8
  },
  divider:{
    marginTop: 8,
    marginBottom: 8,
  },
  textCenter:{
    textAlign: 'center',
  },


  bg:{
    backgroundColor: 'red'
  },


  
})