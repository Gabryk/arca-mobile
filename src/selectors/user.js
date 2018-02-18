import { createSelector } from 'reselect'

export const user = createSelector(
  state => state.user,
  user => (
    {
      ...user,
      phone: !user.phone ? 'Sin teléfono' : user.phone,
      full_name: `${user.name} ${user.last_name}` 
    }
  )
)