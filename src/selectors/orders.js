import { createSelector } from 'reselect'

export const currentOrder = createSelector(
  state => state.orders.items.find( order => order.status === 'open' ),
  order => order
)
export const findOrder = createSelector(
  (state, {orderId}) => state.orders.items.find(order => order.id === orderId),
  order => order
)

const totalAmount = (price, quantity) => price*quantity
const fillOrder = (order, products) => {
  const items = order.items.map( ({productId, ...item}) => {
    const product = products.items.find( product => product.id===productId )
    return {
      ...item,
      product,
      total: totalAmount(product.price, item.quantity),
    }
  })
  return {
    ...order,
    items,
    sub_total: items.reduce((ac, item) => item.total+ac, 0),
    total: items.reduce((ac, item) => item.total+ac, 0),
  }
}
export const withProducts = createSelector(
  state => state.products,
  state => state.orders,
  (products, orders) => {
    const items = Array.isArray(orders.items) ?
      orders.items.map(order => fillOrder(order, products)) :
      []
    return {
      ...orders,
      items,
    }
  }
)

export const orders = createSelector(
  state => withProducts(state),
  orders => orders
)
export default orders