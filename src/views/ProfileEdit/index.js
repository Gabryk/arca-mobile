import React, { PureComponent } from 'react'
import * as Animatable from 'react-native-animatable'
import { withRouter } from 'react-router-native'
import { withUserForm, withUserActions } from 'Connectors/user'
import {
  View,
  ScrollView,
} from 'react-native'
import { reduxForm } from 'redux-form'
import { ReduxField } from 'Components/FieldInput'
import Snackbar from 'Components/Snackbar'

import Spinner from 'react-native-spinkit'
import { Button } from 'react-native-material-ui'
import AppBar from 'Components/AppBar'
import BottomButtons from 'Components/BottomButtons'

import styles from './styles.js'
import theme from 'Theme/styles'
import fonts from 'Theme/fonts'
import Colors from 'Theme/colors'

const AniButton = ({animation,...props}) => (
  <Animatable.View animation={animation} duration={500}>
    <Button {...props}/>
  </Animatable.View>
)

@withRouter
@withUserActions
@withUserForm
@reduxForm({ form: 'UserEdit' })
class ProfileEdit extends PureComponent {
  state= {
    loading: false
  }

  render(){
    const {
      history,
      handleSubmit,
      submitSucceeded
    } = this.props
    const { loading } = this.state

    return (
      <View style={theme.item}>
        <AppBar action='goback' title=''/>
        <ScrollView style={[theme.item, theme.space]}>
          <ReduxField
            name='full_name'
            label='Nombre completo'
            icon={{name:'person'}}
          />

          <ReduxField
            name='phone'
            label='Número de teléfono'
            icon={{name:'phone'}}
            keyboardType='phone-pad'
          />

          <ReduxField
            name='email'
            label='Correo electrónico'
            icon={{name:'email'}}
            keyboardType='email-address'
          />

          <ReduxField
            name='password'
            label='Clave de seguridad'
            icon={{name:'security'}}
            type='password'
          />
        </ScrollView>
        <BottomButtons
          loading={loading}
          leftButton={{
            text: 'Regresar',
            onPress: () => history.goBack(),
          }}
          rightButton={{
            text: 'Guardar',
            onPress: handleSubmit(this.saveChanges)
          }}/>
      </View>
    )
  }
  saveChanges = values => {
    const {update, history} = this.props
    this.setState({
      loading: true
    })
    update(values)
    .then( v => {
      Snackbar.show('Datos actializados')
      history.goBack()
    })
  }
}
export default ProfileEdit