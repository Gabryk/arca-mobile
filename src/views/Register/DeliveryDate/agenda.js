import React, { Component } from 'react'
import moment from 'moment'
import _ from 'lodash'
import {
  View,
} from 'react-native'
import {
  withActions,
} from 'Connectors/register'
import {
  withRunTimesGroupedByDay,
  withMarkedDates
} from 'Connectors/runTimes'

import { Button, Divider } from 'react-native-material-ui'
import { Text } from 'react-native-elements'
import { Agenda } from 'react-native-calendars'

import styles from './styles'
import theme from 'Theme/styles'
import colors from 'Theme/colors'

@withRunTimesGroupedByDay
@withMarkedDates
export default class DeliveryDate extends Component {
  render(){
    const {
      groupedRunTimes,
      markedDates,
      runTime,
    } = this.props
    return(
      <Agenda
        pastScrollRange={1}
        selected={groupedRunTimes[0].date}
        minDate={moment().format('YYYY-MM-DD')}
        markedDates={markedDates}
        items={groupedRunTimes.reduce(
          (ac, {date, runTimes}) => ({
            ...ac,
            [date]: [
              runTimes.map(runTime1 => (
                runTime && runTime1.id===runTime.id ?
                {...runTime1, selected:true} :
                runTime1
              ))
            ]
          })
          ,{}
        )}
        renderItem={this._renderItem}
        renderEmptyData={this._renderEmtyData}
        rowHasChanged={ (r1, r2) => !_.isEqual(r1, r2) }
        theme={{
          backgroundColor: 'white'
        }}
      />
    )
  }
  _renderItem = runTimes => {
    const { onSelectRunTime } = this.props
    return (
      <View style={[theme.row, theme.vCenter, styles.agendaItem]}>
        {runTimes.map(runTime => (
          <Button
            primary
            raised={runTime.selected}
            text={runTime.runTimeRange}
            key={runTime.id}
            onPress={() => onSelectRunTime(runTime)}
          />
        ))}
      </View>
    )
  }
  _renderEmtyData = () => {
    return <View><Text>No hacemos entrega</Text></View>
  }
}