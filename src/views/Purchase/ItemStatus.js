import React from 'react'

import {
  View,
} from 'react-native'
import { ListItem, Subheader } from 'react-native-material-ui'
import { Icon, Text } from 'react-native-elements'

import theme from 'Theme/styles'
import Colors  from 'Theme/colors'
import styles from './styles'

const Line = ({top, bottom, color}) => (
  <View style={{
    position:'absolute',
    backgroundColor: color,
    width: 2,
    height: '50%',
    top: top ? 0 : undefined,
    bottom: bottom ? 0 : undefined,
  }}>
  </View>
)
const ItemIcon = ({first, last, checked, progress}) => {
  const [color1, color2] = checked ?
    [Colors.accent, Colors.accent] :
    progress ?
      [Colors.accent, Colors.divider] :
      [Colors.divider, Colors.divider]
  return (
    <View style={[{height: '100%'}, theme.hCenter, theme.vCenter]}>
      {first && <Line color={color1} bottom/>}
      {last && <Line color={color1} top/>}
      {!first && <Line color={color1} top/>}
      {!last && <Line color={color2} bottom/>}
      <Icon
        name={ checked ?
          'check-circle' :
          progress ? 
            'checkbox-blank-circle':
            'checkbox-blank-circle-outline'
          }
        type='material-community'
        color={progress ? Colors.primary : color1}
        iconStyle={{
          backgroundColor: 'white',
        }}
      />
    </View>
  )
}
export default ({title, description, ...icon}) => (
  <ListItem
    centerElement={(
      <View style={theme.space}>
        <Subheader text={title} style={{container:{paddingLeft: 0,}}}/>
        {description && 
          <View style={theme.row}>
            <Icon name='access-time' size={16} color={Colors.textSecondary}/>
            <Text>{description}</Text>
          </View>
        }
      </View>
    )}
    leftElement={<ItemIcon {...icon}/>}
    divider={false}
    style={{
      container:{
        height: 80
      },
    }}
  />
)