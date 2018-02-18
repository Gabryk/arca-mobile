import { StyleSheet } from 'react-native'
import colors  from 'Theme/colors'

export default StyleSheet.create({
  itemContainer:{
    height: 110
  },
  itemViewContainer:{
    height: 110
  },
  leftElementContainer:{
    width: 82,
    height: 82,
  },
  avatar:{
    borderRadius: 4,
    width: 82,
    height: 82,
  },
  centerElementContainer:{
    paddingLeft: 8,
    height: 82,
  },
  priceText:{
    fontWeight: 'bold', 
    color: colors.primary
  },
  titleText:{
    fontWeight: 'bold', 
    //color: colors.accent
  },
  descriptionText:{
    color: colors.textSecondary,
  },
  orderQuantity: {
    textAlign: 'center',
    lineHeight: 16
  },
})