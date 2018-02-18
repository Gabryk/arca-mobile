import{
  _ORDERS_FETCH,
  _ORDERS_FETCH_SUCCEED,
  ORDER_CREATE,
  _CURRENT_ORDER_ADD_PRODUCT,
  _CURRENT_ORDER_REMOVE_PRODUCT
} from 'Actions/orders'

const initial_state = {
  items: [],
  loading: false,
}

const updateOrderProduct = (order, {productId, ...data}) => {
  const itemIndex = order.items.findIndex(item => item.productId === productId)
  return task => {
    const items = itemIndex >= 0 ?
      order.items.map( (item, index) => {
        return index===itemIndex ?
          task(item):
          item
        }
      ):
      [
        ...order.items,
        task({ ...data, productId, quantity: 0 })
      ]

    return {
      ...order,
      items: items.filter( item => item.quantity > 0 )
    }
  }
}

const updateOrder = (state, action) => {
  if (!action.payload)
    return order => order

  let { productId } = action.payload
  switch(action.type){
    case _CURRENT_ORDER_ADD_PRODUCT:
      return order => order.status === 'open' ?
        updateOrderProduct(order, action.payload)(item => ({
          ...item,
          quantity:item.quantity+1
        })):
        order
    case _CURRENT_ORDER_REMOVE_PRODUCT:
      return order => order.status === 'open' ?
        updateOrderProduct(order, action.payload)(item => ({
          ...item,
          quantity:item.quantity-1
        })):
        order
    default:
      return order => order
  }
}
export default (state = initial_state, action) => {
  switch(action.type){
    case ORDER_CREATE:
      return {
        ...state,
        items: [...state.items, action.payload]
      }

    case _ORDERS_FETCH:
      return{
        ...state,
        loading: true,
      }

    case _ORDERS_FETCH_SUCCEED:
      return{
        ...state,
        items: action.payload,
        loading: false,
      }

    default:
      return {
        ...state,
        items: state.items.map(updateOrder(state, action))
      }
  }
}