import { createSelector } from 'reselect'
import { currentOrder} from './orders'


export const filter = createSelector(
  (state, {productId}) => state.products.items.find(product => product.id === productId),
  (product) => ({items:[product]})
)

const totalAmount = (price, quantity) => price*quantity
export const fillWithOrder = (product, order) => {
  const orderItem = order.items.find(item => item.productId === product.id)
  if (orderItem)
    return {
      ...product,
      order: {
        ...order,
        quantity: orderItem.quantity,
        totalAmount: totalAmount(product.price, orderItem.quantity)
      }
    }
  return product
}
export const products = createSelector(
  state => state.products,
  state => currentOrder(state),
  (products, order) => {
    if (!order) 
      return products
    
    const items = products.items.map( product => fillWithOrder(product, order) )
    return {
      ...products,
      items
    }
  }
)