import React, { PureComponent } from 'react'
import * as Animatable from 'react-native-animatable'
import {
  View,
} from 'react-native'

import Spinner from 'react-native-spinkit'
import { Button } from 'react-native-material-ui'

import theme from 'Theme/styles'
import Colors from 'Theme/colors'

const AniButton = ({animation, style, ...props}) => (
  <Animatable.View animation={animation} duration={500} style={[theme.item, theme.row, style]}>
    <Button {...props}/>
  </Animatable.View>
)

const BottomButtons = ({
  loading,
  leftButton,
  rightButton,
}) => (
  <View style={[
    theme.row,
    theme.spaceBetween,
    theme.space,
    theme.divider]}>
    {
      leftButton 
      ?<AniButton
        animation={loading ? 'bounceOutLeft': null}
        disabled={loading}
        style={theme.hLeft}
        {...leftButton}
      />
      : <View style={theme.item}></View>
    }
    <Animatable.View type={loading? 'bounceInUp': null} duration={500}>
      <Spinner
        isVisible={loading}
        type='ThreeBounce'
        color={Colors.primary}
      />
    </Animatable.View>
    {
      rightButton
      ? <AniButton
        animation={loading ? 'bounceOutRight': null}
        disabled={loading}
        style={theme.hRight}
        primary
        {...rightButton}
      />
      : <View style={theme.item}></View>
    }
  </View>
)
BottomButtons.defaultProps = {
  loading: false
}
export default BottomButtons