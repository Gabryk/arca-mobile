import Home from 'Views/Home'
import Product from 'Views/Product'
import ShoppingCart from 'Views/ShoppingCart'
import Purchase from 'Views/Purchase'
import Products from 'Views/Products'
import Register from 'Views/Register'
import Profile from 'Views/Profile'
import ProfileEdit from 'Views/ProfileEdit'
import Notifications from 'Views/Notifications'
import AddressBook from 'Views/AddressBook'
import Address from 'Views/Address'

export default [
  { path: '/',  exact: true, component: Home },
  { path: '/home', component: Home },
  { path: '/products', component: Products },
  { path: '/product/:productId', component: Product },
  { path: '/shopping-cart', component: ShoppingCart },
  { path: '/purchase/:purchaseId', component: Purchase },
  { path: '/register', component: Register },
  { path: '/profile', component: Profile },
  { path: '/profile-edit', component: ProfileEdit },
  { path: '/notifications', component: Notifications },
  { path: '/address_book', component: AddressBook },
  { path: '/address_create', component: Address },
  { path: '/address/:addressId', component: Address },
]
