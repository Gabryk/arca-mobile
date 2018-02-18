import { createSelector } from 'reselect'

const dots = {
  morning: {
    key:'morning',
    color:'#FFFA00FF',
  },
  midday: {
    key:'midday',
    color:'#306DCEFF',
  },
  afternoon: {
    key:'afternoon',
    color:'#E65B18FF',
  },
}
const getDotMarker = ({start_date, ...runTime}) => {
  const start_date1 = start_date.clone().minute(0)
  return (
    start_date.isBefore(start_date1.hour(12), 'hour') ?
      dots.morning :
      start_date.isBefore(start_date1.hour(5), 'hour') ?
        dots.midday :
        dots.afternoon
  )
}

export const markedDates = createSelector(
  state => state.runTimes.items,
  runTimes => {
    return runTimes.reduce((ac, runTime) => {
      const date_key = runTime.start_date.format('YYYY-MM-DD')
      const runTime1 = ac[date_key]

      if (runTime1){
        runTime1.dots.push(getDotMarker(runTime))
        runTime1.runTimes.push(runTime)
      }
      else{
        ac[date_key] = {
          runTimes: [runTime],
          dots: [getDotMarker(runTime)],
          marked: true,
        }
      }
      return ac
    }, {})
  }
)

const runTimeDescription = runTime => (
  `Entregas se realizan de las ${runTime.start_date.format('hA')} a las ${runTime.end_date.format('hA')}`
)
const runTimeRange = runTime => (
  `${runTime.start_date.format('hA')} a ${runTime.end_date.format('hA')}`
)
export const groupedByDay = createSelector(
  state => withRunTimes(state),
  runTimes => {
    return runTimes.reduce((ac, runTime) => {
      const date_key = runTime.start_date.format('YYYY-MM-DD')
      const runTime1 = ac.find(runTime1 => runTime1.date === date_key)

      if (runTime1){
        runTime1.dots.push(getDotMarker(runTime))
        runTime1.runTimes.push(runTime)
      }
      else{
        ac.push({
          date: date_key,
          runTimes: [runTime],
          dots: [getDotMarker(runTime)],
        })
      }
      return ac
    }, [])
  }
)

export const withRunTimes = createSelector(
  state => state.runTimes.items,
  runTimes => (
    runTimes.map(runTime => ({
      ...runTime,
      description: runTimeDescription(runTime),
      runTimeRange: runTimeRange(runTime)
    }))
  )
)