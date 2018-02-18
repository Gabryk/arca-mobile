import React, { Component } from 'react'
import { Field } from 'redux-form'
import { View } from 'react-native'
import { FormLabel, FormInput } from 'react-native-elements'
import { Icon, IconToggle } from 'react-native-material-ui'
import FormValidationMessage  from './FormValidationMessage'

import theme  from 'Theme/styles'
import fonts from 'Theme/fonts'
import styles from './styles'

export default class FieldInput extends Component {
  state = {
    visibility: false,
  }

  componentDidMount(){
    const { type } = this.props
    if (type === 'password')
      this.setState({
        visibility: true
      })
  }
  render(){
    const { visibility } = this.state
    const {
      icon,
      label,
      error,
      type,
      ...props
    } = this.props
    
    return (
      <View style={[theme.row, theme.vCenter]}>
        <View>
          {icon && <Icon {...icon}/>}
        </View>
        <View style={[theme.item]}>
          { label &&
            <FormLabel labelStyle={fonts.subheading}>{label}</FormLabel>
          }
          <FormInput
            secureTextEntry={!!visibility}
            {...props}
          />
          { error &&
            <FormValidationMessage>{error}</FormValidationMessage>
          }
        </View>
        { type && type ==='password' && (
          <View style={styles.visibilityIcon}>
            <IconToggle
              name={visibility ? 'visibility-off': 'visibility'}
              onPress={() => this.setState({visibility: !visibility})}
            />
          </View>
          )
        }
      </View>
    )
  }
}


export const FieldForRedux = ({input, meta, ...props}) => (
  <FieldInput error={meta.error} {...props} {...input}/>
)
export const ReduxField = props => (
  <Field
    {...props}
    component={FieldForRedux}
  />
)