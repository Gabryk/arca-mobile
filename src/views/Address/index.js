import React, { Component } from 'react'
import { reduxForm } from 'redux-form'
import { withRouter } from 'react-router-native'
import { withAddressBook, withAddressBookActions }  from 'Connectors/addressBook'

import {
  View,
  Image,
  FlatList,
  Text,
  ScrollView
} from 'react-native'
import { Subheader, Button, ListItem, Divider, ActionButton } from 'react-native-material-ui'
import CircleMenu from '@ramotion/react-native-circle-menu'
import AppBar from 'Components/AppBar'
import MapLocation from 'Components/MapLocation'
import { ReduxField } from 'Components/FieldInput'
import BottomButtons from 'Components/BottomButtons'
import Snackbar from 'Components/Snackbar'

import styles from './styles'
import theme from 'Theme/styles'
import fonts from 'Theme/fonts'

const addressIcons = [
  {
    name: 'md-home',
    color: '#298CFF'
  },
  {
    name: 'md-search',
    color: '#30A400'
  },
  {
    name: 'md-time',
    color: '#FF4B32'
  },
  {
    name: 'md-settings',
    color: '#8A39FF'
  },
  {
    name: 'md-navigate',
    color: '#FF6A00'
  }
]

@withAddressBook
@withAddressBookActions
@withRouter
@reduxForm({ form: 'AddressCreator' })
export default class Address extends Component{
  state = {
    location: {}
  }
  render(){
    const {
      addressBook: { finded },
      history,
      match: { params },
      submiting,
      handleSubmit,
    } = this.props
    const { location } = this.state

    return (
      <View style={theme.item}>
        <ScrollView>
          <View style={styles.containerMap}>
            <MapLocation
              onChange={this.handleLocationChange}
              mapLoading={this.mapLoading}/>
          </View>

          <View style={[theme.column, theme.space]}>
            <View>
              <ReduxField
                name='name'
                label='Ubicación de'
                placeholder='Ej: Casa'
              />
              <CircleMenu
                items={addressIcons}
              />              
            </View>
            <ReduxField
              name='address'
              label='Dirección'
            />
          </View>
        </ScrollView>

        <BottomButtons
          loading={submiting || this.map_loading}
          rightButton={{
            text: finded ? 'Actualizar' : 'Agregar',
            onPress: handleSubmit(this.submit)
          }}
        />
        <AppBar
          action='goback'
          title={
            finded
            ? `Dirección ${finded.name}`
            : 'Nueva dirección'
          }
          transparent/>
      </View>
    )
  }
  submit = (values) => {
    const { AddressBook, initialValues, history } = this.props

    if (initialValues.id) {
      return AddressBook.update(initialValues.id, values)
        .then(_ => {
          history.goBack()
          Snackbar.show('Datos actializados')
          return _
        })
    }else{
      return AddressBook.add(values)
        .then(_ => {
          history.goBack()
          Snackbar.show('Dirección agregada')
          return _
        })
    }
  }
  handleLocationChange = location => {
    const { change } = this.props
    if (location && location.address) {
      this.setState({location})
      change('address', location.address)
      change('location', location)
    }
  }
  mapLoading = map_loading => {
    this.setState({map_loading})
  }
}