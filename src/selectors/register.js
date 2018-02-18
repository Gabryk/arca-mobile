import { createSelector } from 'reselect'

export const register = createSelector(
  state => state.register,
  (register) => {
    return {
      ...register,
      completed: register.location && register.delivery_date
    }
  }
)