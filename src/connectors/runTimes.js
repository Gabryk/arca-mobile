import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { markedDates, groupedByDay } from 'Selectors/runTimes'

export const withRunTimes = WrappedComponent => connect( state => ({
  runTimes: state.runTimes.items
}))(WrappedComponent)

export const withMarkedDates = WrappedComponent => connect( state => ({
  markedDates: markedDates(state)
}))(WrappedComponent)

export const withRunTimesGroupedByDay = WrappedComponent => connect( state => ({
  groupedRunTimes: groupedByDay(state)
}))(WrappedComponent)