import React from 'react'

import { View} from 'react-native'
import { Text } from 'react-native-elements'
import { ListItem, Icon } from 'react-native-material-ui'

import styles from './styles'
import theme from 'Theme/styles'
import fonts from 'Theme/fonts'


const CentralText = ({item}) => (
  <View style={[theme.item, theme.column]}>
    <Text
      style={[
        styles.titleText,
        fonts.title,
        theme.divider
      ]}
    >
      {item.name}
    </Text>
    <Text
      numberOfLines={2}
      style={[styles.descriptionText, fonts.body2]}
    >
      {item.address}
    </Text>
  </View>
)

export default ({
  item,
  onItemPress,
  ...props
}) => (
  <ListItem
    divider={true}
    leftElement={<Icon name='home'/>}
    centerElement={ <CentralText item={item}/>}
    style={{
      container: styles.itemContainer,
      //contentViewContainer: styles.itemContainer,
      //leftElementContainer: styles.leftElementContainer,
      //leftElement: styles.avatar,
      //centerElementContainer: styles.centerElementContainer,
    }}
    numberOfLines={2}
    onPress={ () => onItemPress(item) }
  />
)