import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from 'Actions/orders'
import {
  currentOrder,
  findOrder,
  withProducts as ordersWithProducts
} from 'Selectors/orders'

export const orderActions = WrappedComponent => connect( null, dispatch => ({
  Orders: bindActionCreators(actions, dispatch)
}))(WrappedComponent)

export const current = WrappedComponent => connect( state => {
  const order = currentOrder(state)
  if (!order)
    return {}
  else
    return {
      order: ordersWithProducts({
        ...state,
        orders:{items:[order]}
      }).items[0]
    }
})(WrappedComponent)

export const find = WrappedComponent => connect( (state, ownProps) => {
  const order = findOrder(state, ownProps)
  if (!order)
    return {}
  else
    return {
      order: ordersWithProducts({
        ...state,
        orders:{items:[order]}
      })
    }
})(WrappedComponent)

export const withProducts = WrappedComponent => connect( state => ({
  orders: ordersWithProducts(state)
}))(WrappedComponent)

export const orders = WrappedComponent => connect( state => ({
  orders: ordersWithProducts(state)
}))(WrappedComponent)

export default orders