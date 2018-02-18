import React from 'react'
import PropTypes from 'prop-types'
import {
  FlatList,
  View,
} from 'react-native'

import Spinner from 'react-native-spinkit'

import theme from 'Theme/styles'
import Colors  from 'Theme/colors'

const genId = (id, keyExtractor) => {
  const k = typeof id === 'object' ? keyExtractor(id) : id
  return [k, k]
}
const isSelected = (selected, nextSelec, keyExtractor) => (
  Array.isArray(nextSelec) ?
    selected.size === nextSelec.length &&
    nextSelec.every( i => selected.get( genId(i, keyExtractor)[0]) )
    :
    selected.get( genId(nextSelec, keyExtractor)[0] )
)
export default class List extends React.PureComponent {
  state = {selected: (new Map(): Map<string, boolean>)}

  _setSelected = (nextSelec, fn=()=>{}) => {
    const { keyExtractor } = this.props

    if (isSelected(this.state.selected, nextSelec, keyExtractor))
      return 0

    this.setState(
      (state) => {
        const selected = Array.isArray(nextSelec) ?
          new Map( nextSelec.map( i => genId(i, keyExtractor)) ) :
          new Map(state.selected)

        if (!Array.isArray(nextSelec))
          selected.set(nextSelec, !selected.get(nextSelec)) // toggle

        return {selected}
      },
      fn
    )
  }
  _onPressItemMiddleware = id => {
    const {
      onPressItem,
      selected,
    } = this.props
    if (!Array.isArray(selected))
      this._setSelected(
        id,
        () => onPressItem(id)
      )
    else
      onPressItem(id)
  }
  _renderItem = (props) => {
    const { selected } = this.state
    const {
      renderItem,
      keyExtractor,
    } = this.props

    return renderItem({
      ...props,
      selected: !!selected.get(keyExtractor(props.item)),
      onPress: this._onPressItemMiddleware,
    })
  }
  componentWillReceiveProps(nextProps){
    const { selected } = nextProps
    this._setSelected(selected)
  }
  render() {
    const {
      data,
      renderItem,
      keyExtractor,
      onPressItem,
      loading,
      ...props,
    } = this.props

    if (loading)
      return (
        <View style={[theme.item, theme.vCenter, theme.hCenter]}>
          <Spinner size={68} type='ThreeBounce' color={Colors.primary}/>
        </View>)

    return (
      <FlatList
        {...props}
        data={data}
        extraData={this.state}
        keyExtractor={keyExtractor}
        renderItem={this._renderItem}
      />
    );
  }
}
List.defaultProps = {
  onPressItem: () => {},
  keyExtractor: item => item.id,
}
List.propTypes = {
  onPressItem: PropTypes.func,
  keyExtractor: PropTypes.func,
}