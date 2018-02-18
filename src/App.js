import React, { Component } from 'react'

import { Provider } from 'react-redux'
import configureStore from 'Stores'

import { View } from 'react-native'
import { Route } from 'react-router-native'
import { COLOR, ThemeProvider } from 'react-native-material-ui'
import Drawer from 'Components/MenuDrawer'

import colors from 'Theme/colors'
import 'Utils/xdate'

import routers from 'Routers'
const store = configureStore()
const uiTheme = {
  palette: {
    primaryColor: colors.primary,
    accentColor: colors.accent,

    primaryTextColor: colors.textPrimary,
    secondaryTextColor: colors.textSecondary,
    alternateTextColor: colors.text,
  },
  toolbar: {
    container: {
      height: 56,
    },
  },
}
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ThemeProvider uiTheme={uiTheme}>
          <Drawer>
              <View style={styles.container}>
                  { routers.map( (router, index) => ( <Route key={index} {...router}/>) ) }
              </View>
          </Drawer>
        </ThemeProvider>
      </Provider>
    )
  }
}
const styles = {
  container:{
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
  }
}
export default App