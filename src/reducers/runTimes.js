import{
  _RUN_TIMES_ADD,
} from 'Actions/runTimes'
import moment from 'moment'

const initial_state = {
  items: [
    {
      id: '-dev-run-time-1',
      start_date: moment().add(2, 'days').hour(8),
      end_date: moment().add(2, 'days').hour(11),
      route: '-def-route-1',
    },
    {
      id: '-dev-run-time-6',
      start_date: moment().add(2, 'days').hour(17),
      end_date: moment().add(2, 'days').hour(20),
      route: '-def-route-1',
    },
    {
      id: '-dev-run-time-2',
      start_date: moment().add(3, 'days').hour(17),
      end_date: moment().add(3, 'days').hour(20),
      route: '-def-route-1',
    },
    {
      id: '-dev-run-time-3',
      start_date: moment().add(5, 'days').hour(8),
      end_date: moment().add(5, 'days').hour(11),
      route: '-def-route-1',
    },
  ]
}

export default (state = initial_state, action) => {
  switch(action.type){
    default:
      return state
  }
}