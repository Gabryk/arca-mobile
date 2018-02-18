import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Products from 'Actions/products'
import { products, filter } from 'Selectors/products'


export const find = WrappedComponent => connect( (state, ownProps) => ({
  product: products({
    ...state,
    products: filter(state, ownProps.match.params)
  }).items[0]
}))(WrappedComponent)

export default WrappedComponent => connect(
  state => ({
    products: products(state)
  }),
  dispatch => ({
    Products: bindActionCreators(Products, dispatch)
  })
)(WrappedComponent)