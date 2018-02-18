import { createSelector } from 'reselect'
import moment from 'moment'


const Notification = notification => ({
  ...notification,
  date: moment(notification.created_at).calendar(),
})

export const Notifications = createSelector(
  state => state.notifications,
  notifications => ({
    ...notifications,
    items: notifications.items.map(Notification)
  })
)