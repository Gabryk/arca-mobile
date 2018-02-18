import React, { Component } from 'react'
import { withRouter } from 'react-router-native'
import { withAddressBook } from 'Connectors/addressBook'

import ItemAddress from './ItemAddress'
import List from 'Components/common/List'

import styles from './styles'
import theme from 'Theme/styles'


@withAddressBook
@withRouter
class ListAddresses extends Component {
  componentDidMount(){
    const {
      addressBook,
      AddressBook,
    } = this.props
    if (!addressBook.items.length)
      AddressBook.fetch()
  }
  render(){
    const {
      addressBook,
      ...props
    } = this.props
    return (
      <List
        loading={addressBook.loading}
        data={addressBook ? addressBook.items : []}
        renderItem={ (props) =>
          (<ItemAddress
            {...props}
            onItemPress={this.onItemPress}
          />)
        }
        {...props}
      />
    )
  }

  onItemPress = item => {
    const { history } = this.props
    history.push(`/address/${item.id}`)
  }
}
export default ListAddresses