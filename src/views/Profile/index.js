import React from 'react'
import { withRouter } from 'react-router-native'
import { withUser } from 'Connectors/user'

import {
  View,
  Image,
  TouchableHighlight,
} from 'react-native'

import { Text } from 'react-native-elements'
import { Icon, Avatar, Subheader, Divider, RippleFeedback } from 'react-native-material-ui'
import AppBar from 'Components/AppBar'

import styles from './styles.js'
import theme from 'Theme/styles'
import fonts from 'Theme/fonts'
import Colors from 'Theme/colors'

const img = 'https://thumbs.dreamstime.com/z/vector-cartoon-town-abstract-landscape-houses-retro-style-31026465.jpg'

const Item = ({title, description, icon, onPress}) => (
  <RippleFeedback onPress={onPress}>
    <View style={[theme.row, theme.vCenter]}>
      <Icon {...icon} color={Colors.accent}/>
      <View style={[theme.item, theme.space, theme.divider]}>
        <Text
          style={[fonts.subheading, styles.itemTitle]}
        >
        {title}
        </Text>
        <Text
          style={[fonts.subheading, styles.itemDesc]}
        >
        {description}
        </Text>
      </View>
    </View>
  </RippleFeedback>
)

export default withRouter(withUser(({user, history}) => (
  <View style={theme.item}>
    <View>
      <Image
        style={styles.headerImage}
        source={{uri: img}}
      />
      <View style={{height: 135}}></View>
      <View>
        <View style={theme.vCenter}>
          <Avatar
            icon='person'
            iconSize={48}
            size={84}
          />
          <Text h4 style={styles.text}>{user.full_name}</Text>
        </View>
        <View style={theme.vCenter}>
          <Icon name='location-on' color={Colors.accent}/>
          <Text
            style={[styles.text, styles.textLocation]}
          >
          Unamed road, Guanacaste Costa Rica
          </Text>
        </View>
      </View>
    </View>

    <View style={theme.divider}></View>
    <View style={[theme.item, theme.space]}>
      <Item
        title='Teléfono'
        description={user.phone}
        icon={{name:'phone'}}
        onPress={() => history.push('/profile-edit')}
      />

      <View style={theme.divider}>
        <Divider/>
      </View>

      <Item
        title='Ubicación'
        description='Unamed road, Guanacaste Costa Rica'
        icon={{name:'location-on'}}
        onPress={() => history.push('/address_book')}
      />
      <View style={theme.divider}>
        <Divider/>
      </View>
    </View>

    <AppBar action='goback' title='' transparent/>
  </View>
)))