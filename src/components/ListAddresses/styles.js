import { StyleSheet } from 'react-native'
import colors  from 'Theme/colors'

export default StyleSheet.create({
  itemContainer:{
    marginTop: 8,
    marginBottom: 8,
  },
  itemViewContainer:{
    marginTop: 16,
    marginBottom: 16,
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