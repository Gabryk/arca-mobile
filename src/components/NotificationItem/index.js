import React, { Component } from 'react'
import _ from 'lodash'
import { crcFormat } from 'Utils'
import { withRouter } from 'react-router-native'
import products from 'Connectors/products'
import { orderActions } from 'Connectors/orders'

import { View, FlatList, Image} from 'react-native'
import { Text } from 'react-native-elements'
import { ListItem, Avatar, IconToggle, Button } from 'react-native-material-ui'

import styles from './styles'
import theme from 'Theme/styles'
import fonts from 'Theme/fonts'
import colors  from 'Theme/colors'

export default ({
  date,
  message,
  readed,
  type,
  ...props
}) => (
  <ListItem
    divider
    centerElement={(
      <View style={[theme.column, theme.divider, styles.itemContainer]}>
        <View style={[styles.Header, readed && styles.HeaderReaded]}>
          <Text style={[styles.HeaderText, readed && styles.HeaderTextReaded]}>{date}</Text>
        </View>
        <View style={[theme.item,styles.Message, theme.divider]}>
          <Text>{message}</Text>
        </View>
        {type === 'order-locked' && (
          <View style={[theme.item, theme.row, styles.Bottom]}>
            <Button
              primary
              text='Solucionar'
              onPress={e => console.log(e)}
            />
          </View>
        )}
      </View>
    )}
    style={{
      container: styles.Container,
      centerElementContainer: styles.centerElementContainer
    }}
  />
)